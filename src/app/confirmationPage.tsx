import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ConfirmationPage() {
  const { firstName } = useLocalSearchParams<{ firstName: string }>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerStyle}>Account created for {firstName}</Text>
      <Pressable onPress={() => router.back()} style={styles.buttonStyle}>
        <Text>Go Back</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonStyle: {
    backgroundColor: "#007AFF",
    padding: 12,
    margin: 6,
    borderRadius: 6,
  },

  headerStyle: {
    color: "#3f3f3f",
    marginHorizontal: 8,
    fontWeight: "bold",
    fontSize: 24,
  },
});
