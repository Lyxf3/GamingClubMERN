import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './pages/app/app';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'


const app: JSX.Element = (
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);

reportWebVitals();
