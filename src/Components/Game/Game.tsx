import { useState } from 'react'
import Field from '../Field/Field'
import Information from '../Info/Information'
import GameLayout from './GameLayout'

const Game = () => {
  const initField = ['', '', '', '', '', '', '', '', '']
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const [currentPlayer, setCurrentPlayer] = useState<string>('X')
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false)
  const [isDraw, setIsDraw] = useState<boolean>(false)
  const [field, setField] = useState<string[]>(initField)

  const checkWinner = (updatedField: string[]): void => {
    WIN_PATTERNS.forEach(([indx1, indx2, indx3]) => {
      const winCombo =
        updatedField[indx1] === currentPlayer &&
        updatedField[indx2] === currentPlayer &&
        updatedField[indx3] === currentPlayer

      return winCombo && setIsGameEnded(true)
    })
  }

  const handleNextTurn = (index: number, symbol: string): void => {
    if (symbol === '' && !isGameEnded) {
      const updatedField = [...field]
      updatedField[index] = currentPlayer
      setField(updatedField)

      checkWinner(updatedField)

      setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
    }
  }

  const handleRestart = (): void => {
    setField(initField)
    setIsGameEnded(false)
    setIsDraw(false)
    setCurrentPlayer('X')
  }
  //
  return (
    <GameLayout
      handleRestart={handleRestart}
      Information={
        <Information
          isDraw={isDraw}
          isGameEnded={isGameEnded}
          currentPlayer={currentPlayer}
        />
      }
      Field={<Field field={field} handleNextTurn={handleNextTurn} />}
    />
  )
}

export default Game
