import { colors } from "@/styles/colors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Header } from "../../components/header";
import { Credential } from "../../components/credential";

export default function Ticket() {
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header title="Minha Credencial"/>
            <Credential />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.green[500],
    }
});
