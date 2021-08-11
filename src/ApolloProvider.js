import React from 'react';
import App from './App';
import { setContext } from 'apollo-link-context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const authLink = setContext((_, { headers }) => {
  if (localStorage.getItem('jwt-token')) {
    const token = localStorage.getItem('jwt-token');
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }
});

const httpLink = authLink.concat(
  new createUploadLink({
    uri: 'http://localhost:5000/graphql',
  }),
);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
