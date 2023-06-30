import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import DentistContext from './Components/utils/global.context'

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <DentistContext>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </DentistContext>,
    )
