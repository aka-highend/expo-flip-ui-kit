import { FlatList, Button, View } from "native-base";
import React, { useCallback } from "react";

const Cell = React.memo((props: any) => {
  return (
    <View
      bg="amber.500"
      borderBottomWidth={1}
      borderBottomColor="amber.600"
      py={5}
      px="2"
    >
      {/* <PrimaryButton text={props.title} /> */}
      <Button variant="secondary">{props.title}</Button>
    </View>
  );
});

const Performance = () => {
  // const renderItem = useCallback(({ item }) => {
  //   return <Cell {...item} />;
  // }, []);

  return <Cell title="wakanda" />;
};

export default Performance;
