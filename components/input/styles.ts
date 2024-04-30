import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        alignItems: "center",
        flexDirection: "row",
        gap:12,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.green[400],
        borderRadius: 8,
    },

    textInput:{
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        color: colors.white,
    }
});

export default styles;
