import { AsyncStorage } from 'react-native'

export function getDecks(){
    return AsyncStorage.getItem('FlashCards:Decks').then((results) =>(JSON.parse(results)))
    }


export function getDeck(key){
return AsyncStorage.getItem('FlashCards:Decks')
    .then((results) => {
        const data = JSON.parse(results)
        return data[key]
    })
}

export function clearDecks(){
    const empty = {}
    return AsyncStorage.setItem('FlashCards:Decks',JSON.stringify({}))
        
        
}

export function saveDeck(entry){
    return AsyncStorage.mergeItem('FlashCards:Decks', JSON.stringify({
        [entry.title]:entry
    }))
}

export function saveDeckTitle(title){
    return AsyncStorage.mergeItem('FlashCards:Decks',JSON.stringify({
        [title]:{title:title, questions:[]}
    }))
}

export function addCardToDeck(title,card){
    return AsyncStorage.getItem('FlashCards:Decks').then((results) => {
        const data = JSON.parse(results)
        data[title].questions.push(card) 
        AsyncStorage.mergeItem('FlashCards:Decks',JSON.stringify({
            [title]: data[title]
        }))
    })

}