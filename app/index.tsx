import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <Text className="text-3xl">Aora!</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default RootLayout;
