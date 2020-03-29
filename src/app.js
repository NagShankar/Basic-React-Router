import React from "react";
import ReactDOM from "react-dom";


//importing CSS
import './styles/style.scss';
import 'normalize.css/normalize.css';

//importing AppRouter
import AppRouter from './routers/AppRouter';





//rendering
ReactDOM.render(
<AppRouter />,
document.getElementById('app')
)


