import { ReactNode } from "react";
import { TextInput, View, TextInputProps } from "react-native";
import styles from "./styles";
import { colors } from "@/styles/colors";

// separou os componets pois será usado um pattener para montar o component em pedaços
const Input = ({children}: {children: ReactNode}) => {
    return (
        <View style={styles.input}>
            {children}
        </View>
    )
}

const Field = ({...rest}: TextInputProps) => {
    return (
        <TextInput style={styles.textInput} 
         placeholderTextColor={colors.gray[200]}
         {...rest}
        />
    )
}

Input.Field = Field

export { Input }