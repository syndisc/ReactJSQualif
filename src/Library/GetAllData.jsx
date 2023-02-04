import { gql } from "@apollo/client";

export const get_all_data = gql`
query ($filter: CountryFilterInput) {
  countries(filter: $filter) {
    code
    name
  }
}
`