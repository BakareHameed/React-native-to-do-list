import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import TapGestureHandler from 'react-native-gesture-handler'

const Task =(props) => {
    return (
      <GestureHandlerRootView>
        <View style={styles.item}>
          <TapGestureHandler>

            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>
                   {props.text}
                </Text>
            </View>
            <View style={styles.circular}>

            </View>
          </TapGestureHandler>
        </View>
      </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
  

export default Task