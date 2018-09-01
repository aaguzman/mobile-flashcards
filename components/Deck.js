import React , { Component } from 'react'
import {Text, View , StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {


    render(){
        const { title, deck } = this.props
        
        return(
        <View style = {styles.Deck}>
            <Text style = {{fontSize: 24}}>{title}</Text>
            <Text>{deck.questions.length} Cards</Text>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.btn}
                    onPress = {() => this.props.nav.navigate(
                            'NewCard',{ title: this.props.title})}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}
                onPress = {() => this.props.nav.navigate(
                            'Quiz',{ title: this.props.title})}>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    Deck: {
        height: 200,
        width: 300,
        backgroundColor: '#fff',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        borderRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    btn: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000',
        padding: 4,
        margin: 5
    }
})

function mapStateToProps(decks){
    return {
        decks
    }
}

export default connect()(Deck)