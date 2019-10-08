import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import styles from './App.module.scss';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className={styles.root}>App</div>
  </ApolloProvider>
);

export default App;
