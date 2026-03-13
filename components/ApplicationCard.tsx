import { Application } from "@/app/_layout";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  application: Application;
};

export default function ApplicationCard({ application }: Props) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/application/[id]",
          params: { id: application.id.toString() },
        })
      }
    >
      <Text style={styles.company}>{application.company}</Text>
      <Text style={styles.role}>{application.roleTitle}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>Status: {application.status}</Text>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>Date: {application.applicationDate}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  company: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  role: {
    fontSize: 15,
    marginBottom: 8,
  },
  metaRow: {
    marginTop: 2,
  },
  metaText: {
    fontSize: 14,
    color: "#475569",
  },
});