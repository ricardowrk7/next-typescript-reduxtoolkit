import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import {useEffect} from "react"
import { getCookie, setCookie } from 'typescript-cookie'
import { useAppDispatch } from '../useHook/useReduxHook'
import { loginByCookies } from '../redux/AuthSlice'

function MyApp({ Component, pageProps }: AppProps) {
  
 
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
