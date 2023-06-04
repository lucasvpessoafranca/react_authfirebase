import { useContext } from "react"
import { AuthGoogleContext } from "../../context/authGoogle"

export function Home() {
    const {user, signOut} =  useContext(AuthGoogleContext)
    const userLogado = JSON.parse(user)
    console.log(userLogado)

    return (
        <div>

            <header>
                <button onClick={()=> signOut()}>Sair</button>
            </header>
                <h1>Bem-vindo: {userLogado.displayName}</h1>
                <p>Seu e-mail é: {userLogado.email}</p>
                <p>Sua foto: </p>
                <img src={userLogado.photoURL} alt="" />
        </div>
    )
}