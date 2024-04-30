import { Alert, Image, StatusBar, StyleSheet, View } from "react-native";
import { colors } from "@/styles/colors";
import { Input } from "../../components/input";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Button } from "../../components/button";
import { Link } from "expo-router";
import { useState } from "react";
import { z } from "zod";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const NameSchema = z.string()
    .min(3, { message: "Nome inválido o nome deve possuir mais de 3 caracteres" })
    .max(100, { message: "Nome inválido o nome deve possuir até 100 caracteres" })
    const EmailSchema = z.string()
    .min(3, { message: "Email inválido o email deve possuir mais de 3 caracteres" })
    .max(100, { message: "Email inválido o email deve possuir até 100 caracteres" })
    .email({ message: "Email inválido, por favor, digite um email valido" })

    const handleRegister = () => {
        try {
            const validatedName = NameSchema.parse(name);
            const validatedEmail = EmailSchema.parse(email);
            // continuidade do para quando o campo for envidado ao backend
            console.log("Nome válido:", validatedName);
            console.log("Email válido:", validatedEmail);
        } catch (err) {
            if (err instanceof z.ZodError) {
                Alert.alert("Inscricão inválida", err.errors[0].message);
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
                    <FontAwesome6 name="user-circle" size={20} color={colors.green[200]} />
                    <Input.Field
                        placeholder="Nome Completo"
                        onChangeText={setName}
                    />
                </Input>
                <Input>
                    <MaterialIcons name="alternate-email" size={20} color={colors.green[200]} />
                    <Input.Field
                        placeholder="E-mail"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                </Input>
                <Button text="Realizar inscrição" isLoading={false} onPress={handleRegister} />

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
