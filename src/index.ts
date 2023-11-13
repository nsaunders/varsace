import fs from "fs/promises";
import pathNode from "path";
import { generate } from "@k-vyn/coloralgorithm";
import config from "./colors";

function path(p: string) {
  return pathNode.join(process.cwd(), p);
}

const fileNames = ["index.js", "index.d.ts"] as const;

async function main() {
  if (process.argv.includes("--config")) {
    process.stdout.write(JSON.stringify(config));
    process.exit(0);
  }

  if (process.argv.includes("--clean")) {
    await Promise.all(
      fileNames.map(p => fs.rm(path(p), { recursive: true, force: true })),
    );
    console.log("Cleaned up files.");
    process.exit(0);
  }

  const colors = Object.fromEntries(
    config
      .flatMap(({ properties, options }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
        return generate(properties, options);
      })
      .flatMap(
        ({ name, colors }) =>
          /* eslint-disable @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */
          colors.map(({ hex }: { hex: string }, index) => {
            return [
              `${name?.toLowerCase()}${((index + 1) * 5)
                .toString()
                .padStart(2, "0")}`,
              hex,
            ];
          }),
        /* eslint-enable @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */
      )
      .sort(([a]: string[], [b]: string[]) => (a < b ? -1 : a > b ? 1 : 0)),
  );

  if (
    !("gray05" in colors) ||
    typeof colors.gray05 !== "string" ||
    !colors.gray05
  ) {
    throw new Error('Could not find expected color "gray05".');
  }

  const white =
    "#" +
    [...(colors.gray05.match(/[a-f0-9]{2}/g) || [])]
      .map(x => {
        const val = Math.ceil((255 + parseInt(`0x${x}`)) / 2).toString(16);
        return val.length === 1 ? `0${val}` : val;
      })
      .join("");

  if (
    !("gray95" in colors) ||
    typeof colors.gray95 !== "string" ||
    !colors.gray95
  ) {
    throw new Error('Could not find expected color "gray95".');
  }

  const black =
    "#" +
    [...(colors.gray95.match(/[a-f0-9]{2}/g) || [])]
      .map(x => {
        const val = Math.floor(parseInt(`0x${x}`) / 2).toString(16);
        return val.length === 1 ? `0${val}` : val;
      })
      .join("");

  const allColors = { ...colors, black, white };

  const files: Record<(typeof fileNames)[number], string> = {
    "index.js": Object.entries(allColors)
      .map(([name, fallback]) => `export const ${name} = "${fallback}";`)
      .join("\n"),
    "index.d.ts": Object.keys(allColors)
      .map(name => `declare const ${name}: string;`)
      .concat(`\nexport {\n  ${Object.keys(allColors).join(",\n  ")}\n}`)
      .join("\n"),
  };

  await Promise.all(
    Object.entries(files).map(([file, contents]) =>
      fs.writeFile(path(file), contents),
    ),
  );
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
