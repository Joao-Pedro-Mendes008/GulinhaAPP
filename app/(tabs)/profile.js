import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={{ uri: 'https://dragonball.guru/wp-content/uploads/2021/03/toppng.com-mystic-gohan-dragon-ball-z-gohan-1021x2859-1-e1617011806816-400x400.png' }} style={styles.avatar} />
                <Text style={styles.username}>Olá! João</Text>
            </View>

            <View style={styles.menu}>
                <Pressable style={styles.menuItem}>
                    <Ionicons name="person-outline" size={24} color="#333" />
                    <Text style={styles.menuItemText}>Editar Perfil</Text>
                </Pressable>
                <Pressable style={styles.menuItem}>
                    <Ionicons name="heart-outline" size={24} color="#333" />
                    <Text style={styles.menuItemText}>Receitas Favoritas</Text>
                </Pressable>
                <Pressable style={styles.menuItem} onPress={() => router.replace('/')}>
                    <Ionicons name="log-out-outline" size={24} color="#FF6347" />
                    <Text style={[styles.menuItemText, { color: '#FF6347' }]}>Sair</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f8f8' },
    profileHeader: { alignItems: 'center', padding: 30, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee' },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
    username: { fontSize: 22, fontWeight: 'bold' },
    menu: { marginTop: 20 },
    menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
    menuItemText: { fontSize: 18, marginLeft: 15, color: '#333' },
});

export default ProfileScreen;
