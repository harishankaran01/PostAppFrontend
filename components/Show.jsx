import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function show(props) {
  console.log(props);
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  post:{
    width:"auto",
    borderWidth:1,
    padding:5,
    margin:5,
    borderRadius:10
  },
  title:{
    color:"#000",
    fontWeight:"800",
    fontSize:16,
    marginBottom:5,
  },
  description:{
    color:"#000",
    fontWeight:"400",
    fontSize:12,
    marginBottom:5,
    paddingLeft:5,
  }
})