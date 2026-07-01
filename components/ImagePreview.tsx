import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { UploadStyles } from "@/styles/UploadStyles";
import { Strings } from "@/constants/strings";

type ImagePreviewProps = {
  image: string | null;
  onClear: () => void;
};

export default function ImagePreview({
  image,
  onClear,
}: ImagePreviewProps) {
  if (!image) {
    return (
      <View style={UploadStyles.imagePlaceholder}>
        <Text style={UploadStyles.placeholderText}>
          {Strings.noImage}
        </Text>
      </View>
    );
  }

  return (
    <View style={UploadStyles.imageContainer}>
      <Image
        source={{ uri: image }}
        style={UploadStyles.image}
        resizeMode="cover"
      />

      <Pressable
        style={UploadStyles.clearButton}
        onPress={onClear}
        hitSlop={10}
      >
        <Text style={UploadStyles.clearButtonText}>✕</Text>
      </Pressable>
    </View>
  );
}