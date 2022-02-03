// import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';

// export const Exo = () => {
//     const [imgCentral, setImgCentral] = useState(
//         'https://images.bfmtv.com/IBDbn2FIR0_aPo_MFXnocaC9DRY=/56x1:1384x748/1328x0/images/Harry-Potter-et-les-reliques-de-la-mort-488636.jpg',
//     );

//     const handleCat = () => {
//         fetch('urlChat').then(reponseOk).then(traitementData);
//     };
//     const reponseOk = res => {
//         return res.json();
//     };

//     const traitementData = data => {
//         setImgCentral(data.file);
//     };

//     // const reponsePasOk=(res)=>{
//     //     return ;
//     // }

//     return ( <
//         View style = { styles.container } > { /* // navbar */ } <
//         View style = { styles.navbar } >
//         <
//         View >
//         <
//         Text > home < /Text> <
//         Image style = { styles.icon }
//         source = { require('chemin image ') }
//         /> < /
//         View >

//         <
//         View >
//         <
//         Text > reglages < /Text> <
//         Image style = { styles.icon }
//         source = { require('chemin image ') }
//         /> < /
//         View >

//         <
//         TouchableOpacity onPress = { handleCat } >
//         <
//         Text > chat < /Text> <
//         Image style = { styles.icon }
//         source = { require('chemin image ') }
//         /> < /
//         TouchableOpacity >

//         <
//         View >
//         <
//         Text > dialogue < /Text> <
//         Image style = { styles.icon }
//         source = { require('chemin image ') }
//         /> < /
//         View >

//         <
//         View >
//         <
//         Text > d20 < /Text> <
//         Image style = { styles.icon }
//         source = { require('chemin image ') }
//         /> < /
//         View >

//         <
//         View >
//         <
//         Text > nuage < /Text> <
//         Image style = { styles.icon }
//         source = { require('chemin image ') }
//         /> < /
//         View > <
//         /View>

//         { /* reste */ } <
//         View style = { styles.corps } >
//         <
//         View style = { styles.sidebar } > < /View>

//         <
//         View style = { styles.body } >
//         <
//         View >
//         <
//         Text style = { styles.text } > mise en page < /Text> <
//         Image source = {
//             { uri: imgCentral }
//         }
//         style = { styles.image }
//         /> < /
//         View > <
//         /View> < /
//         View > <
//         /View>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     navbar: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: 'yellow',
//     },
//     corps: {
//         flex: 19,
//         flexDirection: 'row',
//     },
//     sidebar: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: 'yellow',
//     },
//     body: {
//         flex: 9,
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         padding: 10,
//     },
//     icon: {
//         height: 20,
//         width: 'auto',
//     },
//     image: {
//         height: 400,
//         width: 300,
//         resizeMode: 'contain',
//     },
//     text: {
//         fontSize: 35,
//         fontWeight: 'bold',
//     },
// });

// export default Exo;