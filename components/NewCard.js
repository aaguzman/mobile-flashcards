import React, { Component } from 'react'
import { Text, View, TextInput,TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { addCardToDeck } from '../helpers/api'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    submit = () => {
        const {question, answer } =  this.state
        const {dispatch }  = this.props
        addCardToDeck(this.props.navigation.state.params.title, {question, answer} )
        this.setState({
            question: '',
            answer: ''
        })
        dispatch(addQuestion(this.props.navigation.state.params.title,{question, answer}
        ))
    }

    render() {
        return(
        <View style = {styles.container}>
            <KeyboardAvoidingView style = {styles.Deck} behavior= "padding">
                <Text></Text>
                <TextInput 
                    value = {this.state.question} 
                    style = {styles.input}
                    placeholder = "Question"
                    onChangeText = {(question) => this.setState({question})}></TextInput>
                <TextInput 
                    value = {this.state.answer}
                    style = {styles.input}
                    placeholder = "Answer"
                    onChangeText = {(answer) => this.setState({answer})}></TextInput>
                <TouchableOpacity style= {styles.btn} onPress = {this.submit}>
                    <Text style = {{fontSize: 22}}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    Deck: {
        height: 400,
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
        justifyContent: 'flex-start',
    },
    input: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000',
        margin: 30,
        width: 250,
        height: 50,
        fontSize: 20,
        paddingLeft: 10

    },
    btn: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        margin: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
    }
    
})

function mapStateToProps(decks){
    return {
        decks
    }
}

export default connect(mapStateToProps)(NewCard)