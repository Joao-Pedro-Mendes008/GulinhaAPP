import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_RECIPES } from '../../data/mockData';

const RecipeDetailScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const recipe = MOCK_RECIPES.find(r => r.id === id);

    if (!recipe) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Receita não encontrada!</Text>
            </SafeAreaView>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <Pressable onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#333" />
            </Pressable>

            <View style={styles.content}>
                <Text style={styles.title}>{recipe.title}</Text>

                <Text style={styles.subtitle}>Ingredientes</Text>
                {recipe.ingredients.map((item, index) => (
                    <Text key={index} style={styles.listItem}>• {item}</Text>
                ))}

                <Text style={styles.subtitle}>Modo de Preparo</Text>
                {recipe.instructions.map((item, index) => (
                    <Text key={index} style={styles.listItem}>{item}</Text>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    image: { width: '100%', height: 300 },
    backButton: { position: 'absolute', top: 50, left: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 8, borderRadius: 20 },
    content: { padding: 20 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
    subtitle: { fontSize: 22, fontWeight: 'bold', marginTop: 15, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5 },
    listItem: { fontSize: 16, lineHeight: 26 },
});

export default RecipeDetailScreen;
