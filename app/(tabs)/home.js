import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_RECIPES } from '../../data/mockData';
import RecipeCard from '../../components/RecipeCard';

const HomeScreen = () => {
    const lanches = MOCK_RECIPES.filter(r => r.category === 'lanche');
    const almoco = MOCK_RECIPES.filter(r => r.category === 'almoco');

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, João!</Text>
            </View>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
                <TextInput style={styles.searchInput} placeholder="Para matar aquela fome!" />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Para o lanche</Text>
                <FlatList
                    data={lanches}
                    renderItem={({ item }) => <RecipeCard item={item} horizontal />}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Para o almoço</Text>
                <FlatList
                    data={almoco}
                    renderItem={({ item }) => <RecipeCard item={item} horizontal />}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingTop: 50},
    header: { paddingHorizontal: 20, marginBottom: 20 },
    headerText: { fontSize: 28, fontWeight: 'bold' },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 8, marginHorizontal: 20, paddingHorizontal: 10, marginBottom: 20 },
    searchIcon: { marginRight: 10 },
    searchInput: { flex: 1, height: 45, fontSize: 16 },
    section: { marginBottom: 25 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, marginBottom: 15 },
});

export default HomeScreen;
