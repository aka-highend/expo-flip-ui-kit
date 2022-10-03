const disabledButtonObject = {
  opacity: 1,
  bg: "neutral.BorderAndDisabled",
  borderColor: "neutral.BorderAndDisabled",
  _text: {
    color: "neutral.SecondaryText",
  },
  _icon: {
    color: "neutral.SecondaryText",
  },
};

const primaryButtonObject = {
  bg: "flipOrange.Main",
  borderColor: "flipOrange.Main",
  _text: {
    color: "white",
  },
  _icon: {
    color: "white",
  },
  _loading: {
    bg: "flipOrange.Plus1",
    borderColor: "flipOrange.Plus1",
    opacity: 1,
  },
  _pressed: {
    bg: "flipOrange.Plus1",
    borderColor: "flipOrange.Plus1",
  },
  _hover: {
    bg: "flipOrange.Plus1",
    borderColor: "flipOrange.Plus1",
  },
  _focus: {
    bg: "flipOrange.Plus1",
    borderColor: "flipOrange.Plus1",
  },
  _disabled: disabledButtonObject,
};

const secondaryButtonObject = {
  bg: "white",
  _text: {
    color: "flipOrange.Main",
  },
  _icon: {
    color: "flipOrange.Main",
  },
  _pressed: {
    bg: "white",
    borderColor: "flipOrange.Plus1",
    _text: {
      color: "flipOrange.Plus1",
    },
  },
  _hover: {
    bg: "white",
    borderColor: "flipOrange.Plus1",
    _text: {
      color: "flipOrange.Plus1",
    },
  },
  _disabled: {
    opacity: 1,
    borderColor: "neutral.BorderAndDisabled",
    _text: {
      color: "neutral.SecondaryText",
    },
  },
  _loading: {
    bg: "white",
    borderColor: "flipOrange.Plus1",
    opacity: 1,
  },
  borderColor: "flipOrange.Main",
};

export const ButtonOverride = {
  Button: {
    baseStyle: {
      rounded: "full",
      borderWidth: 1.5,
      _stack: {
        space: 1,
      },
      _text: {
        fontWeight: "bold",
      },
    },
    defaultProps: {
      variant: "primary",
    },
    variants: {
      solid: primaryButtonObject,
      primary: primaryButtonObject,
      secondary: secondaryButtonObject,
      outline: secondaryButtonObject,
      tertiary: {
        bg: "flipOrange.Minus3",
        borderColor: "flipOrange.Minus3",
        _text: {
          color: "flipOrange.Main",
        },
        _icon: {
          color: "flipOrange.Main",
        },
        _pressed: {
          bg: "flipOrange.Minus2",
          borderColor: "flipOrange.Minus2",
          _text: {
            color: "flipOrange.Plus1",
          },
        },
        _hover: {
          bg: "flipOrange.Minus2",
          borderColor: "flipOrange.Minus2",
          _text: {
            color: "flipOrange.Plus1",
          },
        },
        _disabled: disabledButtonObject,
      },
    },
    sizes: {
      md: {
        px: 4,
        height: "11.5",
        _icon: {
          size: 4,
        },
        _text: {
          lineHeight: 24,
        },
      },
      sm: {
        px: 3,
        py: 0,
        height: 7,
        _text: {
          fontSize: "xs",
        },
      },
    },
  },
};

export default ButtonOverride;
