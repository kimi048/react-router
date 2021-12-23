import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Card from './hoc/card';
import Auth from './hoc/auth';

const Profile = (props) => {
  // console.log(props);
  const redirectUser = () => {
    //console.log(props);

    props.history.push('/')
    // const userRedirect = false;
    // if (userRedirect) {
    //   return (
    //     <Redirect to="/"/>
    //   )
    // }
  }

  return (
    <>
      <Auth>
        <Card>
          hello from card
        </Card>
      </Auth>
      
      <button onClick={()=>redirectUser()}>
        Redirect
      </button>
      
      <Link to={{
        pathname:`${props.match.url}/posts`
      }}>go to Posts</Link>
    </>
  )
}

export default Profile;