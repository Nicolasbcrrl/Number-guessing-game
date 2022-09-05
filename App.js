import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const[titleText, setTitleText] = useState('Guess a number between 1-100');
  const[userNumber, setUserNumber] = useState(0);
  const[tryText, setTryText] = useState(1);
  const [romdomNumber, setRondomNumber ]= useState(Math.floor(Math.random() * 100) + 1);
  const renew = () => {
    setRondomNumber(Math.floor(Math.random() * 100) + 1);
    setTitleText('Guess a number between 1-100');
    setTryText(1);
    setUserNumber(0);
  }
  const compare = () => {
    if(userNumber > romdomNumber){
        setTitleText(`Your guess ${userNumber} is too high`);
        setTryText(tryText+1);
    }
    else if(userNumber < romdomNumber){
      
        setTitleText(`Your guess ${userNumber} is too low`);
        setTryText(tryText+1);
    }
    else{
        Alert.alert('You guessed the number in '+ tryText +' guesses');
        renew();
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, paddingVertical: 12}}>{titleText + ' '+romdomNumber}</Text>
      <TextInput keyboardType='numeric' style={{width:60,borderColor:'gray',borderWidth:1, fontSize: 20}} value={userNumber} onChangeText={setUserNumber} />
      <Button title='MAKE GUESS' style={{fontSize: 20, paddingVertical: 50}} onPress={compare}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
