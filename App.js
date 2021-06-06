import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Data from './Components/Data/Data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart/Cart';
export default function App() {
  return (
    <Router>
      <View>
        <Data></Data>
        <Switch>
          <StatusBar style="auto" />
          <Route path="/foods/:id">
            <Cart />
          </Route>
        </Switch>
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({});
