import { Alert, Image, StatusBar, StyleSheet, View } from "react-native";
import { colors } from "@/styles/colors";
import { Input } from "../../components/input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "../../components/button";
import { Link } from "expo-router";
import { useState } from "react";
import { z } from "zod";
export default function Home() {
    const [code, setCode] = useState("")
    const CodeSchema = z.string()
    .min(10, { message: "Código inválido o código deve possuir mais de 10 caracteres" })
    .max(10, { message: "Código inválido o código deve possuir até 10 caracteres" })

    const handleAccessCredential = () => {
        try {
            const validatedCode = CodeSchema.parse(code);
            // continuidade do para quando o campo for envidado ao backend
            console.log("Código válido:", validatedCode);
        } catch (err) {
            if (err instanceof z.ZodError) {
                Alert.alert("Credencial inválida", err.errors[0].message);
            } else {
                console.log("Erro inesperado", err);

            }
        }
    }

    return (
        <View style={{ backgroundColor: colors.green[500], alignItems: "center", justifyContent: "center", flex: 1, padding: 24 }}>
            <StatusBar barStyle="light-content" />
            <Image source={require("@/assets/logo.png")} style={{ height: 64 }} resizeMode="contain" />
            <View style={styles.Containerinput}>
                <Input>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={colors.green[200]} />
                    <Input.Field
                        placeholder="Código do ingressor"
                        onChangeText={setCode}
                    />
                </Input>
                <Button text="Acessar credencial" isLoading={false} onPress={handleAccessCredential} />

                <Link href="/register" style={styles.link}>
                    Ainda não possui ingresso?
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

    link: {
        color: colors.white,
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: 10,
    }
})
