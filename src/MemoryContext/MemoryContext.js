import React from 'react'

const MemoryContext = React.createContext({
    players: [],
    player_name: '',
    showNameInput: true,
    showNameModal: () => {},
    hideNameModal: () => {},
    updatePlayerName:() => {},
})

export default MemoryContext