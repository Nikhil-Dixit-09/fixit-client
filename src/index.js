import React from 'react'
import ReactDOM from 'react-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App'
const store=createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <GoogleOAuthProvider clientId='748556971175-prke8ks490cqramppvk08l9ke8tl2co5.apps.googleusercontent.com'>
    <App/>
    </GoogleOAuthProvider>

</Provider>
,document.getElementById('root'));