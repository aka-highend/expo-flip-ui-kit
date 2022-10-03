import React from "react";
import { StyleSheet, View, Text, ActivityIndicator, Image } from "react-native";
import Color from "../colors";
import NativeButton from "./NativeButton";
import buttonStyles from "./styles";
import PropTypes from "prop-types";

const PrimaryButton = ({
  isDisabled,
  isLoading,
  prependIcon,
  appendIcon,
  text,
  onPress,
  size = "default",
  wrap = false,
  disableTint = false,
  style,
  onLayout,
  accessibilityLabel,
}) => {
  return (
    <View style={style} onLayout={onLayout}>
      <View
        style={[
          size === "default"
            ? buttonStyles.defaultButtonContainer
            : buttonStyles.smallButtonContainer,
          wrap ? { alignSelf: "baseline" } : {},
          isLoading
            ? styles.loadingButtonBody
            : isDisabled
            ? styles.disabledButtonBody
            : styles.activeButtonBody,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={Color.white} size={"small"} />
        ) : (
          <NativeButton
            accessibilityLabel={accessibilityLabel}
            isDisabled={isDisabled}
            highlightColor={Color.flipOrangePlus2}
            onPress={onPress}
          >
            <View
              style={[
                size === "default"
                  ? buttonStyles.defaultButtonBody
                  : buttonStyles.smallButtonBody,
              ]}
            >
              {prependIcon ? (
                <Image
                  source={prependIcon}
                  style={[
                    buttonStyles.leftIcon,
                    isDisabled ? styles.disabledIcon : styles.icon,
                    disableTint
                      ? {
                          tintColor: null,
                        }
                      : {},
                  ]}
                />
              ) : null}

              <Text
                style={[
                  size === "default"
                    ? isDisabled
                      ? styles.defaultDisabledButtonText
                      : styles.defaultButtonText
                    : isDisabled
                    ? styles.smallDisabledButtonText
                    : styles.smallButtonText,
                ]}
              >
                {text}
              </Text>

              {appendIcon ? (
                <Image
                  source={appendIcon}
                  style={[
                    buttonStyles.rightIcon,
                    isDisabled ? styles.disabledIcon : styles.icon,
                    disableTint
                      ? {
                          tintColor: null,
                        }
                      : {},
                  ]}
                />
              ) : null}
            </View>
          </NativeButton>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeButtonBody: {
    backgroundColor: Color.flipOrange,
    justifyContent: "center",
  },
  disabledButtonBody: {
    backgroundColor: Color.disabled,
    justifyContent: "center",
  },
  loadingButtonBody: {
    backgroundColor: Color.flipOrangePlus1,
    justifyContent: "center",
  },
  defaultButtonText: {
    color: Color.white,
  },
  defaultDisabledButtonText: {
    color: Color.secondaryText,
  },
  smallButtonText: {
    color: Color.white,
  },
  smallDisabledButtonText: {
    color: Color.secondaryText,
  },
  icon: {
    tintColor: Color.white,
  },
  disabledIcon: {
    tintColor: Color.secondaryText,
  },
});

PrimaryButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  wrap: PropTypes.bool,
  disableTint: PropTypes.bool,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  prependIcon: PropTypes.node,
  appendIcon: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onLayout: PropTypes.func,
  accessibilityLabel: PropTypes.string,
};

export default PrimaryButton;
