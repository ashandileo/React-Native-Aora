import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
  // return (
  //   <View style={styles.container}>
  //     <Text>Header</Text>
  //     <Slot />
  //     <Text>Footer</Text>
  //   </View>
  // );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
