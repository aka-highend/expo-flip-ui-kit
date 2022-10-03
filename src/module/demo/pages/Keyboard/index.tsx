import React, { useCallback, useState } from "react";
import { Box, Text, KeyboardNumeric, Flex } from "native-base";
import { TouchableOpacity } from "react-native";

const PagesKeyboard = () => {
  const [words, setWords] = useState<string[]>([]);

  const onPressKey = useCallback((key: string) => {
    setWords((value) => {
      let _words = [...value];
      _words.push(key);
      return _words;
    });
  }, []);

  const onPressDelete = useCallback(() => {
    setWords((value) => {
      const _words = [...value];
      _words.pop();
      return _words;
    });
  }, []);

  return (
    <Flex bg="amber.500" flex="1">
      <Box flex="1" p="4">
        <Text fontSize="xl" bold>
          {words.join("")}
        </Text>
      </Box>
      <KeyboardNumeric
        as={TouchableOpacity}
        onPressKey={onPressKey}
        onPressDelete={onPressDelete}
      />
    </Flex>
  );
};

export default PagesKeyboard;
