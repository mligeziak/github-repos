import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Routing from './Routing';

import styles from './App.module.scss';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className={styles.root}>
        <Routing />
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
