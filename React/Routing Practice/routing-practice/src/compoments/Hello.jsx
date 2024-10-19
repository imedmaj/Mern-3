import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Hello = () => {
    const { col1 } = useParams()
    const { col2 } = useParams()
  return (
    <div  style={ {backgroundColor:col2 ,color:col1}}>Hello</div>

  )
}
export default Hello