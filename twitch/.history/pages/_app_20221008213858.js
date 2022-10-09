import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
return(
  < <SessionProvider session={session}></SessionProvider>>
  <Navbar/>
  <Component {...pageProps} />
  </>
)
}

export default MyApp
