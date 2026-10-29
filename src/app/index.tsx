import FormUI from "@/components/FormUI";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <FormUI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
