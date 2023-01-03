import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'First Item',
    class: '2nd',
  },
  {
    id: '2',
    name: 'Second Item',
    class: '2nd',
  },
  {
    id: '3',
    name: 'Third Item',
    class: '2nd',
  },
];

const App = () => {


  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',

    }}>
      {
        DATA.map(item => {
          return (
            <View key={item.id} style={{ borderWidth: 5, height: 200, width: 300, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>{item.name}</Text>
              <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 24 }}>{item.class}</Text>
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;