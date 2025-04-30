import React from 'react'

type MainProps = {
  Information: React.ReactElement
  Field: React.ReactElement
  isDraw: boolean
  isGameEnded: boolean
  currentPlayer: string
  field: string[]
  handleNextTurn: (index: number, symbol: string) => void
  handleRestart: () => void
}

export type InformationProps = Omit<
  MainProps,
  'Information' | 'Field' | 'handleNextTurn' | 'handleRestart' | 'field'
>

export type InformationLayoutProps = Omit<
  MainProps,
  'Information' | 'Field' | 'field' | 'handleNextTurn' | 'handleRestart'
  //
> & { showInfoText: (text: string) => React.ReactElement }

export type GameLayoutProps = Pick<
  MainProps,
  'Information' | 'Field' | 'handleRestart'
>

export type FieldProps = Pick<MainProps, 'field' | 'handleNextTurn'>
