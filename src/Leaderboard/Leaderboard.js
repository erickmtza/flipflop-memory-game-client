import React, { useEffect, useState } from 'react'

function Leaderboard() {
    const [players, setPlayers] = useState([])

    const playerList = players.map((player, i) => (
        <tr key={i}>
            <td>{++i}</td>
            <td>{player.player_name}</td>
            <td>{player.timer}</td>
            <td>{new Date(player.date_published).toLocaleString()}</td>
        </tr>
    ))

    useEffect(() => {

        fetch(`http://localhost:8000/api/players`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(error => {
                        throw error
                    })
                return res.json()
            })
            .then((res) => {
                setPlayers(res)
            })
            .catch(error => {
                console.error({ error })
            })
    }, [])

    return (
        <main>
            <h2>Top {players.length} Leaderboard</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Place</th>
                        <th>Player</th>
                        <th>Time (sec.)</th>
                        <th>Date</th>
                    </tr>
                    {playerList}
                </tbody>
                
            </table>
            <blockquote cite="http://www.theceugroup.com/12-surprising-human-memory-facts/">"Scientific research has shown that the human brain starts remembering things from the womb. In fact, memory begins to work 20 weeks after conception."
            </blockquote>
        </main>
       
    )
}

export default Leaderboard