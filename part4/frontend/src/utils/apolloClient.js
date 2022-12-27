import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants  from 'expo-constants';
import { relayStylePagination } from '@apollo/client/utilities' //For query pagination

//const URI= 'http://localhost:4000/graphql'
//const URI = 'http://192.168.1.38:4000/graphql'
const apolloUri= Constants.manifest.extra.uri


const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: apolloUri,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});


const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_,{ headers }) =>{
    try {
      const accessToken  = await authStorage.getAccesToken()

      return {
        headers: {
          ...headers, authorization: accessToken ? `Bearer ${accessToken}` : ''
        }
      }
    } catch (e) {
      console.log(e)

      return {
        headers
      }
    }
  })



  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  });
};

export default createApolloClient;