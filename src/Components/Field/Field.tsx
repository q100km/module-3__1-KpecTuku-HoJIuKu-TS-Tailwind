import { FC } from 'react'
import FieldLayout from './FieldLayout'
import { Field as FieldType, Player } from '../../Types/Types'

export type FieldProps = {
  field: FieldType
  handleNextTurn: (index: number, symbol: Player | '') => void
}

const Field: FC<FieldProps> = ({ field, handleNextTurn }) => {
  return <FieldLayout field={field} handleNextTurn={handleNextTurn} />
}

export default Field
