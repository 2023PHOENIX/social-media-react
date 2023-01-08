import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {DarkModeContextProvider} from './context/darkModeContext';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>


        <DarkModeContextProvider>
                <App/>
        </DarkModeContextProvider>

    </React.StrictMode>,
)
