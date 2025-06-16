import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const RecipeCard = ({ item, horizontal = false }) => {
    const router = useRouter();
    const cardStyle = horizontal ? styles.cardHorizontal : styles.cardVertical;

    return (
        <Pressable style={cardStyle} onPress={() => router.push(`/recipe/${item.id}`)}>
            <Image source={{ uri: item.image }} style={horizontal ? styles.imageHorizontal : styles.imageVertical} />
            <View style={horizontal ? styles.infoHorizontal : styles.infoVertical}>
                <Text style={styles.title}>{item.title}</Text>
                {!horizontal && <Text style={styles.description}>{item.description}</Text>}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    title: { fontSize: 16, fontWeight: 'bold' },
    description: { fontSize: 14, color: 'gray', marginTop: 5 },
    cardHorizontal: { width: 250, marginRight: 15, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1 },
    imageHorizontal: { width: '100%', height: 140 },
    infoHorizontal: { padding: 10 },
    cardVertical: { flexDirection: 'row', marginBottom: 20, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1 },
    imageVertical: { width: 100, height: 100 },
    infoVertical: { flex: 1, padding: 15, justifyContent: 'center' },
});

export default RecipeCard;
