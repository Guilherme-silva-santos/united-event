import { colors } from "@/styles/colors";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    text: string;
    isLoading?: boolean;
}

export const Button = ({ text, isLoading = false, ...rest }: Props) => {
    return (
        <TouchableOpacity disabled={isLoading} style={styles.containerButton} activeOpacity={0.7} {...rest}>
            {
                isLoading ?
                    (<ActivityIndicator color={colors.green[500]} />)
                    : (
                        <Text style={styles.buttonText}>{text}</Text>
                    )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        width: "100%",
        height: 48,
        backgroundColor: colors.orange[500],
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    buttonText: {
        color: colors.green[500],
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
        textTransform: "uppercase",
    }
});
