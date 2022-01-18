import {gql} from "@apollo/client";

const GET_MEDIUMS = gql`
      query getMediums {
  users(group: "mediums") {
    id
    email
    firstName
    lastName
    photo {
      url
    }
    dateUpdated
    username
  }
}
`;

export default GET_MEDIUMS;