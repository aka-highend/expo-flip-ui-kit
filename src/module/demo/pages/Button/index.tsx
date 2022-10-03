import React from 'react';
import {
  Box,
  Button,
  ScrollView,
  Text, 
} from 'native-base';

import { HStack, VStack } from "../Stack/index";
import { FlipGlobe, Topup } from "../Icons/products/index";

const PagesButton = () => {
  const onPress = () => {
    console.log({ onPress: true });
  };

  return (
    <ScrollView pb="24" px="4">
      <VStack space="10">
        <Box>
          <Text fontWeight="bold" fontSize="2xl">
            Primary Button
          </Text>
          <Text>
            Used as the main interactive call to action on the page. Generally
            limited to one per screen
          </Text>
          <VStack space="2" mt="4">
            <Button onPress={onPress}>Primary Button</Button>
            <Button leftIcon={<Topup size="md" />}>Primary Button</Button>
            <Button rightIcon={<Topup size="md" />}>Primary Button</Button>
            <Button isDisabled>Primary Button Disabled</Button>
            <Button isLoading></Button>
          </VStack>

          <Text fontWeight="bold" mt="10" fontSize="2xl">
            Button Group
          </Text>
          <HStack space="1">
            <Button flex="1">Wakanda</Button>
            <Button flex="1">Forever</Button>
          </HStack>

          <VStack space="2" mt="4" alignItems="flex-start">
            <Button size="sm" leftIcon={<FlipGlobe size="xs" />}>
              Primary Button
            </Button>
            <Button size="sm" isDisabled>
              Primary Button Disabled
            </Button>
            <Button size="sm" isLoading></Button>
          </VStack>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="2xl">
            Secondary Button
          </Text>
          <Text>
            Used for the 2nd action or can be paired with Primary Button
          </Text>
          <VStack space="2" mt="4">
            <Button variant="secondary">Secondary Button</Button>
            <Button leftIcon={<Topup size="md" />} variant="secondary">
              Secondary Button
            </Button>
            <Button rightIcon={<Topup size="md" />} variant="secondary">
              Secondary Button
            </Button>
            <Button variant="secondary" isDisabled>
              Secondary Button Disabled
            </Button>
            <Button variant="secondary" isLoading></Button>
          </VStack>
          <VStack space="2" mt="4" alignItems="flex-start">
            <Button size="sm" variant="secondary">
              Secondary Button
            </Button>
            <Button size="sm" variant="secondary" isDisabled>
              Secondary Button Disabled
            </Button>
            <Button size="sm" variant="secondary" isLoading></Button>
          </VStack>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="2xl">
            Tertiary Button
          </Text>
          <Text>
            Used only for certain sircumstance, for instance if there are 3
            action button in 1 page.
          </Text>
          <VStack space="2" mt="4">
            <Button variant="tertiary">Tertiary Button</Button>
            <Button leftIcon={<Topup size="md" />} variant="tertiary">
              Tertiary Button
            </Button>
            <Button rightIcon={<Topup size="md" />} variant="tertiary">
              Tertiary Button
            </Button>
            <Button variant="tertiary" isDisabled>
              Tertiary Button Disabled
            </Button>
            <Button variant="tertiary" isLoading></Button>
          </VStack>
          <VStack space="2" mt="4" alignItems="flex-start">
            <Button size="sm" variant="tertiary">
              Tertiary Button
            </Button>
            <Button size="sm" variant="tertiary" isDisabled>
              Tertiary Button Disabled
            </Button>
            <Button size="sm" variant="tertiary" isLoading></Button>
          </VStack>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default PagesButton;
