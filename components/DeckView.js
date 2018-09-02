import React , { Component } from 'react'
import {Text, View , StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
    render(){
        const { decks } = this.props
        const { title } = this.props.navigation.state.params
        const deck = decks[title]
        
        return(
        <View style = {styles.container}>
        <View style = {styles.Deck}>
            <Text style = {{fontSize: 24}}>{title}</Text>
            <Text>{deck.questions.length} Cards</Text>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.btn}
                    onPress = {() => this.props.navigation.navigate(
                            'NewCard',{ title: title})}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}
                onPress = {() => this.props.navigation.navigate(
                            'Quiz',{ title: title})}>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Deck: {
        height: 400,
        width: 500,
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

export default connect(mapStateToProps)(DeckView)