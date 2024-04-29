import { Image, StatusBar, StyleSheet, View } from "react-native";
import { colors } from "@/styles/colors";
import { Input } from "../../components/input";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Button } from "../../components/button";
import { Link } from "expo-router";

export default function Register() {
    return (
        <View style={{ backgroundColor: colors.green[500], alignItems: "center", justifyContent: "center", flex: 1, padding: 24 }}>
            <StatusBar barStyle="light-content" />
            <Image source={require("@/assets/logo.png")} style={{ height: 64 }} resizeMode="contain" />
            <View style={styles.Containerinput}>
                <Input>
                    <FontAwesome6 name="user-circle" size={20} color={colors.green[200]} />
                    <Input.Field
                        placeholder="Nome Completo"
                    />
                </Input>
                <Input>
                    <MaterialIcons name="alternate-email" size={20} color={colors.green[200]} />
                    <Input.Field
                        placeholder="E-mail"
                        keyboardType="email-address"
                    />
                </Input>
                <Button text="Realizar inscrição" isLoading={false} onPress={() => { }} />

                <Link href="/" style={styles.link}>
                    Já possui ingresso?
                </Link>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    Containerinput: {
        width: "100%",
        marginTop: 38,
        gap: 18,
    },

    link:{
        color: colors.white,
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: 10   ,
    }
});
