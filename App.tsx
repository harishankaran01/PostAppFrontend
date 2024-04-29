import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feed from "./components/Feed";
import Show from "./components/Show";
import Posts from "./components/Posts";

export default function App() {
  return (
    <SafeAreaView >

      <ScrollView style={styles.body}>
        <Feed/>
        <Posts/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 body:{
  width:"100%",
  height:"100%",
   backgroundColor:"white",
   padding:10
  }
})