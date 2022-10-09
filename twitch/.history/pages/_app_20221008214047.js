import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
function MyApp({ sessiComponent, pageProps }) {
return(
  <SessionProvider session={session}>
  <Navbar/>
  <Component {...pageProps} />
  </SessionProvider>
)
}

export default MyApp
