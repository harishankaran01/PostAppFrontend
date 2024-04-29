import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react';
import Show from "./Show"
import axios from 'axios';


export default function show() {
    let [data,setData]=useState([])
    let [refresh,setRefresh]=useState(0);
    useEffect(()=>{
        async function get(){
            let posts=await axios.get("https://postappbackend.onrender.com/getPost");
            setData(posts.data)
        }
        get();
    },[refresh])
    let post=data.map(prev=>{
        return <Show key={prev._id} id={prev._id} title={prev.Title} description={prev.Description}/>
    })
  return (
    <View>
      <Text style={styles.head} onPress={()=>setRefresh(prev=>prev++)}>Posts</Text>
      <ScrollView style={{height:"100%"}}>
        {post}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    head:{
        color:"#000",
        fontWeight:"800",
        fontSize:24,
        marginBottom:5,
        textAlign:"center"
    },
})