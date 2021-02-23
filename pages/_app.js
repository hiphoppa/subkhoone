import '../styles/globals.css'
import 'font-awesome/css/font-awesome.min.css'
import 'jquery'
// import { CookiesProvider } from 'react-cookie'
import '../public/css/bootstrap-rtl.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp