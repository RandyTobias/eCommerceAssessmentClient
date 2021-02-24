import React from 'react';
import { AuthAndUserConsumer } from './AuthProvider';

const WithAuth = ({children}) => {
  return (
    <AuthAndUserConsumer>
      {
        ({ auth }) => children(auth)
      }
    </AuthAndUserConsumer>
  )
}

export default WithAuth
