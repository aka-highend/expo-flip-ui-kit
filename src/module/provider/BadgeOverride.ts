function roundedBadgeObject(props: Record<string, any>) {
  let { colorScheme } = props;
  return {
    bg: `${colorScheme}.Minus2`,
    _text: { color: `${colorScheme}.Plus2` },
    borderWidth: "1",
    borderColor: "transparent",
    rounded: "full",
  };
}

export const BadgeOverride = {
  Badge: {
    defaultProps: {
      variant: "rounded",
      colorScheme: "crimsonRed",
    },
    variants: {
      rounded: roundedBadgeObject,
    },
  },
};

export default BadgeOverride;
