import '../styles/globals.css'
import Nav from './components'

const MyApp = ({ Component, pageProps }) => {
  return <div>
    <Nav />
    <Component {...pageProps} />
  </div>
}


export default MyApp
