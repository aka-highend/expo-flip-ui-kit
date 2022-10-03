import React, { useMemo } from "react";
import {
  Button,
  Flex,
  IImageProps,
  Image,
  Text,
  View,
  VStack,
} from "native-base";
import type {
  AccessibilityProps,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface IDialog {
  headerComponent?: React.ReactElement;
  title?: string;
  titleStyle?: StyleProp<TextStyle> | undefined;
  description?: React.ReactNode;
  descriptionStyle?: StyleProp<TextStyle> | undefined;
  buttonDirection?: "vertical" | "horizontal";
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  testID?: string;
  style?: StyleProp<ViewStyle> | undefined;
  illustrationSrc?: ImageSourcePropType;
  illustrationProps?: IImageProps;
  withSwipeLine?: boolean;
}

export const Dialog: React.FC<IDialog & AccessibilityProps> = (props) => {
  const {
    title,
    titleStyle,
    description,
    descriptionStyle,
    buttonDirection,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel,
    headerComponent,
    testID,
    style,
    illustrationSrc,
    illustrationProps,
    withSwipeLine,
    ...rest
  } = props;

  const testIDLabel = useMemo(() => testID ?? undefined, [testID]);
  const accessibilityLabel = useMemo(
    () => props.accessibilityLabel ?? undefined,
    [props.accessibilityLabel]
  );

  return (
    <Flex
      p="4"
      bg="white"
      rounded="2xl"
      testID={testID}
      style={style}
      {...rest}
    >
      <View justifyContent={"center"} alignItems="center">
        {withSwipeLine && (
          <View
            height={"6px"}
            width={"56px"}
            bg={"neutral.lightGrey"}
            borderRadius={"4"}
          />
        )}
        {illustrationSrc && (
          <Image
            source={illustrationSrc}
            width={"220px"}
            height={"85px"}
            resizeMode="contain"
            {...illustrationProps}
          />
        )}
      </View>
      {headerComponent}
      <VStack space="4">
        {(title || description) && (
          <VStack space="1">
            {title && (
              <Text
                testID={testIDLabel && `${testIDLabel}_title`}
                accessibilityLabel={
                  accessibilityLabel && `${accessibilityLabel}_title`
                }
                textAlign="center"
                fontSize="lg"
                fontWeight="bold"
                style={titleStyle}
              >
                {title}
              </Text>
            )}
            {description && React.isValidElement(description) ? (
              description
            ) : (
              <Text
                testID={testIDLabel && `${testIDLabel}_description`}
                accessibilityLabel={
                  accessibilityLabel && `${accessibilityLabel}_description`
                }
                fontSize="xs"
                style={descriptionStyle}
              >
                {description}
              </Text>
            )}
          </VStack>
        )}
        {(confirmLabel || cancelLabel) && (
          <Button.Group
            direction={buttonDirection === "horizontal" ? "row" : "column"}
            flexDirection={
              buttonDirection === "horizontal" ? "row-reverse" : "column"
            }
          >
            {confirmLabel ? (
              <Button
                testID={testIDLabel && `${testIDLabel}_confirm`}
                accessibilityLabel={
                  accessibilityLabel && `${accessibilityLabel}_confirm`
                }
                flex="1"
                onPress={onConfirm}
              >
                {confirmLabel}
              </Button>
            ) : (
              <></>
            )}
            {cancelLabel ? (
              <Button
                testID={testIDLabel && `${testIDLabel}_cancel`}
                accessibilityLabel={
                  accessibilityLabel && `${accessibilityLabel}_cancel`
                }
                flex="1"
                variant="secondary"
                onPress={onCancel}
              >
                {cancelLabel}
              </Button>
            ) : (
              <></>
            )}
          </Button.Group>
        )}
      </VStack>
    </Flex>
  );
};

export default Dialog;
