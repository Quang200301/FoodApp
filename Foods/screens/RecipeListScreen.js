
import React from "react";
import {View,StyleSheet,SafeAreaView,Text} from 'react-native';
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
const RecipeListScreen=()=>{
    return(
        <SafeAreaView style={{flex:1 ,  paddingTop: 20,marginHorizontal:16}}>

            {/* render header */}
            <Header headerText={'Hi, Quang'} headerIcon={"bell-o"} />
            <SearchFilter icon={'search'} placeholder={'enter your fav recipe'}/>

            <View style={{marginTop:22}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>categories</Text>
                <CategoriesFilter/>
            </View>
            {/* Recipe ListFilter */}
            <View style={{marginTop:22,flex:1}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>recipes</Text>
               <RecipeCard/>
            </View>
        </SafeAreaView>
    )
}
export default RecipeListScreen;
const styles=StyleSheet.create({

})