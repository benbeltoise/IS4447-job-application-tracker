import { ApplicationContext } from "@/app/_layout";
import PrimaryButton from "@/components/ui/primary-button";
import ScreenHeader from "@/components/ui/screen-header";
import { db } from "@/db/client";
import { applications } from "@/db/schema";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddApplicationScreen() {
  const context = useContext(ApplicationContext);

  if (!context) return null;

  const { setApplications } = context;

  const [company, setCompany] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [status, setStatus] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = async () => {
    if (!company || !roleTitle || !status || !applicationDate) {
      Alert.alert("Missing fields", "Please fill in all required fields.");
      return;
    }

    await db.insert(applications).values({
      company,
      roleTitle,
      applicationDate,
      metricValue: 1,
      status,
      notes: notes || null,
      categoryId: 1,
      userId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    const rows = await db.select().from(applications);
    setApplications(rows as any);

    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader
        title="Add Application"
        subtitle="Create a new job application"
      />

      <View style={styles.form}>
        <Text style={styles.label}>Company</Text>
        <TextInput
          style={styles.input}
          value={company}
          onChangeText={setCompany}
          placeholder="Google"
        />

        <Text style={styles.label}>Role Title</Text>
        <TextInput
          style={styles.input}
          value={roleTitle}
          onChangeText={setRoleTitle}
          placeholder="Frontend Developer"
        />

        <Text style={styles.label}>Status</Text>
        <TextInput
          style={styles.input}
          value={status}
          onChangeText={setStatus}
          placeholder="applied"
        />

        <Text style={styles.label}>Application Date</Text>
        <TextInput
          style={styles.input}
          value={applicationDate}
          onChangeText={setApplicationDate}
          placeholder="2026-03-13"
        />

        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          value={notes}
          onChangeText={setNotes}
          placeholder="Optional notes"
          multiline
        />

        <PrimaryButton label="Save Application" onPress={handleSave} />
      </View>
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
  form: {
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 4,
  },
  notesInput: {
    minHeight: 90,
    textAlignVertical: "top",
  },
});