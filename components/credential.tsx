import { colors } from "@/styles/colors";
import { Image, StyleSheet, Text, View } from "react-native"

type Props = {
}

export const Credential = ({}:Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.band} source={require("@/assets/ticket/band.png")} />

            <View style={styles.blur}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
       alignSelf: "stretch",
       alignItems: "center",
    },
    band:{
        width: 96,
        height: 208,
        zIndex: 10,
    }, 
    blur:{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',  
        alignSelf: "stretch",
        alignItems: "center",
        paddingBottom: 24,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 8,
        marginTop: -10,
    }
})