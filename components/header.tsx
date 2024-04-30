import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native"

type Props = {
    title: string;
}

export const Header = ({title}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 112,
        flexDirection: "row",
        alignItems: "flex-end",
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    title:{
        flex: 1,
        color: colors.white,
        fontSize: 15,
        lineHeight: 32,
        fontWeight: 'bold',
        textAlign: "center",
    }
})