import { gql } from "@apollo/client";

// put your GraphQL requests here (in one file or different ones)
export const GET_COUNTRIES = gql`
    query Countries {
        countries {
            code
            emoji
            name
        }
    }
`;

export const GET_COUNTRY_BY_CODE = gql`
    query Country($code: String!) {
        country(code: $code) {
            id
            code
            continent {
                id
                name
            }
            emoji
            name
        }
    }
`

export const GET_CONTINENTS = gql`
    query Continents {
        continents {
            id
            name
        }
    }
`