import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";

import { Image, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import ScreenContainer from "@/components/ScreenContainer";
import PrimaryButton from "@/components/PrimaryButton";

import { Strings } from "@/constants/strings";
import { HomeStyles } from "@/styles/HomeStyles";
import { UploadStyles } from "@/styles/UploadStyles";

const STORAGE_KEY = "PHOTO_URI";

export default function HomeScreen() {
    const [image, setImage] = useState<string | null>(null);

    useFocusEffect(
        useCallback(() => {
            loadImage();
        }, [])
    );

    const loadImage = async () => {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);

        if (saved) {
            setImage(saved);
        }
    };

    return (
        <ScreenContainer>

            <Text style={HomeStyles.title}>
                {Strings.appName}
            </Text>

            <Text style={HomeStyles.description}>
                {Strings.welcome}
            </Text>

            <View style={HomeStyles.card}>

                <Text style={HomeStyles.cardTitle}>
                    Last Saved Photo
                </Text>

                {image ? (
                    <Image
                        source={{ uri: image }}
                        style={HomeStyles.image}
                    />
                ) : (
                    <View style={UploadStyles.imagePlaceholder}>
                        <Text style={UploadStyles.placeholderText}>
                            {Strings.noImageyet}
                        </Text>

                    </View>
                )}

            </View>

            <PrimaryButton
                title="Upload New Photo"
                onPress={() => router.push("/upload")}
            />

        </ScreenContainer>
    );
}