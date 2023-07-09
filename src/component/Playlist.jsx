import React from 'react'
import players from '../players'
import Players from './Players'


const Playlist = () => {
  return (
    <>
        {players.map((player) => (
        <Players key={player.name} {...player} />
      ))}
    </>
  )
}

export default Playlist