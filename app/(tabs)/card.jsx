import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function FoodCard({ ImgReceita, Receita, Desc, CorReceita, CorDesc, Rota }) {
    const router = useRouter();
    const styles = StyleSheet.create({
        container: {
            gap: 5,
            height: 120,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor:"white",
            borderRadius:15,
            margin: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 }, 
            shadowOpacity: 0.3,            
            shadowRadius: 6,             
            elevation: 8,    
        },
        img: {
            width: 120,
            height: 120,
            borderRadius:15
        },
        containerText: {
            margin: 5,
            height:110,
            display: "flex",
            justifyContent:"flex-start",
            alignItems: "flex-start",
            textAlign: "left",
        },
        TextReceita: {
            fontSize: 18,
            color: `${CorReceita}`,
            fontWeight: 800,
            fontFamily: 'Monospace',
            textAlign: "left",
        },
        TextDesc: {
            margin: 5,
            fontSize: 14,
            color: `${CorDesc}`,
            fontFamily: 'Monospace',
            textAlign: "left",
        }
    })
    return (
        <Pressable style={styles.container} onPress={() => router.push(`${Rota}`)}>
            <Image style={styles.img} source={{ uri: `${ImgReceita}` }} />
            <View style={styles.containerText}>
                <Text style={styles.TextReceita}>{Receita}</Text>
                <Text style={styles.TextDesc}>{Desc}</Text>
            </View>
        </Pressable>
    )
}