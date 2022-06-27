import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({

  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4te22tl011m01t790l01q6c/master',
  cache: new InMemoryCache()

})