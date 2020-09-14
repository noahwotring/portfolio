import React, {Component, createContext} from 'react';
import {auth} from 'C:\\Users\\Noah Wotring\\Desktop\\Code\\portfolio\\ReactUserDataPractice\\my-app\\src\\firebase.js';
import {generateUserDocument} from '../firebase.js';
export const UserContext = createContext({user: null});

class UserProvider extends Component {
  state = {
    user: null,
  };
  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({user});
    });
    console.log(this.state.user);


  }


  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
