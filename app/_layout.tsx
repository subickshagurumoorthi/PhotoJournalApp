import "react-native-gesture-handler";
import "react-native-reanimated";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <>
      <Drawer
        initialRouteName="index"
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: "#2563EB",
          drawerInactiveTintColor: "#6B7280",
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "600",
          },
          headerStyle: {
            backgroundColor: "#2563EB",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      ><Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="upload"
          options={{
            title: "Photo Upload",
            drawerLabel: "Photo Upload",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons
                name="add-a-photo"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Drawer>

      <StatusBar style="light" />
    </>
  );
}