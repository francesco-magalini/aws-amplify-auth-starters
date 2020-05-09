import React from 'react'

import Container from '../layout/Container'
import Button from '../layout/Button'
import {signOut} from './../auth/SignOut'

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <h1>Profile</h1>
        <Button
          title="Sign Out"
          onClick={signOut}
        />
      </Container>
    )
  }
}

export default Profile