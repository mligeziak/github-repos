import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Client from 'graphql/Client';

import Routing from './Routing';

import styles from './App.module.scss';

const client = Client.getClient();

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
