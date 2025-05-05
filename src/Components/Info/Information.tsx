import { FC, ReactElement } from 'react'
import InformationLayout from './InformationLayout'
import { Player } from '../../Types/Types'

export type InformationProps = {
  isDraw: boolean
  isGameEnded: boolean
  currentPlayer: Player
}

const Information: FC<InformationProps> = ({ currentPlayer, isGameEnded, isDraw }) => {
  const showInfoText = (text: string): ReactElement => (
    <span className='text-3xl text-green-500'>{text}</span>
  )

  return (
    <InformationLayout
      showInfoText={showInfoText}
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  )
}

export default Information
