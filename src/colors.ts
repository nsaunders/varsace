import type { generate } from "@k-vyn/coloralgorithm/src";

export default [
  {
    properties: {
      steps: 9,
      hue: {
        start: 112,
        end: 113,
        curve: "easeOutQuad",
      },
      saturation: {
        start: 0.05,
        end: 0.76,
        rate: 1,
        curve: "easeOutQuad",
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
      steps: 9,
      hue: {
        start: 182,
        end: 184,
        curve: "easeOutQuad",
      },
      saturation: {
        start: 0.06,
        end: 0.9,
        rate: 1,
        curve: "easeOutQuad",
      },
      brightness: {
        start: 1,
        end: 0.04,
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
      steps: 9,
      hue: {
        start: 207,
        end: 220,
        curve: "easeOutQuad",
      },
      saturation: {
        start: 0.1,
        end: 0.36,
        rate: 0.8,
        curve: "easeOutQuad",
      },
      brightness: {
        start: 1,
        end: 0.05,
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
      steps: 9,
      hue: {
        start: 174,
        end: 224,
        curve: "easeOutQuad",
      },
      saturation: {
        start: 0.13,
        end: 0.73,
        rate: 0.9,
        curve: "easeOutQuad",
      },
      brightness: {
        start: 1,
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
      steps: 9,
      hue: {
        start: 299,
        end: 306,
        curve: "easeOutQuad",
      },
      saturation: {
        start: 0.1,
        end: 0.47,
        rate: 0.9,
        curve: "easeOutQuad",
      },
      brightness: {
        start: 1,
        end: 0.05,
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
      steps: 9,
      hue: {
        start: 255,
        end: 256,
        curve: "easeOutQuad",
      },
      saturation: {
        start: 0.09,
        end: 0.77,
        rate: 1.3,
        curve: "easeInSine",
      },
      brightness: {
        start: 1,
        end: 0.05,
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
      steps: 9,
      hue: {
        start: 12,
        end: 5,
        curve: "easeInOutCubic",
      },
      saturation: {
        start: 0.05,
        end: 1,
        rate: 0.9,
        curve: "linear",
      },
      brightness: {
        start: 1,
        end: 0.05,
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
      steps: 9,
      hue: {
        start: 59,
        end: 50,
        curve: "easeOutQuint",
      },
      saturation: {
        start: 0.04,
        end: 1,
        rate: 1.1,
        curve: "easeOutCubic",
      },
      brightness: {
        start: 0.94,
        end: 0.05,
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
  {
    properties: {
      steps: 9,
      hue: {
        start: 0,
        end: 350,
        curve: "easeInOutQuart",
      },
      saturation: {
        start: 0.09,
        end: 1,
        rate: 1.1,
        curve: "easeInSine",
      },
      brightness: {
        start: 1,
        end: 0.05,
        curve: "linear",
      },
    },
    options: {
      minorSteps: [],
      name: "Red",
      provideInverted: false,
      rotation: "counterclockwise",
    },
  },
] satisfies {
  properties: Parameters<typeof generate>[0];
  options: Parameters<typeof generate>[1];
}[];
