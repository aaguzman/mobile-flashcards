import React , { Component } from 'react'
import {Text, View , StyleSheet, TouchableOpacity } from 'react-native'

export default class Cards extends Component {
    render(){
        const { title } = this.props.navigation.state.params
        return(
            <View style = {styles.Container}>
                 <View style = {styles.Card}>
                    <Text> {title} </Text>
                </View>
            </View>
        )
           
    }

}

const styles = StyleSheet.create({
    Card: {
        height: 400,
        width: 300,
        backgroundColor: '#fff',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        borderRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: 3
        },
    
    },
    Container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})