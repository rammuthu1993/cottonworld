import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams()
   // const {userId} = useParams()
    const userId = params.userId
  return (
    <div>
      User Details Here {userId}
    </div>
  )
}

export default UserDetails
