import PropTypes from 'prop-types'
import { Navigate} from 'react-router-dom'
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})


export function AuthGoogleProvider ({children}) {
  
    const auth = getAuth(app);
    const [user, setUser]    = useState(null);

    useEffect(() => {
      function loadStoreAuth () {
        const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
        const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
        if(sessionToken && sessionUser) {
          setUser(sessionUser)
        }
      }
      loadStoreAuth()
    })

    function signInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          setUser(user);
          sessionStorage.setItem("@AuthFirebase:token", token);
          sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    function signOut() {
      sessionStorage.clear()
      setUser(null)
      return <Navigate to="/"/>
    }
      return (
        <AuthGoogleContext.Provider value={{signInGoogle, signed: !!user, user, signOut}}>
            {children}
        </AuthGoogleContext.Provider>
      )

}




AuthGoogleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}