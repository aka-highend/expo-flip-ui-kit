const IconButtonOverride = {
  IconButton: {
    baseStyle: {
      borderRadius: "full",
    },
    variants: {
      clean: {
        bg: "transparent",
        _pressed: {
          bg: "transparent",
        },
        _hover: {
          bg: "transparent",
        },
      },
      neutral: {
        bg: "neutral.Container",
        _icon: {
          color: "white",
        },
        _pressed: {
          bg: "neutral.BorderAndDisabled",
        },
        _hover: {
          bg: "neutral.BorderAndDisabled",
        },
      },
      flipOrange: {
        bg: "flipOrange.Main",
        _icon: {
          color: "white",
        },
        _pressed: {
          bg: "flipOrange.Plus1",
        },
        _hover: {
          bg: "flipOrange.Plus1",
        },
      },
      goldenYellow: {
        bg: "goldenYellow.Main",
        _icon: {
          color: "white",
        },
        _pressed: {
          bg: "goldenYellow.Plus1",
        },
        _hover: {
          bg: "goldenYellow.Plus1",
        },
      },
      crimsonRed: {
        bg: "crimsonRed.Main",
        _icon: {
          color: "white",
        },
        _pressed: {
          bg: "crimsonRed.Plus1",
        },
        _hover: {
          bg: "crimsonRed.Plus1",
        },
      },
      jadeGreen: {
        bg: "jadeGreen.Main",
        _icon: {
          color: "white",
        },
        _pressed: {
          bg: "jadeGreen.Plus1",
        },
        _hover: {
          bg: "jadeGreen.Plus1",
        },
      },
      sapphireBlue: {
        bg: "sapphireBlue.Main",
        _icon: {
          color: "white",
        },
        _pressed: {
          bg: "sapphireBlue.Plus1",
        },
        _hover: {
          bg: "sapphireBlue.Plus1",
        },
      },
      mauvePurple: {
        bg: "mauvePurple.Main",
        _icon: {
          color: "white",
        },
        _pressed: {
          bg: "mauvePurple.Plus1",
        },
        _hover: {
          bg: "mauvePurple.Plus1",
        },
      },
    },
  },
};

export default IconButtonOverride;
