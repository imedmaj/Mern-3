import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Number = () => {
    const { id } = useParams()
  return (
    <div>{id}</div>
  )
}
export default Number