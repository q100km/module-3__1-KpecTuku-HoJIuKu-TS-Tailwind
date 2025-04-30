import { FC } from 'react'
import { InformationLayoutProps } from '../../Types/index'

const InformationLayout: FC<InformationLayoutProps> = ({
  currentPlayer,
  isGameEnded,
  isDraw,
  showInfoText,
}) => {
  //
  if (isDraw) {
    return showInfoText(`Ничья`)
  }

  if (!isDraw && isGameEnded) {
    return showInfoText(`Победа игрока : ${currentPlayer === 'X' ? '0' : 'X'}`)
  }

  if (!isDraw && !isGameEnded) {
    return showInfoText(`Ходит игрок : ${currentPlayer}`)
  }
}

export default InformationLayout
