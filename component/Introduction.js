import { View, Text,Button ,StyleSheet} from 'react-native';
import React,{ useState }  from 'react';

export const Introduction = () => {
    let [cour, setCour] = useState({
        nom: "",
        numero: ""
    });

    const handleClick = (e) => {
        setCour({
            nom: "cours 1",
            numero: 42
        });
    }
    return ( 
        <View>
            <View>
                <Text style={styles.text}> ceci est un composant intro </Text> 
                <Text> cours: { cour.nom } </Text>
                <Text> tentative numero: { cour.numero } </Text> 
            </View>

            <View> 
                  <Button  title="click ici" onPress={handleClick}> </Button>
            </View>
            
        </View>
    );
};

const styles =StyleSheet.create({
    text:{
        color:"#3FFF33",
        fontSize:25

    },
    bouton:{
        flexDirection:"row",
        alignItems:"center",
        margin:5
    },body:{
        backgroundColor: 'yellow',
         
    }

})

export default Introduction;