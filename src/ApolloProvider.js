import React from "react";
import App from "./App";
import { setContext } from "apollo-link-context";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  ApolloProvider,
} from "@apollo/client";

const authLink = setContext((_, { headers }) => {
  if (localStorage.getItem("jwt-token")) {
    const token = localStorage.getItem("jwt-token");
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    new HttpLink({
      uri: "http://localhost:5000",
    }),
  ),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
