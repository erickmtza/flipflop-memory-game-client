import React from 'react'

const MemoryContext = React.createContext({
    players: [],
    player_name: '',
    timer: 0,
    showNameInput: true,
    showNameModal: () => {},
    hideNameModal: () => {},
    updatePlayerName:() => {},
})

export default MemoryContext