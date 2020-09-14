import React, {useContext} from "react";
import Application from "./Application";
import history from './utils/history.js';
import UserProvider, {UserContext} from "./providers/UserProvider.jsx";
import './App.css'
function App(){
const user = useContext(UserContext);

  return(
    <UserProvider className="App styleContainer">
      <Application user={user} />
    </UserProvider>


  )

}
export default App;
