import { useState } from 'react'

export default function Player({ initialName, symbol }) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(editing => !editing) // Using this insteant of !isEditing, react guarantee that u are working with current state value. As this will complete all the schedule
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonCaption = "Edit";
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        buttonCaption = "Save";
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    )
}
