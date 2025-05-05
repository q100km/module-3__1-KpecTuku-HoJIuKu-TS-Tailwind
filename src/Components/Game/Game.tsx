import { useState } from 'react'
import Field from '../Field/Field'
import Information from '../Info/Information'
import GameLayout from './GameLayout'
import { initField, WIN_PATTERNS } from '../../Constants/Constants'
import { Player, Field as FieldType } from '../../Types/Types'

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('Х')
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false)
  const [isDraw, setIsDraw] = useState<boolean>(false)
  const [gameField, setGameField] = useState<FieldType>(initField)

  const checkWinner = (updatedField: FieldType): void => {
    WIN_PATTERNS.forEach(([indx1, indx2, indx3]) => {
      const winCombo =
        updatedField[indx1] === currentPlayer &&
        updatedField[indx2] === currentPlayer &&
        updatedField[indx3] === currentPlayer

      return winCombo && setIsGameEnded(true)
    })
  }

  const handleNextTurn = (index: number, symbol: Player | ''): void => {
    if (symbol === '' && !isGameEnded) {
      const updatedField = [...gameField]
      updatedField[index] = currentPlayer
      setGameField(updatedField)

      checkWinner(updatedField)

      setCurrentPlayer(currentPlayer === 'Х' ? 'O' : 'Х')
    }
  }

  const handleRestart = (): void => {
    setGameField(initField)
    setIsGameEnded(false)
    setIsDraw(false)
    setCurrentPlayer('Х')
  }

  return (
    <GameLayout
      handleRestart={handleRestart}
      Information={
        <Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
      }
      Field={<Field field={gameField} handleNextTurn={handleNextTurn} />}
    />
  )
}

export default Game
