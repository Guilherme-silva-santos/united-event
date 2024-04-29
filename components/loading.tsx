import { colors } from "@/styles/colors";
import { ActivityIndicator } from "react-native"
import { StyleSheet } from "react-native";

export const Loading = () => {
    return (
        <ActivityIndicator />
    )
}

const styles = StyleSheet.create({
  load: {
    flex: 1,
    backgroundColor: colors.green[500],
    alignItems: "center",
    justifyContent: "center",
    color: colors.orange[500],
  },
});

export default styles;
