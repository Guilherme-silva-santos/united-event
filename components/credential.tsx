import { colors } from "@/styles/colors"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

type Props = {
}

export const Credential = ({ }: Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.band} source={require("@/assets/ticket/band.png")} />

            <View style={styles.blur}>
                <ImageBackground style={styles.imgBack} source={require("@/assets/ticket/header.png")}>
                    <View style={styles.info}>
                        <Text style={styles.text}>
                            Unite summit
                        </Text>
                        <Text style={styles.text}>
                            12345678
                        </Text>
                    </View>
                    <View style={styles.userPhotoBlur}/>
                </ImageBackground>
                <Image source={{uri: 'https://github.com/guilherme-silva-santos.png'}} style={{width: 140, height: 140, borderRadius: 999, marginTop: -90}} /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "stretch",
        alignItems: "center",
    },
    band: {
        width: 96,
        height: 208,
        zIndex: 10,
    },
    blur: {
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
    },
    imgBack: {
        paddingHorizontal: 24,
        paddingVertical: 32,
        height: 160,
        alignItems: "center",
        alignSelf: "stretch",
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        overflow: "hidden",
    },
    info:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    text:{
        color: colors.gray[200],
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    userPhotoBlur:{
        width: 160,
        height: 160,
        backgroundColor: 'black',
        borderRadius: 999,
    }
})