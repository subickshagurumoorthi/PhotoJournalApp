import React from "react";
import { Pressable, Text } from "react-native";
import { CommonStyles } from "@/styles/CommonStyles";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        CommonStyles.button,
        {
          opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={CommonStyles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
}