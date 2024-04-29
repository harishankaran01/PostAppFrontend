import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function feed() {
    const [postTitle,setPostTitle]=useState("");
    const [postDes,setPostDes]=useState("");
    async function send() {
        try {
            const res = await axios.post('https://postappbackend.onrender.com/addPost',{
                title: postTitle,
               description: postDes,
            }
        );
         console.log(res.message);
         setPostDes("");
         setPostTitle("");
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    return (
        <View style={styles.feed}>
            <Text style={styles.head}>Share Your Thoughts</Text>
            <TextInput placeholder='Post Title' style={styles.inputField} placeholderTextColor="black" value={postTitle} onChangeText={setPostTitle} />
            <TextInput placeholder='Post Description' style={styles.inputField} placeholderTextColor="black" value={postDes} onChangeText={setPostDes} />
            <TouchableOpacity onPress={send} style={styles.btn} ><Text style={styles.btntxt} >Share</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        color:"#000",
        fontWeight:"800",
        fontSize:24,
        marginBottom:5
    },
    feed: {
        display: "flex",
        alignItems:"center",
        padding: 10,
    },
    inputField: {
        width:"100%",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        color: 'black',
        marginBottom:10
    },
    btn:{
        width:"25%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#4356e5",
        padding:10,
        borderRadius:10
    },
    btntxt:{
        fontSize: 16,
        fontWeight:"700",
        color:"#fff"
    }
})