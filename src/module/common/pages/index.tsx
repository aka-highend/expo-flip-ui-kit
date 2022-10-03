import {
  Button,
  Pressable,
  ScrollView,
  Text,
  View,
} from "native-base";

import BeneficiaryAccountListCard from "../../demo/pages/BeneficiaryAccountListCard/index";
import Dialog from "../../demo/pages/Dialog/index";

import { HStack, VStack } from "../../demo/pages/Stack/index";

import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { Text as RNText } from "react-native";
import { RootStackParamList } from "../../../lib/Navigations/type";

import { Image, Toast } from "native-base";
import { TextInput } from "react-native";
import { DemoRoutingName } from "../../demo/navigation/type";
import { CommonRoutingName } from "../navigation/type";

type THome = NativeStackNavigationProp<
  RootStackParamList,
  CommonRoutingName.HOME
>;

const HomePage = () => {
  const navigation = useNavigation<THome>();

  const inputRef = useRef<TextInput>(null);

  return (
    <ScrollView>
      <View p="4">
        <Button onPress={() => inputRef.current?.clear()}>
          Clear Beneficiary Input
        </Button>

        <BeneficiaryAccountListCard
          key="bca-arryangga"
          avatar={{
            uri: "https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png",
          }}
          bankAccount="1829388401"
          bankIcon={{
            uri: "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/BCA-512.png",
          }}
          bankName="BCA Indonesia"
          isSelected
          onPress={() => {}}
          onPressRight={function noRefCheck() {}}
          title="Arryangga Aliev"
          avatarImgComponent={
            <Image
              // key={key}
              resizeMode="contain"
              w={"48px"}
              h={"48px"}
              rounded={"full"}
              bg={"neutral.BorderAndDisabled"}
              source={{
                uri: "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",
              }}
            />
          }
          bankIconComponent={
            // key={key}
            <Image
              resizeMode="contain"
              w="28px"
              h="28px"
              m="2px"
              source={{
                uri: "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/BCA-512.png",
              }}
            />
          }
        />
      </View>

      <Pressable
        bg="red.400"
        p="10"
        debounceDuration={2000}
        onPress={() => {
          console.log("wakanda");
        }}
      >
        <Text>Wakanda</Text>
      </Pressable>

      <Dialog
        illustrationSrc={{
          uri: "https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/BCA-512.png",
        }}
        accessibilityLabel={"dialog_with_ilustration"}
        buttonDirection="horizontal"
        confirmLabel={"Confirm"}
        title={"This is title"}
        description={
          "This is description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sint enim praesentium itaque harum iusto, voluptate quia obcaecati accusamus corporis neque ratione repudiandae earum tenetur quam ullam facere, reiciendis unde."
        }
        onConfirm={() => console.log("aye")}
        style={{ margin: 16 }}
      />

      <VStack p="4" mb="10" space="4">
      </VStack>

      <Pressable
        bg="jadeGreen.Plus1"
        p="4"
        px="5"
        onPress={() => navigation.push(CommonRoutingName.PERFORMANCE)}
      >
        <Text color="neutral.White" fontSize="xl">
          Performance Demo
        </Text>
      </Pressable>

      <Pressable
        bg="jadeGreen.Main"
        p="4"
        px="5"
        onPress={() => navigation.push(DemoRoutingName.DEMO_BUTTON)}
      >
        <Text color="neutral.White" fontSize="xl">
          Button Demo
        </Text>
      </Pressable>

      <Pressable
        bg="jadeGreen.Minus1"
        p="4"
        px="5"
        onPress={() => navigation.push(DemoRoutingName.DEMO_ICON_BUTTON)}
      >
        <Text color="neutral.White" fontSize="xl">
          Icon Button Demo
        </Text>
      </Pressable>

      <Pressable
        bg="amber.500"
        p="4"
        px="5"
        onPress={() => navigation.push(DemoRoutingName.DEMO_KEYBOARD)}
      >
        <Text color="neutral.White" fontSize="xl">
          Keyboard Numeric Demo
        </Text>
      </Pressable>

      <Pressable
        bg="sapphireBlue.Minus1"
        p="4"
        px="5"
        onPress={() => navigation.push(DemoRoutingName.DEMO_ICON)}
      >
        <Text color="neutral.White" fontSize="xl">
          Icon Demo
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default HomePage;
