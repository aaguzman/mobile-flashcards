import React, {Component} from 'react'
import { Text, KeyboardAvoidingView, TextInput,TouchableOpacity, StyleSheet} from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { saveDeck } from '../helpers/api'
import { addDeck } from '../actions'


class NewDeck extends Component {

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

    render(){
        return(
            <KeyboardAvoidingView style = {styles.container} behavior= "padding">
            <Text style = {{ fontSize: 20}}>New Deck</Text>
            <TextInput 
                    value = {this.state.text} 
                    onChangeText = {(text) => this.setState({text})}
                    style = {styles.input}
                    placeholder = 'Name of Deck'
                    />
            <TouchableOpacity
                    onPress = {this.submit}
                    style = {styles.button}>
                    <Text style = {{color: '#fff',fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
    </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E8E8E8',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    button: {
        margin: 5,
        backgroundColor: '#f26f28',
        padding: 10,
        borderRadius: 2,
    },
    input: {
        
        height: 40,
        width: 250,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000',
        padding: 4
    }
  })

  function mapStateToProps(decks){
    return {
        decks
    }
  }

  export default connect(mapStateToProps)(NewDeck)