import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
// utilisation du TextInput 
export const GestionInput = () => {

  const [nom, setNom] = useState('');
  const [edit, setEdit] = useState(true);

  const handleChangeName = (value) => {
    setNom(value);
  };
// fonction change input 
  const handleInput = () => {
    setEdit(!edit);
  };

  return (
    <View style={styles.container}>
      <TextInput
      // appeler fonction pr update nom 
        onChangeText={handleChangeName}
        placeholder=" placeholder"
        style={styles.input}
        // max de caracteres
        maxLength={40}
        // booleen 
        editable={edit}
        keyboardType="default"
        multiline={true}
      />
      <View>
        <Text style={styles.text}> bonjour {nom} </Text>
      </View>
{/* utilisation dun pressable  */}
      <Pressable onPress={handleInput}>
        <Text>{edit ? 'input actif ' : 'inactif input '} </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: 'red',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});
export default GestionInput;
