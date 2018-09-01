import React , { Component } from 'react'
import {Text, View , StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import { getDecks, saveDeck, clearDecks } from '../helpers/api'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import Deck from './Deck'
import { connect } from 'react-redux'
import { receiveDecks, addDeck } from '../actions'

class Decks extends Component {
    state = {
        text: '' 
    }

    submit = () =>{
        const { dispatch } = this.props

        let decks = this.props.decks
        const deck = {
            title: this.state.text,
            questions: [],
        }
        decks[deck.title]= deck;
        //make sure none of same name check
        saveDeck(deck)
        dispatch(addDeck(deck))

        this.setState({
            text:''
        })
    }

    reset = () => {
        const { dispatch } = this.props
    
        this.setState({
            text:''
        })
    }

    componentDidMount(){

        const { dispatch } = this.props

        getDecks().then((data) => {
            const decks = data === null ? {} : data
            dispatch(receiveDecks(decks))
       })
    }

    render(){
        const {decks} = this.props
        return(
            <View style = {styles.container}>
                <ScrollView style =  {{flex: 1}}>
                
                {
                    Object.keys(decks).map((deck) =>(
                        <Deck key= {decks[deck].title} nav = {this.props.navigation} title = {decks[deck].title} deck = {decks[deck]}/>              
                    ))
                }
                </ScrollView>
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
    button: {
        margin: 5,
        backgroundColor: '#f26f28',
        padding: 15,
        borderRadius: 2,
        width: 250,
        alignItems: 'center',
    },
    input: {
        
        height: 40,
        width: 250,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000',
        padding: 4
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
      },
  })

  function mapStateToProps (decks) {
      return {
          decks
      }
  }

  export default connect(mapStateToProps)(Decks)