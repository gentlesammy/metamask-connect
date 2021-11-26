import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Web3ReactProvider} from "@web3-react/core"
import web3 from "web3"

function getLirary(provider){
  return new web3(provider)
}
function MyApp({ Component, pageProps }) {
  return( 
    <Web3ReactProvider  getLibrary={getLirary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
