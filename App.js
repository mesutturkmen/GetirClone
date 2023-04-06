import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import Rootnavigator from './src/navigators/Rootnavigator';
import 'react-native-gesture-handler';
export default function App() {
  return (
   <NavigationContainer>

    <Rootnavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   //marginTop: '15%'
  },
});
