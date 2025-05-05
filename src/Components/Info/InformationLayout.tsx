import { FC } from 'react'
import { Player } from '../../Types/Types'

type InformationLayoutProps = {
  isDraw: boolean
  isGameEnded: boolean
  currentPlayer: Player
  showInfoText: (text: string) => React.ReactElement
}

const InformationLayout: FC<InformationLayoutProps> = ({
  currentPlayer,
  isGameEnded,
  isDraw,
  showInfoText,
}) => {
  if (isDraw) {
    return showInfoText(`Ничья`)
  }

  if (!isDraw && isGameEnded) {
    return showInfoText(`Победа игрока : ${currentPlayer === 'Х' ? 'O' : 'Х'}`)
  }

  if (!isDraw && !isGameEnded) {
    return showInfoText(`Ходит игрок : ${currentPlayer}`)
  }
}

export default InformationLayout
