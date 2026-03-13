import ApplicationCard from "@/components/ApplicationCard";
import PrimaryButton from "@/components/ui/primary-button";
import ScreenHeader from "@/components/ui/screen-header";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Application, ApplicationContext } from "../_layout";

export default function IndexScreen() {
  const router = useRouter();
  const context = useContext(ApplicationContext);

  if (!context) return null;

  const { applications } = context;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader
        title="Applications"
        subtitle={`${applications.length} saved`}
      />

      <PrimaryButton
        label="Add Application"
        onPress={() => router.push({ pathname: "../add" })}
      />

      {applications.length === 0 ? (
        <Text style={styles.emptyText}>No applications yet.</Text>
      ) : (
        <ScrollView
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {applications.map((application: Application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </ScrollView>
      )}
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
  listContent: {
    paddingBottom: 24,
    paddingTop: 14,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
    color: "#6B7280",
  },
});