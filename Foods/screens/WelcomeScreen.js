import React from "react";
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
const WelcomeScreen=({navigation})=>{
    return(
        <View style={{flex:1, alignItems:'center'}}>
            <Image source={require('../assets/welcome1.png')}/>
            <Text style={{color:'#f96163',fontSize:22,fontWeight:'bold'}}>40K+ Premium Recipes</Text>
            <Text style={{fontSize:42,fontWeight:'bold',color:'#3c444c',marginTop:44,marginBottom:20}}>Cook like A Chef</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate("recipelist")}
            style={{backgroundColor:'#f96163',borderRadius:18,paddingVertical:18,width:'80%',alignItems:'center'}}>
                <Text style={{ fontSize:18,color:'#fff',fontWeight:'700'}}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    );
};
export default WelcomeScreen;
const styles=StyleSheet.create({

})