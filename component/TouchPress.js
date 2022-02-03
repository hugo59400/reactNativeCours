import {View, Text, TouchableOpacity, Pressable,Button} from 'react-native';
import React, {useState} from 'react';

export const TouchPress = () => {
  // compteur qui s'incremente 
  let [compteur1, setCompteur1] = useState(0);

// fonction pour incrementer compteur 
  const handlePlus = () => {
    setCompteur1(++compteur1);
  };
// fonction pr decrementer compteur 
  const handleMoins = () => {
    setCompteur1(--compteur1);
  };
// fonction pour reset compteur 
  const handleReset = () => {
    setCompteur1(0);
  };
  return (
    <View>
      <Text> compteur : {compteur1} </Text>
      {/* interaction 1 utiliser bouton avec onPress  */}
      <Button title="ajouter 1 au compteur " onPress={handlePlus} />

      {/* new interaction balise  TouchableOpacity a linterieur texte   */}
      <TouchableOpacity onPress={handleMoins}>
        <Text> moins de clic </Text>
      </TouchableOpacity>

      {/* interaction 3 PRESSABLE + precis pr user  a linterieur texte  */}
      <Pressable onPress={handleReset}>
        <Text>reset compteur </Text>
      </Pressable>
    </View>
  );
};

export default TouchPress;
