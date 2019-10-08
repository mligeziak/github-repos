import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';

class Client {
  constructor() {
    this.client = null;

    this.createClient();
  }

  createClient() {
    const httpLink = new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_API_URL,
    });

    const authLink = this.createAuthLink();

    this.client = new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }

  createAuthLink = () => (
    new ApolloLink((operation, forward) => {
      const token = process.env.REACT_APP_GRAPHQL_API_TOKEN;

      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return forward(operation);
    })
  );

  getClient = () => this.client;
}

export default new Client();
