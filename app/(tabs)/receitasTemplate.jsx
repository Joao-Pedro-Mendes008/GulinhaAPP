import { StyleSheet, View, Image, Text, Pressable, ScrollView } from "react-native"
import FoodCard from './card'
import { useRouter } from "expo-router"

export default function Receitas({ tituloPagina, rota1, img1, nomeReceita1, desc1, img2, rota2, nomeReceita2, desc2, rota3, img3, nomeReceita3, desc3, rota4, img4, nomeReceita4, desc4 }) {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#000',
            fontFamily: 'Roboto'
        },
        image: {
            width: 200,
            height: 150,
        },
        card: {
            gap: 5,
            height: 120,
            width: 500,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 15,
            margin: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8,
        }
    })

    const router = useRouter()

    return (
        <View>

            <Text style={styles.title}>{tituloPagina}</Text>

            <ScrollView style={styles.container}>

                <FoodCard ImgReceita={'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/07/11/892540845-macarronada-a-bolonhesa-rose.jpg'}
                    Receita={'Macarronada'}
                    Desc={''}
                    CorReceita={''}
                    CorDesc={''}
                    Rota={''} />

                <FoodCard ImgReceita={'https://static.itdg.com.br/images/640-440/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg'}
                    Receita={'Lasanha'}
                    Desc={''}
                    CorReceita={''}
                    CorDesc={''}
                    Rota={''} />

                <FoodCard ImgReceita={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH8sYbTamIN41zJopKhbm8yANNOnUTmvC_A&s'}
                    Receita={'Brócolis Gratinado'}
                    Desc={''}
                    CorReceita={''}
                    CorDesc={''}
                    Rota={''} />

                <FoodCard ImgReceita={'https://assets.unileversolutions.com/recipes-v2/212080.png'}
                    Receita={'Fricassê'}
                    Desc={''}
                    CorReceita={''}
                    CorDesc={''}
                    Rota={''} />

            </ScrollView>

        </View>

    )

}