import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import OnboardingScreen from "./components/OnboardingScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <OnboardingScreen />
      </View>
    </SafeAreaView>
  );
}
