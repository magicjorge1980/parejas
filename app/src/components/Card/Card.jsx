import React, { useState, useEffect } from 'react'
import './Card.css'

const Card = ({ titulo, descripcion }) => {
  return (
    <div className="card">
      <hr />
      <div className="header">
        <h1>{titulo}</h1>
      </div>
      <hr />
      <div className="content">
        <p>{descripcion}</p>
      </div>
      <button className="btn-usar">Jugar Carta</button>

      {/* 
      {!isFavoritesPage && !isUsed && (
        <div className="fav">
          <p onClick={handleFavClick}>{!fav ? '💛 ' : '❤️'}</p>
        </div>
      )} */}
    </div>
  )
}

export default Card
