import { gql } from 'apollo-boost';

const Summary = gql`
    query MyQuery {
        wealthSummary {
            id
            profitability
            gain
            cdi
            total
        }
    }
`;

const FoundById = gql`
    query MyQuery($id: Int!) {
        wealthSummary_by_pk(id: $id) {
            id
            cdi
            gain
            profitability
            total
        }
    }
`;

export { Summary, FoundById };
