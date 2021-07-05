import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'fliperdevtest2020',
    },
});
export default client;
