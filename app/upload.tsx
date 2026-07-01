import { ActivityIndicator, Text } from "react-native";

import ScreenContainer from "@/components/ScreenContainer";
import PrimaryButton from "@/components/PrimaryButton";
import ImagePreview from "@/components/ImagePreview";

import { Strings } from "@/constants/strings";
import { UploadStyles } from "@/styles/UploadStyles";
import useImagePicker from "@/hooks/useImagePicker";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function UploadScreen() {
    const {
        image,
        loading,
        error,
        pickImage,
        takePhoto,
        uploadImage,
        clearImage,
    } = useImagePicker();

    useFocusEffect(
        useCallback(() => {
            clearImage();
        }, [])
    );
    return (
        <ScreenContainer>
            <Text style={UploadStyles.title}>
                {Strings.uploadTitle}
            </Text>

            <PrimaryButton
                title={Strings.chooseGallery}
                onPress={pickImage}
            />

            <PrimaryButton
                title={Strings.takePhoto}
                onPress={takePhoto}
            />

            <ImagePreview
                image={image}
                onClear={clearImage}
            />

            {image && (
                <PrimaryButton
                    title={Strings.upload}
                    onPress={uploadImage}
                />
            )}

            {loading && (
                <ActivityIndicator
                    size="large"
                    color="#2563EB"
                />
            )}

            {error !== "" && (
                <Text
                    style={{
                        color: "#EF4444",
                        textAlign: "center",
                        marginTop: 10,
                    }}
                >
                    {error}
                </Text>
            )}
        </ScreenContainer>
    );
}