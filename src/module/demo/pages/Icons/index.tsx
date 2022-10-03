import React from "react";
import {
  Box,
  Button,
  Flex,
  ScrollView,
  Text,
} from "native-base";

import { HStack, VStack } from "../Stack/index";

import {
  FlipGlobe,
  ListrikPln,
  PaketData,
  Pulsa,
  Refund,
  SendMoney,
  TarikSaldo,
  Topup,
  Lainnya,
  Bill,
  Investment,
  ReceiveMoney,
} from "./products/index";

import {
  ArrowDown,
  ArrowUp,
  Calendar,
  ContactBook,
  Copy,
  Delete,
  Download,
  Edit,
  Filter,
  Gallery,
  Hamburger,
  Identity,
  KYC,
  Location,
  LogOut,
  Maps,
  MeatballMenu,
  Money,
  PersonalInformation,
  Phone,
  ScrollMore,
  Search,
  SelfieWithId,
  Upload,
} from "./function/index";


const PagesIcon = () => {
  return (
    <Flex flex="1">
      <ScrollView px="5" pb="10">
        <VStack space="4" mb="5">
          <Box>
            <Text fontWeight="bold" fontSize="2xl">
              Product Icon
            </Text>
            <HStack flexWrap="wrap" space="4" alignItems="center">
              <FlipGlobe color="amber.200" size="12" />
              <ListrikPln size="12" />
              <PaketData size="12" />
              <Pulsa size="12" />
              <Refund size="12" />
              <SendMoney size="12" />
              <TarikSaldo size="12" />
              <Topup size="12" />
              <Lainnya size="12" />
              <Bill size="12" />
              <Investment size="12" />
              <ReceiveMoney size="12" />
            </HStack>
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize="2xl">
              Function Icon
            </Text>
            <HStack flexWrap="wrap" space="4" alignItems="center">
              <ArrowDown size="12" />
              <ArrowUp size="12" />
              <Calendar size="12" />
              <ContactBook size="12" />
              <Copy size="12" />
              <Delete size="12" />
              <Download size="12" />
              <Edit size="12" />
              <Filter size="12" />
              <Gallery size="12" />
              <Hamburger size="12" />
              <Identity size="12" />
              <Location size="12" />
              <LogOut size="12" />
              <Maps size="12" />
              <MeatballMenu size="12" />
              <Money size="12" />
              <PersonalInformation size="12" />
              <Phone size="12" />
              <Search size="12" />
              <Upload size="12" />
              <SelfieWithId size="12" />
              <KYC size="12" />
              <ScrollMore size="12" />
            </HStack>
          </Box>
        </VStack>
      </ScrollView>
    </Flex>
  );
};

export default PagesIcon;
