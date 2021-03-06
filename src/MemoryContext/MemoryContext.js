import React from 'react'

const MemoryContext = React.createContext({
    player_name: '',
    showNameInput: true,
    showNameModal: () => {},
    hideNameModal: () => {},
    updatePlayerName:() => {},
})

export default MemoryContext