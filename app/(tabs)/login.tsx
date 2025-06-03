import { Pressable, StyleSheet, TextInput, View, Text, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function App() {
    const router = useRouter();
    const [text, setText] = useState('')
    const styles = StyleSheet.create({
        container: {
            position: 'relative',
            top: '50%',
            left: 0,
            transform: [
                { translateX: 0 },  // metade da largura da caixa (ajuste conforme o tamanho)
                { translateY: 0 },  // metade da altura da caixa (ajuste conforme o tamanho)
            ],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            height: 300,
            gap: 50,
        },

        loginButton: {
            backgroundColor: '#FF4000',
            height: 80,
            width: 230,
            borderRadius: 20,
            alignItems: 'center',
            fontFamily: 'Roboto',
            fontSize: 40,
            justifyContent: 'center',
            letterSpacing: 2,
            color: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
        },

        input: {
            backgroundColor: '#F4F4F4',
            height: 50,
            width: 250,
            borderRadius: 20,
            alignItems: 'center',
            fontFamily: 'Roboto',
            justifyContent: 'center',
            fontWeight: "500",
            textAlign: 'left',
            paddingLeft: 15
        },

        loginArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 25,
        },
    })

    return (

        <View>
            <View style={styles.container}>
                <View style={styles.loginArea}>
                    <Image source={{ uri: 'https://br-prod.asyncgw.teams.microsoft.com/v1/objects/0-brse-d2-12140e4c63d5a5384811c5dbf4d5f802/views/imgpsh_fullsize' }} style={{ width: 300, height: 300, marginTop: 50 }} />
                    <Text style={{ fontFamily: "Roboto", fontSize: 40 }}>Bem-vindo ao <Text style={{ color: '#FF4000' }}>Gulinha</Text></Text>
                    <TextInput style={styles.input}></TextInput>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <Pressable style={styles.loginButton} onPress={() => { router.push('./menu') }}>Entrar</Pressable>
            </View>
        </View>
    )
}