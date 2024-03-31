import { ApolloClient, InMemoryCache } from '@apollo/client/core';

export default defineNuxtPlugin((nuxtApp) => {
    const apolloPlugin = () => {
        const client = new ApolloClient({
          uri: 'http://localhost:4000/graphql', // Replace with your server's URL
          cache: new InMemoryCache(),
        });
      
        nuxtApp.setup = () => {
            const apolloProvider = new ApolloClient({
                defaultClient: client
            });
            apolloProvider;
        };
      };

      apolloPlugin();
});

// Create the apollo client
