import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { CommonStyles } from "@/styles/CommonStyles";

type ScreenContainerProps = {
  children: ReactNode;
};

export default function ScreenContainer({
  children,
}: ScreenContainerProps) {
  return (
    <SafeAreaView style={CommonStyles.screen}>
      <View style={CommonStyles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
}