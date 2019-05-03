function Shuffle(array) {
    const arrayCopy = array.slice(0)
    for(let i = 0; i < array.length - 1; i++) {
        let randowIndex = Math.floor(Math.random() * (i + 1))
        let temp = arrayCopy[i]
        arrayCopy[i] = arrayCopy[randowIndex]
        arrayCopy[randowIndex] = temp
    }

    return arrayCopy
}

export default function randomizeDeck() {
    let id = 0
    const cards = [
        'bulbasaur', 'charmander', 'dratini', 'eevee', 'mew', 'pidgey', 'pikachu', 'squirtle'
    ].reduce((a, type) => {
        a.push({
            id: id++,
            type
        })
        a.push({
            id: id++,
            type
        })
        return a
    }, [])

    return Shuffle(cards)
}