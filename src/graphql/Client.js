import config from 'config';
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
      uri: config.apiUrl,
    });

    const authLink = this.createAuthLink();

    this.client = new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }

  createAuthLink = () => (
    new ApolloLink((operation, forward) => {
      const token = config.apiToken;

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
