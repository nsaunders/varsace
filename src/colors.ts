import type { generate } from "@k-vyn/coloralgorithm/src";

export default [
  {
    properties: {
      steps: 19,
      hue: {
        start: 205,
        end: 215,
        curve: "easeInCubic",
      },
      saturation: {
        start: 0.04,
        end: 1,
        rate: 2,
        curve: "linear",
      },
      brightness: {
        start: 0.97,
        end: 0.05,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Blue",
      provideInverted: false,
      rotation: "clockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 210,
        end: 224,
        curve: "linear",
      },
      saturation: {
        start: 0.01,
        end: 0.19,
        rate: 2,
        curve: "linear",
      },
      brightness: {
        start: 0.88,
        end: 0.03,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Gray",
      provideInverted: false,
      rotation: "clockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 138,
        end: 145,
        curve: "linear",
      },
      saturation: {
        start: 0.04,
        end: 0.89,
        rate: 0.9,
        curve: "easeOutCubic",
      },
      brightness: {
        start: 1,
        end: 0.03,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Green",
      provideInverted: false,
      rotation: "clockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 33,
        end: 13,
        curve: "linear",
      },
      saturation: {
        start: 0.02,
        end: 0.9,
        rate: 2,
        curve: "linear",
      },
      brightness: {
        start: 1,
        end: 0.03,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Orange",
      provideInverted: false,
      rotation: "counterclockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 327,
        end: 336,
        curve: "easeInOutQuad",
      },
      saturation: {
        start: 0.03,
        end: 0.91,
        rate: 2,
        curve: "linear",
      },
      brightness: {
        start: 1,
        end: 0.03,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Pink",
      provideInverted: false,
      rotation: "clockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 270,
        end: 274,
        curve: "linear",
      },
      saturation: {
        start: 0.03,
        end: 1,
        rate: 1,
        curve: "linear",
      },
      brightness: {
        start: 1,
        end: 0.03,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Purple",
      provideInverted: false,
      rotation: "clockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 0,
        end: 0,
        curve: "linear",
      },
      saturation: {
        start: 0.02,
        end: 0.86,
        rate: 2,
        curve: "linear",
      },
      brightness: {
        start: 1,
        end: 0.03,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Red",
      provideInverted: false,
      rotation: "clockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 166,
        end: 179,
        curve: "linear",
      },
      saturation: {
        start: 0.04,
        end: 0.92,
        rate: 2,
        curve: "easeInOutCubic",
      },
      brightness: {
        start: 1,
        end: 0.02,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Teal",
      provideInverted: false,
      rotation: "clockwise",
    },
  },
  {
    properties: {
      steps: 19,
      hue: {
        start: 55,
        end: 26,
        curve: "linear",
      },
      saturation: {
        start: 0.03,
        end: 0.91,
        rate: 2,
        curve: "linear",
      },
      brightness: {
        start: 1,
        end: 0.03,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Yellow",
      provideInverted: false,
      rotation: "counterclockwise",
    },
  },
] satisfies {
  properties: Parameters<typeof generate>[0];
  options: Parameters<typeof generate>[1];
}[];
