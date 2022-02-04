import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { setCurrentGame } from '../../redux/games/reducer';
import { GameCover } from '../game-cover'
import { GameGenre } from '../game-genre'
import { GameBuy } from '../game-buy'
import './game-item.css'

export const GameItem = ({ game }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.id}`)
    }
    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={game.image} />
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genre'>
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre} />)
                    }
                </div>
                <div className='game-item__buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    );
}

