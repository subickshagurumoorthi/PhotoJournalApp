import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { Strings } from "@/constants/strings";
import { router } from "expo-router";

const STORAGE_KEY = "PHOTO_URI";

export default function useImagePicker() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadSavedImage();
  }, []);

  const loadSavedImage = async () => {
    try {
      const savedImage = await AsyncStorage.getItem(STORAGE_KEY);

      if (savedImage) {
        setImage(savedImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Gallery
  const pickImage = async () => {
    try {
      setLoading(true);
      setError("");

      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permission Required",
          Strings.galleryPermission
        );
        setLoading(false);
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Unable to choose image.");
    }
  };

  // Camera
  const takePhoto = async () => {
    try {
      setLoading(true);
      setError("");

      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permission Required",
          Strings.cameraPermission
        );

        setLoading(false);
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 1,
      });

      if (
        !result.canceled &&
        result.assets &&
        result.assets.length > 0
      ) {
        setImage(result.assets[0].uri);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Unable to open camera.");
    }
  };

  // Upload (Save Locally)
  const uploadImage = async () => {
  if (!image) {
    Alert.alert("No Image", "Please select an image first.");
    return;
  }

  try {
    await AsyncStorage.setItem(STORAGE_KEY, image);

    Alert.alert(
      "Success",
      "Photo saved successfully!",
      [
        {
          text: "OK",
          onPress: () => router.push("/"),
        },
      ]
    );
  } catch (error) {
    Alert.alert("Error", "Unable to save image.");
  }
};

  // Clear
  const clearImage = async () => {
    setImage(null);

    await AsyncStorage.removeItem(STORAGE_KEY);
  };

  return {
    image,
    loading,
    error,
    pickImage,
    takePhoto,
    uploadImage,
    clearImage,
  };
}