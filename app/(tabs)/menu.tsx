import { ScrollView, StyleSheet, View, Text } from "react-native";
import FoodCard from "./card";
import NavBar from "./navbar";

export default function GulinhaHome() {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 15,
      flexWrap: 'wrap',
    },
    titles:{
      marginTop: 100,
      marginBottom: 20,
      marginLeft: 20,
      display: 'flex',
      flexDirection: 'row',
      gap: 15,
      flexWrap: 'wrap',
    }
  })

  return (
    <ScrollView>
      <NavBar></NavBar>
      <View style={styles.titles}>
        <Text style={{fontFamily:'Roboto', fontWeight: 900, fontSize:40}}>Seu Cantinho de Gostosuras:</Text>
      </View>
      <View style={styles.container}>
        <FoodCard ImgReceita={'https://santaamalia.com.br/wp-content/uploads/sites/17/2018/04/shutterstock_560947855.jpg'}
          Receita={"Para o almoço em família"}
          Desc={"Receitas que comportam duas ou mais pessoas!"}
          CorReceita={'Black'}
          CorDesc={'grey'}
          Rota={'../tabs/receitas1'} />
        <FoodCard ImgReceita={'https://fogons.es/wp-content/uploads/2023/01/StrogonoffPolo-e1674067893725.jpg'}
          Receita={"Se vira nos 30!"}
          Desc={"Pratos fáceis e deliciosos"}
          CorReceita={'Black'} CorDesc={'grey'}
          Rota={'../tabs/explore'} />
          <FoodCard ImgReceita={'https://st1.uvnimg.com/91/05/bfb78577421890732bed56e370a6/brownie-caneca-0123.jpg'}
          Receita={"Sobremesas simples"}
          Desc={"Sobremesas fáceis para você!"}
          CorReceita={'Black'} CorDesc={'grey'}
          Rota={'../tabs/explore'} />
      </View>
    </ScrollView>

  )

}
