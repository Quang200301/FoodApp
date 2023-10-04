import React from "react";
import {View,Image, Pressable} from "react-native";

import {FontAwesome} from "@expo/vector-icons";
const RecipeDetailsScreen=()=>{
    return(
        <View style={{backgroundColor:"#6f4e37",flex:1}}>
           
            <Pressable style={{marginTop:25,flexDirection:"row",marginHorizontal:16}}>
                <FontAwesome style={{flex:1}} name={"arrow-circle-left"} size={28} color="red" />
                <FontAwesome name={"heart-o"} size={28} color="red" />
            </Pressable>
            <View 
                style={{backgroundColor:"#fff",
                flex:1,
                marginTop:240,
                borderTopLeftRadius:56,
                borderTopRightRadius:56,
                alignItems:"center",
            
            }}
            >
                <View
                    style={{
                        // backgroundColor:"red",
                        height:300,width:300,
                        position:"absolute",
                        top:-150,

                    }}
                >
                    <Image 
                        source={require("../assets/hotdog.png")}
                        style={{width:"100%",height:"100%",resizeMode:"contain"}}
                    />
                    
                </View>
            </View>
        </View>
    )
}
export default RecipeDetailsScreen;