import { StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
import { FontSize, FontWeight } from "@/constants/fonts";

export const UploadStyles = StyleSheet.create({
    title: {
        fontSize: FontSize.xxl,
        fontWeight: FontWeight.bold,
        color: Colors.text,
        textAlign: "center",
        marginBottom: 30,
    },

    imagePlaceholder: {
        height: 250,
        borderWidth: 2,
        borderColor: Colors.border,
        borderStyle: "dashed",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        backgroundColor: Colors.surface,
    },

    placeholderText: {
        color: Colors.textSecondary,
        fontSize: FontSize.md,
    },

    imageContainer: {
        width: "100%",
        position: "relative",
        marginTop: 20,
    },

    image: {
        width: "100%",
        height: 250,
        borderRadius: 12,
    },

    clearButton: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#EF4444",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    clearButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    removeButton: {
        position: "absolute",
        top: -10,
        right: -10,

        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#EF4444",
        justifyContent: "center",
        alignItems: "center",

        elevation: 6,
    },

    removeButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});