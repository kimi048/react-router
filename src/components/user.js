import React from 'react'
import UserHoc from './hoc/user';

const User = (props) => {
  console.log(props)
  return (
    <div>
      User
    </div>
  )
 }
export default UserHoc(User,"Hello i am");
