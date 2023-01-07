import React from 'react'

import App from './App'
import './index.css'

import ReactDOM from 'react-dom/client'
import { Authreducers } from './redux/reducers'

import './index.css'
import { Provider } from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"
import { hydrateRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google"


const preloadedState = {
  token: null,
  error: null,
  loading: false,
}
const store = configureStore({ reducer:Authreducers , preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
})

console.log(store.getState())

const app = <GoogleOAuthProvider clientId="280712505006-b3go2864sjjh70h7fvfrgr5aghg7rnfc.apps.googleusercontent.com">
      
  <Provider store={store}>
      <App />
  </Provider>

</GoogleOAuthProvider>;


function render(){
   
  ReactDOM.createRoot(document.getElementById('root')).render(
    app
   );
   }
  
render()