import { AppProps } from 'next/app'
import '../styles/index.css'

function CustomApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default CustomApp