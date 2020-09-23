import React, {useContext} from "react";
import Application from "./Application";
import history from './utils/history.js';
import UserProvider, {UserContext} from "./providers/UserProvider.jsx";
import './App.css'
import "./pages/ComeVisit.js";
function App(){
const user = useContext(UserContext);

  return(
    <UserProvider>
      <div  className="App styleContainer">
       <Application user={user} />
      </div>
    </UserProvider>


  )

}
export default App;
