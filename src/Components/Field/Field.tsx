import { FC } from 'react'
import { FieldProps } from '../../Types/index'
import FieldLayout from './FieldLayout'

const Field: FC<FieldProps> = ({ field, handleNextTurn }) => {
  //
  return <FieldLayout field={field} handleNextTurn={handleNextTurn} />
}

export default Field
