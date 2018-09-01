import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION, CLEAR_DECKS } from '../actions/'

function decks (state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK : 
            return {
                ...state,
                [action.deck.title]: action.deck
            }
        case ADD_QUESTION : 
            return {
                ...state,
                [action.title] : {
                    title: action.title,
                    questions: state[action.title].questions.concat(action.card)
                }
            }
        case CLEAR_DECKS : {
            return {
                
            }
        }
        default :
            return state
    }
}

export default decks