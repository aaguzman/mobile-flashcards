import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Decks from './components/Decks'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './helpers/notificaitons'
import { Ionicons } from '@expo/vector-icons'


const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-add' size={30} color={tintColor} />
    }
  }
})

const MainNav = createStackNavigator({
  Home: {
    screen: Tabs
  },
  NewCard: {
    screen: NewCard
  },
  Quiz : {
    screen: Quiz
  }
},
{
  initialRouteName: 'Home',
}
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <MainNav style = {styles.container} />
      </Provider>
    );
  }
}

