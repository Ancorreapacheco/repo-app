import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants  from 'expo-constants';

//const URI= 'http://localhost:4000/graphql'
//const URI = 'http://192.168.1.38:4000/graphql'
const URI= Constants.manifest.extra.uri


const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: URI,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;