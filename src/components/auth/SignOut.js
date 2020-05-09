import { Auth } from 'aws-amplify';
export function signOut() {
  Auth.signOut()
    .then(() => {
      this.props.history.push('/auth');
    })
    .catch(() => console.log('error signing out...'));
}
