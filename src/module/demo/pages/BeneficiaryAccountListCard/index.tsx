import { FlipColors } from "../FlipColors/index";
import {
  FactoryComponentProps,
  Image,
  Text,
  View,
} from "native-base";
import { HStack, VStack } from "../Stack/index";
import React, { useEffect } from "react";
import {
  Animated,
  Easing,
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { Star } from "../Icons/function/Star";

export interface BeneficiaryAccountListCardProps {
  as?: React.ComponentType<any>;
  key?: string;
  title: string;
  bankName: string;
  bankAccount: string;
  avatar?: ImageSourcePropType;
  bankIcon?: ImageSourcePropType;
  isSelected?: boolean;
  disturbanceLabel?: string;
  isBankInDisturbance?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onPressRight?: () => void;
  avatarImgComponent?: React.ReactElement;
  bankIconComponent?: React.ReactElement;
}

export const BeneficiaryAccountListCard: React.FC<
  BeneficiaryAccountListCardProps &
    TouchableOpacityProps &
    FactoryComponentProps
> = (props) => {
  const {
    as,
    key,
    onPress,
    avatar,
    title,
    bankName,
    bankAccount,
    bankIcon,
    isSelected,
    onPressRight,
    disturbanceLabel,
    isBankInDisturbance,
    containerStyle,
    avatarImgComponent,
    bankIconComponent,
    ...rest
  } = props;

  const opacity = new Animated.Value(0);
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animate = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 700,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: FlipColors.neutral.White,
          borderWidth: 1,
          borderColor: FlipColors.neutral.BorderAndDisabled,
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 10,
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        },
        props.containerStyle,
      ]}
      onPress={onPress}
      {...rest}
    >
      {avatarImgComponent ? (
        avatarImgComponent
      ) : (
        <Image
          key={key}
          resizeMode="contain"
          w={"48px"}
          h={"48px"}
          rounded={"full"}
          bg={"neutral.BorderAndDisabled"}
          source={avatar}
          alt="image avatar"
        />
      )}

      <VStack ml="3" space="1" w="full" flex="1">
        <Text
          fontSize="md"
          numberOfLines={1}
          lineHeight="24px"
          textTransform="capitalize"
        >
          {title}
        </Text>
        <HStack space="5px" alignItems="center">
          <View bg="neutral.Container" rounded="6" overflow="hidden">
            {bankIconComponent ? (
              bankIconComponent
            ) : (
              <Image
                resizeMode="contain"
                w="28px"
                h="28px"
                m="2px"
                key={key}
                source={bankIcon}
                alt="image bankicon"
              />
            )}
          </View>
          <VStack flex="1">
            <HStack>
              <Text
                flexShrink="1"
                numberOfLines={1}
                color="neutral.SecondaryText"
                fontSize="xs"
              >
                {bankName}
              </Text>
              {isBankInDisturbance && (
                <Text color="crimsonRed.Plus1" fontSize="xs" italic>
                  {disturbanceLabel}
                </Text>
              )}
            </HStack>
            <Text color="neutral.SecondaryText" fontSize="xs">
              {bankAccount}
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <TouchableOpacity style={{ paddingLeft: 16 }} onPress={onPressRight}>
        <Animated.View style={{ transform: [{ scale: size }] }}>
          <Star
            size="6"
            color={
              isSelected ? "goldenYellow.Main" : "neutral.BorderAndDisabled"
            }
          />
        </Animated.View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BeneficiaryAccountListCard;
