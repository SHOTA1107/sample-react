import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { directive, tsPropertySignature } from '@babel/types';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// const Profile = (props) => {
//     return(
//         <ul>
//             <li>名前: {props.name}</li>
//             <li>誕生日: {props.birthDay}</li>
//         </ul>
//     )
// };

// const profile = {
//     name: '坂本龍馬',
//     birthDay: '1990/11/07',
// };

// ReactDOM.render(
// <Profile {...profile} />,
// document.getElementById('root')
// );


