import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAddTeam = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemoveTeam = () =>{
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '30px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAddTeam}>Add</button>
            <button onClick={handleRemoveTeam}>Remove</button>
        </div>
    )
}