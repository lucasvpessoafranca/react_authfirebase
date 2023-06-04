import { AppRoutes } from "./routes/routes";
import {AuthGoogleProvider} from './context/authGoogle'
export function App() {
  return(
    <AuthGoogleProvider>
    <AppRoutes/>

    </AuthGoogleProvider>
   )
}