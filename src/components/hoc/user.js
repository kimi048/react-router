import React from 'react';

const UserHoc = (WrappedComponent,arg1) => {
  return (props) => (
    <div>
      
      <WrappedComponent {...props}/>
    </div>
  )
}

export default UserHoc;