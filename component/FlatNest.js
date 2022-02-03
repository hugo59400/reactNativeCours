import { View, Text,FlatList, StyleSheet,SectionList } from 'react-native';
import React, {useState} from 'react';

export const FlatNest = () => {
//      let [items, setItems] = useState([
//     // key en char ici 
//     {key: "1", nom: 'objet01'},
//     {key: "2", nom: 'objet02'},
//     {key: "3", nom: 'objet03'},
//     {key: "4", nom: 'objet04'},
//     {key: "5", nom: 'objet05'},
//     {key: "6", nom: 'objet06'},
//     {key: "7", nom: 'objet07'},
//     {key: "8", nom: 'objet08'},
//     {key: "9", nom: 'objet09'},
//     {key: "10", nom: 'objet10'},
//     {key: "11", nom: 'objet11'},
//     {key: "12", nom: 'objet12'},
//   ]);

    let [items, setItems] = useState([
    // key en char ici 
    { nom: 'objet01'},
    { nom: 'objet02'},
    { nom: 'objet03'},
    { nom: 'objet04'},
    { nom: 'objet05'},
     {nom: 'objet06'},
    { nom: 'objet07'},
    { nom: 'objet08'},
    {nom: 'objet09'},
    { nom: 'objet10'},
    { nom: 'objet11'},
    { nom: 'objet12'},
  ]);

// nested liste 
const DATA=[
    {  titre:"test1",
        data:["truc11","truc12","truc13","truc14"]
     },
      {  titre:"test2",
        data:["truc21","truc22","truc23","truc24"]
     },
      {  titre:"test3",
        data:["truc31","truc32","truc33","truc34"]
     },
      {  titre:"test4",
        data:["truc41","truc42","truc43","truc44"]
     },
      {  titre:"test5",
        data:["truc51","truc52","truc53","truc54"]
     }
]

    const [refresh, setRefresh] = useState(false);


   const handleRefresh = () => {
    setRefresh(true);
    //    when refresh list then add  list elements here 42
    setItems([...items, {key: 13, nom: 'objet13'}]);
    setRefresh(false);
  };

  return (
    <View style={styles.body}>
      <Text>  ici composant FlatNest  </Text>
      {/* cas flatlist sans key en param des data  */}
    {/* <FlatList
        data= {items} 
        // identifie tt les elements de ma liste 
        renderItem={ ({item})=> (
           //rendu chq elem not need key 
           <View style={StyleSheet.item} >
                    <Text  style={StyleSheet.text} >  {item.nom}  </Text>
           </View>  
        ) }
        
       
    /> */}

{/* cas flatlist avec key en param des data  */}
 {/* <FlatList
 // affichage different 
    numColumns={2}
    // ici inverted ordre decroissant 
    inverted 
        data= {items} 
        // identifier une cle : keyextractor 
          keyExtractor={(item,index)=>(index.toString() )}
        // identifie tt les elements de ma liste 
        renderItem={ ({item})=> (
           //rendu chq elem not need key 
           <View style={StyleSheet.item} >
                    <Text  style={StyleSheet.text} >  {item.nom}  </Text>
           </View>  
        ) }
         
    /> */}


{/* nested list = liste dans une liste utilisation de DATA et affiche le titre avec ses elements pour chaque objets dans DATA  */}
<SectionList 
sections={DATA}
keyExtractor={(item,index)=>(index.toString() )}
renderItem={ ( {item} ) => (
      <View>
         <Text  style={styles.text} > data :  {item}  </Text>
           </View>  
)}
   renderSectionHeader={ ({section}) => (
       <View>
         <Text  style={styles.text} > titre :  {section.titre}  </Text>
           </View>  
      )}

/>
    </View>
  );
};

const styles = StyleSheet.create({

  text: {
    color: '#3FFF33',
    fontSize: 25,
  },
  body:{
     backgroundColor: 'red', 
  },

  item: {
    backgroundColor: 'yellow',
    margin:10
  },
});


export default FlatNest;
