import React from 'react'

const style = {
  background : "lightgrey"
}

const Auth = (props) => {
  const pass = 'password12';

  if (pass==='password123') {
    return props.children
  } else {
    return <h3>You are not authorized</h3>
  }
}
export default Auth;
