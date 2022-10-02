import React from 'react'
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Componente02 from './src/Componentes/componente02'
import Componente01 from './src/Componentes/componente01'
import styles from './src/Styles/styles'

function App(){  
  

  return(
 <View style = {styles.container}>
  <Text style={styles.texto1}>Rafazin, o melhor do mundo!</Text>
  <Componente01/>
  <Componente02/>
 
  <TouchableOpacity style = {styles.button}>
  <Text style= {styles.texto2}>CLIQUE AQUI</Text>
 </TouchableOpacity>
 
 
 
 </View>
 
    
  )
}
export default App
