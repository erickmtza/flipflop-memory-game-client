import React, { useContext } from 'react'
import MemoryContext from '../MemoryContext/MemoryContext'

function Leaderboard() {
    const value = useContext(MemoryContext)

    const players = value.players.map((player, i) => (
        <tr key={i}>
            <td>{player.player_id}</td>
            <td>{player.player_name}</td>
            <td>{player.timer}</td>
            <td>{player.date_published}</td>
        </tr>
    ))

    return (
        <main>
            <h2>Top {value.players.length} Leaderboard</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Place</th>
                        <th>Player</th>
                        <th>Time (sec.)</th>
                        <th>Date</th>
                    </tr>
                    {players}
                </tbody>
                
            </table>
            <blockquote cite="">"Scientific research has shown that the human brain starts remembering things from the womb. In fact, memory begins to work 20 weeks after conception."
            </blockquote>
        </main>
       
    )
}

export default Leaderboard