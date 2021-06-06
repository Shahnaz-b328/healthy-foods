import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Data from './Components/Data/Data';

export default function App() {
  return (
    <View>
      <Data></Data>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
