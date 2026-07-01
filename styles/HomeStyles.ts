import { StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
import { FontSize, FontWeight } from "@/constants/fonts";

export const HomeStyles = StyleSheet.create({
  title: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.text,
    marginBottom: 16,
    textAlign: "center",
  },

  description: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
  },
  card: {
  backgroundColor: "#FFFFFF",
  padding: 16,
  borderRadius: 12,
  marginVertical: 20,
  elevation: 4,
},

cardTitle: {
  fontSize: 18,
  fontWeight: "700",
  marginBottom: 10,
},

image: {
  width: "100%",
  height: 220,
  borderRadius: 12,
},

empty: {
  textAlign: "center",
  color: "#6B7280",
  paddingVertical: 40,
},
});