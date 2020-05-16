import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';


const StartGameScreen = props => {
  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          {/* If you want to add styles to buttons (such as width),
          wrap them in views */}
          <View style={styles.button}>
            <Button  title="Reset" color={Colors.secondary}/>
          </View> 
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary}/>
          </View> 
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  inputContainer:{
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  
  button: {
    width: 100,
    color: 'red'
  }
});

export default StartGameScreen;