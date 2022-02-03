import { View, Text, Pressable, StyleSheet, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
export const Calculette = () => {
  //  2 variables pour les operations 
  let [calcul,setCalcul]=useState("");
  // resultat est a vide de base car pas de calcul encore effectue 
  let [resultat,setResultat]=useState(0);

  const handlePress = (value) =>{
      setCalcul(calcul =calcul +value)
  }

  // BOUTON CLEAR RESET RESULTAT et operation 
  const handleClear = () =>{
   setCalcul("")
    setResultat(0)
    // pr avertir utiliser petite pop up 
    alert("mon resultat et operation à été supprimé ");
}

// CALCULER OPERATION
  const handleResult = () => {
   setResultat(eval(calcul))
  }
  // pour utiliser input et mettre a jour valeur 
  const handleChange = (value) => {
    setCalcul(value)
   }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>La calculette</Text>
{/* creation de l'input texte  */}
       <TextInput 
      //  pr update valeur dans input fonction handleChange
        onChangeText={handleChange}
        placeholder='monInput'
        // css de linput 
        style={styles.monInput}
        keyboardType="default"

      />
      {/* ajout d'un smiley 💯 des que l'utilisateur commence a ecrire dans l'input et si input vide alors disparition du smiley  */}
        <Text style={{padding: 10, fontSize: 42}}>
        {calcul.split(' ').map((word) => word && '💯').join(' ')}
      </Text>

      <View style={styles.dispositionClavier}> 
      {/* bouton 0 */}
        <Pressable style={styles.press} onPress={() => handlePress("0")}>
            <Text  style={styles.couleurCaractereDansClavier}>0</Text>
        </Pressable>
     {/* bouton 1 */}
          <Pressable style={styles.press} onPress={() => handlePress("1")}>
            <Text style={styles.couleurCaractereDansClavier}>1</Text>
        </Pressable>
             {/* bouton 2 */}
        <Pressable style={styles.press} onPress={() => handlePress("2")}>
            <Text style={styles.couleurCaractereDansClavier}>2</Text>
        </Pressable>
      </View>

      <View style={styles.dispositionClavier}> 
           {/* bouton 3 */}
        <Pressable style={styles.press} onPress={() => handlePress("3")}>
            <Text style={styles.couleurCaractereDansClavier}>3</Text>
        </Pressable>
             {/* bouton 4 */}
        <Pressable style={styles.press} onPress={() => handlePress("4")} >
            <Text style={styles.couleurCaractereDansClavier}>4</Text>
        </Pressable>
             {/* bouton 5 */}
        <Pressable style={styles.press} onPress={() => handlePress("5")}>
            <Text style={styles.couleurCaractereDansClavier}>5</Text>
        </Pressable>
      </View>

      <View style={styles.dispositionClavier}> 
           {/* bouton 6 */}
        <Pressable style={styles.press} onPress={() => handlePress("6")}>
            <Text style={styles.couleurCaractereDansClavier}>6</Text>
        </Pressable>
             {/* bouton 7 */}
        <Pressable style={styles.press} onPress={() => handlePress("7")}>
            <Text style={styles.couleurCaractereDansClavier}>7</Text>
        </Pressable>
             {/* bouton 8 */}
        <Pressable style={styles.press} onPress={() => handlePress("8")}>
            <Text style={styles.couleurCaractereDansClavier}>8</Text>
        </Pressable>
      </View>

      <View> 
           {/* bouton 9 */}
        <Pressable style={styles.press} onPress={() => handlePress("9")}>
            <Text style={styles.couleurCaractereDansClavier}>9</Text>
        </Pressable>
      </View>

      <View style={styles.press}> 
           {/* bouton + */}
        <Pressable style={styles.press} onPress={() => handlePress("+")}>
            <Text style={styles.couleurCaractereDansClavier}>+</Text>
        </Pressable>

             {/* bouton - */}
        <Pressable style={styles.press} onPress={() => handlePress("-")}>
            <Text style={styles.couleurCaractereDansClavier}>-</Text>
        </Pressable>
      </View>

      <View style={styles.press}> 
           {/* bouton * */}
        <Pressable style={styles.press} onPress={() => handlePress("*")}>
            <Text style={styles.couleurCaractereDansClavier}>*</Text>
        </Pressable>

             {/* bouton / */}
        <Pressable style={styles.press} onPress={() => handlePress("/")}>
            <Text style={styles.couleurCaractereDansClavier}>/</Text>
        </Pressable>

      </View>
     
      <View> 
        <Pressable style={styles.press} onPress={handleResult}>
            <Text style={styles.couleurCaractereDansClavier}>=</Text>
        </Pressable>
      </View>
      {/* appel de mes 2 varibles calcul et resultat pour l'afficher a l'utilisateur  */}
      <View>
      {/* appel de calcul */}
          <Text style={styles.textCalcul}>Mon operation= {calcul}</Text>
      </View>
    {/* appel de resultat */}
      <View>
          <Text style={styles.textCalcul}>Mon resultat={resultat}</Text>
      </View>
      {/* boutons pour vider le resultat a l'ecran */}
      <Button onPress={handleClear} title='supprimer operation et resultat '></Button>
      {/* bouton pour vider l'input  */}
      <Button  title='vider input  '></Button>

    </View>
  );
};
const styles = StyleSheet.create({
    body:{
        flex:1
    },

    text:{
        fontSize:35
    },
    dispositionClavier:{
        
        flexDirection:"row"
    },
    press:{
        width:40,
        height:45,
        backgroundColor:"black",
        alignItems:"center"
    },
    couleurCaractereDansClavier:{
        color:"white"
    },
    //textCalcul =  AFFICHAGE du resultat et de loperation 
    textCalcul:{
        fontSize:25,
         color:"red",
            borderColor:"yellow",
    },
    monInput:{
        maxWidth:120,
        borderColor:"grey",
        fontSize:25,
        color:"black",
        backgroundColor: 'red',
    }
})
export default Calculette;