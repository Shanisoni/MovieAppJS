import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="text-red-500 text-2xl font-bold">HomeScreen koko</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})