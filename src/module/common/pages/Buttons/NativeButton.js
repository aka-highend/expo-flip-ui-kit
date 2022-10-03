import React from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";

const AndroidButton = ({
  accessibilityLabel,
  isDisabled,
  onPress,
  highlightColor,
  children,
}) => {
  return (
    <TouchableNativeFeedback
      accessibilityLabel={accessibilityLabel}
      background={TouchableNativeFeedback.Ripple(highlightColor, false)}
      onPress={onPress}
      disabled={isDisabled}
    >
      {children}
    </TouchableNativeFeedback>
  );
};

const IOSButton = ({
  accessibilityLabel,
  isDisabled,
  onPress,
  highlightColor,
  children,
}) => {
  return (
    <TouchableHighlight
      accessibilityLabel={accessibilityLabel}
      underlayColor={highlightColor}
      onPress={onPress}
      disabled={isDisabled}
    >
      {children}
    </TouchableHighlight>
  );
};

const NativeButton = ({
  isDisabled,
  onPress,
  highlightColor,
  children,
  accessibilityLabel,
}) => {
  return Platform.OS === "android" ? (
    <AndroidButton
      accessibilityLabel={accessibilityLabel}
      highlightColor={highlightColor}
      isDisabled={isDisabled}
      onPress={onPress}
    >
      {children}
    </AndroidButton>
  ) : (
    <IOSButton
      accessibilityLabel={accessibilityLabel}
      highlightColor={highlightColor}
      isDisabled={isDisabled}
      onPress={onPress}
    >
      {children}
    </IOSButton>
  );
};

NativeButton.propTypes = {
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  highlightColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  accessibilityLabel: PropTypes.string,
};

export default NativeButton;
