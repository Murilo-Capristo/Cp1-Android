import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Animated } from 'react-native';
import Dados from './componentes/Dados';


export default function App() {

  const[nomeProduto, setNomeProduto] = useState('')
  const[precoProduto, setPrecoProduto] = useState('')

  const[precoProp, setPrecoProp] =useState('')
  const[porcProp, setPorcProp]=useState('')
  const[porcProduto, setPorcProduto] = useState('')


   const handleSubmit =()=>{
     setPrecoProp(precoProduto);
     setPorcProp(porcProduto)
     
   }

  return(

<View style={styles.container}>
      <View>
        <Text style={styles.nomeRM}>
          Murilo Capristo - RM 556794 - Checkpoint 1
        </Text>

      </View>
      <Image style={styles.fotoImagem} source={require('./assets/gato.png')}/>




  <TextInput 
        style={styles.input}
        placeholder='Nome produto'
        value={nomeProduto}
        onChangeText={(valor) => setNomeProduto(valor)}/>
      
  <TextInput 
        style={styles.input}
        placeholder='Valor produto'
        value={precoProduto}
        onChangeText={(valorPreco) => setPrecoProduto(valorPreco)}/>

  <TextInput 
        style={styles.input}
        placeholder='Porcentagem produto'
        value={porcProduto}
        onChangeText={(valorPorc) => setPorcProduto(valorPorc)}/>

        
        {/* <Button title='a'
        onPress={handleSubmit}/>
        <Text>{text}</Text> */}


        {/* <Dados nome={nomeGato} email={emailGato}/> */}

        <Button title='Calcular'
        onPress={handleSubmit}/>

        <Dados nome={nomeProduto} precoProduto={precoProp} porcProduto={porcProp}/>

       

        
        

    </View>)
    

      
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    backgroundColor: '#ff78',
    alignItems: 'center',
    padding: 50,
  },
  nomeRM:{
    fontSize: 16
  },
  fotoImagem: {
    alignSelf: "flex-start",
    height: 170,
    width: 300,
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    borderWidth: 1,
    fontSize: 15,
  },
});