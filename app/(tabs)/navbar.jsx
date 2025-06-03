import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function NavBar() {
    const router = useRouter();
    const styles = StyleSheet.create({
        navBar: {
            backgroundColor: '#CE4416',
            display: 'flex', 
            flexDirection:'row', 
            justifyContent: 'space-evenly', 
            alignItems: 'center',
            padding:10,
            position: 'absolute',
            height: 80,
            top: 0,
            right: 0,
            left: 0,
            zIndex: 999,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        },
        navText: {
            fontFamily: 'Roboto', 
            fontWeight: '900', 
            fontSize: 25,
            color: 'white'
        }
    })
    return (
        <View style={styles.navBar}>
            <Pressable><Text style={styles.navText}><FontAwesome name="home" size={30} color="white" style={{marginRight:10}}/>Início</Text></Pressable>
            <Pressable><Text style={styles.navText}><FontAwesome name="cutlery" size={25} color="white" style={{marginRight:10}}/>Receitas</Text></Pressable>
            <Pressable><Text style={styles.navText}><FontAwesome name="user" size={25} color="white" style={{marginRight:10}}/>Perfil</Text></Pressable>
        </View>
    )
}