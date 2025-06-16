import React from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.replace('/home');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image source={{ uri: 'https://br-prod.asyncgw.teams.microsoft.com/v1/objects/0-brse-d2-12140e4c63d5a5384811c5dbf4d5f802/views/imgpsh_fullsize' }} style={styles.logo} />
            <Text style={styles.title}>
                Bem-Vindo Ao <Text style={styles.appName}>Gulinha</Text>
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
            />

            <Text style={styles.forgotPassword}>
                Não possui uma conta? <Text style={styles.signupLink}>Cadastre-se</Text>
            </Text>

            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20 },
    logo: { width: 120, height: 120, resizeMode: 'contain', marginBottom: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    appName: { color: '#FF6347' },
    input: { width: '100%', height: 50, backgroundColor: '#f2f2f2', borderRadius: 8, paddingHorizontal: 15, fontSize: 16, marginBottom: 15 },
    forgotPassword: { alignSelf: 'flex-end', marginVertical: 10 },
    signupLink: { color: '#FF6347', fontWeight: 'bold' },
    loginButton: { width: '100%', height: 50, backgroundColor: '#FF6347', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop: 20 },
    loginButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default LoginScreen;
