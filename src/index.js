import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Grommet } from 'grommet';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import theme from './theme'
import GlobalStyle from './GlobalStyle'
import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "AIzaSyB9ygQPqrNYQEuw9eIZ9dW9ty7muSIwUeg",
  authDomain: "vanzcontrol.firebaseapp.com",
  projectId: "vanzcontrol",
  storageBucket: "vanzcontrol.appspot.com",
  messagingSenderId: "197690230752",
  appId: "1:197690230752:web:74e48628905bd12eafcd85",
  measurementId: "G-FW2YDH100G"  
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const StyledGrommet = styled(Grommet)`
  height: 100%;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGrommet theme={theme} themeMode="light">
        <GlobalStyle/>
        <App/>
      </StyledGrommet>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);