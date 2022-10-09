import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
return(
  <SessionProvider session={session}>
  
  <Navbar/>
  <Component {...pageProps} />
  </SessionProvider>
)
}

export default MyApp
