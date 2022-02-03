import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
// StyleSheet, ScrollView, RefreshControl
import React, {useState} from 'react';
// scroll
export const Scrooler = () => {
  let [items, setItems] = useState([
    {key: 1, nom: 'objet01'},
    {key: 2, nom: 'objet02'},
    {key: 3, nom: 'objet03'},
    {key: 4, nom: 'objet04'},
    {key: 5, nom: 'objet05'},
    {key: 6, nom: 'objet06'},
    {key: 7, nom: 'objet07'},
    {key: 8, nom: 'objet08'},
    {key: 9, nom: 'objet09'},
    {key: 10, nom: 'objet10'},
    {key: 11, nom: 'objet11'},
    {key: 12, nom: 'objet12'},
  ]);
  const [refresh, setRefresh] = useState(false);
// ajout element mais pas generique 
  const handleRefresh = () => {
    setRefresh(true);
    //    when refresh list then add  list elements here 42
    setItems([...items, {key: 13, nom: 'objet13'}]);
    setRefresh(false);
  };

  return (
    <View style={{height: 100}}>
      <Text> composant scroll </Text>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh}
        //   btn refresh en yellow  
          colors={["yellow"]} />
        }>
        {items &&  items.map(i => {
            return (
              <View key={i.key} style={styles.item}>
                <Text style={styles.text}> {i.nom} </Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#3FFF33',
    fontSize: 25,
  },

  item: {
    backgroundColor: 'yellow',
  },
});

export default Scrooler;
