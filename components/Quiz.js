import React, {Component} from 'react'
import {Text, View , StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../helpers/notificaitons'

class Quiz extends Component {
    state = {
        index:0,
        numberCorrect: 0,
        answer: false,
    }

    componentDidMount(){
        clearLocalNotification()
      .then(setLocalNotification)
    }

    correct = () => {
        this.setState((state) => {
         return {
             index: state.index + 1,
             numberCorrect: state.numberCorrect + 1,
             answer: false,
         }
        })
    }

    incorrect = () => {
        this.setState((state) => {
            return {
                index: state.index + 1,
                answer: false,
            }
        })
    }

    restart = () => {
        this.setState({
            index: 0,
            numberCorrect: 0,
            answer: false,
        })
    }

    toggleAnwser = () => {
        this.setState((state) => {
            return {
                answer: !state.answer
            }
        })
    }

    render(){
        const questions = this.props.decks[this.props.navigation.state.params.title].questions
        const question = questions[this.state.index]
        const viewIndex = this.state.index + 1;
        const percentCorrect = (this.state.numberCorrect/questions.length) * 100

        return(
            <View style = {styles.container}>
                
                    
                    {
                        viewIndex > questions.length
                        ?(

                            questions.length === 0 ?
                            (
                                <View style = {styles.Card}>
                                    <Text style = {{fontSize: 18}}>No Questions in Deck!</Text>
                                    <TouchableOpacity
                                        style = {styles.btn}
                                        onPress= {() => this.props.navigation.navigate(
                                'NewCard',{ title: this.props.navigation.state.params.title})}>
                                        <Text>Add Card</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style = {styles.btn}
                                        onPress = {() => this.props.navigation.navigate(
                                        'Home')}
                                    >
                                        <Text>Back to Decks</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                            : (
                            <View style = {styles.Card}>
                                <Text style = {{fontSize: 18}}>You got {percentCorrect}% Correct </Text>
                                <TouchableOpacity
                                    style = {styles.btn}
                                    onPress= {this.restart}>
                                    <Text>Restart Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style = {styles.btn}
                                    onPress = {() => this.props.navigation.navigate(
                                    'Home')}
                                >
                                    <Text>Back to Decks</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        )
                        :(
                            <View  style = {styles.Card}>
                            <Text style = {{alignSelf:'center'}}>{viewIndex} / {questions.length}</Text>
                                <Text style ={{fontSize: 24, marginTop: 5, marginBottom: 25}}>Q: {question.question}</Text>

                                {this.state.answer && (
                                    <Text style = {{fontSize: 18 }}>
                                    A: {question.answer}</Text>
                                )}

                                <TouchableOpacity style = {styles.btn}
                                    onPress = {this.toggleAnwser}>
                                    <Text>Show Answer</Text>
                                </TouchableOpacity>
                                
                                
                                <View style = {styles.row}>
                                    <TouchableOpacity 
                                        style = {[styles.btn, {backgroundColor: '#4CA526'}]}
                                        onPress = {this.correct}>
                                        <Text>Correct</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        style = {[styles.btn, {backgroundColor: '#EA3519'}]}
                                        onPress = {this.incorrect}>
                                        <Text>Incorrect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                 
            
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
    Card: {
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
        justifyContent: 'flex-start',
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
        margin: 20,
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function mapStateToProps(decks,navigation){
    // const { title } = this.props.navigation.state.params
    // return {
    //     deck: decks[title]
    // }
    return {
        decks
    }
}



export default connect(mapStateToProps)(Quiz)