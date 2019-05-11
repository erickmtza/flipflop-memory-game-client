import React, { useEffect, useState } from 'react'
import './Leaderboard.css'
import Loader from '../img/loader.gif'

function Leaderboard() {
    const [players, setPlayers] = useState([])

    const playerList = players.map((player, i) => (
        <tr key={i}>
            <td>{++i}</td>
            <td>{player.player_name}</td>
            <td>{player.timer}</td>
            <td>{player.date_published}</td>
        </tr>
    ))

    useEffect(() => {

        fetch(`https://evening-fjord-94655.herokuapp.com/api/playerOrder`)
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
            <h2 className="top-lb">Top {players.length === 0 ? `~` : players.length} Leaderboard</h2>
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
            {players.length === 0 && 
                <section className="img-container">
                    <img src={Loader} alt="loading" className="loading" />
                </section>
            }
            <blockquote className="lb-bq" cite="http://www.theceugroup.com/12-surprising-human-memory-facts/">
                <span>"</span>Scientific research has shown that the human brain starts remembering things from the womb. In fact, memory begins to work 20 weeks after conception.<span>"</span>
            </blockquote>
        </main>
       
    )
}

export default Leaderboard