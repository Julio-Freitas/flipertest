import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'fliperdevtest2020',
    },
    cache: new InMemoryCache(),
});
export default client;
