import { View, Text ,Button,Alert } from 'react-native';
import React from 'react';
// affiche alerter en cliquant sur le bouton  

export const Alerte = () => {
//fonction utilise objet Alerte ici 3 boutons 
    const handleAlerte=()=>{
    Alert.alert("titre", "contenu msg alerte",[
    {text:"close",onPress:()=> console.warn("dismiss")},
   {text:"cancel",onPress:()=> console.warn("dismiss")},
    {text:"ok",onPress:()=> console.warn("dismiss")},
], {cancelable:true,onDismiss:{handleClose}}
);
    };

const handleClose =()=>{
    console.warn("test")
}

    
  return (
    <View>
      <Text> composant alerte </Text>
      <Button title="clicker ici " onPress={handleAlerte}> </Button>
    </View>
  );
};

export default Alerte;
