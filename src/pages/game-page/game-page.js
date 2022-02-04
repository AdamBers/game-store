import React from 'react';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../components/game-buy';
import { GameCover } from '../../components/game-cover';
import './game-page.css'

export const GamePage = () => {
    const game = useSelector((state) => state.game.currentGame)
    if (!game) return null
    return (
        <div className='game-page'>
            <h1>{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe src={game.video} frameBorder="0" title='YouTube Player Video' height="400px" width='90%'></iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    )
};
