import { View, Text, Button, SafeAreaView,StatusBar,StyleSheet} from 'react-native';
import React, { useState } from 'react';

const STYLES =[ "default", "dark-content", "light-content"];

export const Statusbar = (props) => {
    const [hidden, setHidden ] = useState(false)
     const [animated, setAnimated ] = useState(false)
     const [statusStyle, setStatusStyle ] = useState(STYLES[1])
     const [translucide, setTranslucide ] = useState(false)


    const handleVisibility = () => {
        
        setHidden(!hidden)
    }

      const handleTranslucide = () => {
        
        setTranslucide(!hidden)
    }

      const handleAnimated = () => {
        
        setAnimated(!animated)
    }
// changer style 
      const handleStyle = () => {
          const styleId=STYLES.indexOf(statusStyle)+1;
       if (styleId ===STYLES.lenght){
           setStatusStyle(STYLES[0])
       }else{
        setStatusStyle(STYLES[styleId])
       };
    };

  return (
    //   balise qui sert a delimiter la taille de l'écran
      <SafeAreaView>
          {/* balise qui permet de gere la statusbar */}
          <StatusBar
        //   permet de cacher une status bar
         hidden={hidden}
         // style de la bar
         barStyle={statusStyle} 
         backgroundColor={"#FF5733"}
        translucent={translucide}
          />
            <View>
                <Text> Ceci est le composant status StatusBar</Text>
             
            </View>
            <View>
            {/* les textes qui appelent les variables  */}
                <Text> la status bar est : { hidden ? "caché" : "visible" } </Text>
                  <Text> la status bar est : { translucide ? "transparente" : "opaque" } </Text>
                 <Text> la style  est : { statusStyle } </Text>
             <Text> animated  : { animated ? "anime" : "pas anime" } </Text>

            </View>
            <View>
            {/* boutons pr gerer les 4 types de visu  possible avec onpress  */}
                <Button title='visibilité' onPress={handleVisibility}/>
                <Button title='animated' onPress={handleAnimated}/>
                  <Button title='style' onPress={handleStyle}/>
                   <Button title='trasnlucide' onPress={handleTranslucide}/>
            </View>
      </SafeAreaView>
  );
};
export default Statusbar;