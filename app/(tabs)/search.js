import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { MOCK_RECIPES } from '../../data/mockData';
import RecipeCard from '../../components/RecipeCard';

const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Todas as Receitas</Text>
            </View>
            <FlatList
                data={MOCK_RECIPES}
                renderItem={({ item }) => <RecipeCard item={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
    title: { fontSize: 24, fontWeight: 'bold' },
    list: { paddingHorizontal: 20, paddingTop: 20 },
});

export default SearchScreen;
