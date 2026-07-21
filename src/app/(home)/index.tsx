import { UserProfileView } from "@clerk/expo/native";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return <UserProfileView style={styles.container} isDismissible={false} />;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
