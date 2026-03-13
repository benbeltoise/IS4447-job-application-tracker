import ScreenHeader from "@/components/ui/screen-header";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader
        title="Settings"
        subtitle="App options"
      />
      <Text>Settings screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F8FAFC",
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 10,
  },
});