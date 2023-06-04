import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { Navigate } from "react-router-dom";



export function Login() {

  const {signInGoogle, signed} =  useContext(AuthGoogleContext)
 

 
  if(!signed) {
    return <h1>
    <button onClick={()=> signInGoogle()} >Logar com o Google </button>
  </h1>;
  } else {
    return <Navigate to="/home"/>
  }
 
}
