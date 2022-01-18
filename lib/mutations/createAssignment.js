import {gql} from "@apollo/client";

const MUTATE_CREATE_ASSIGNMENT = gql`
   mutation createNewAssignment($title: String!, $date: DateTime, $shortDescription: String!, $id: ID ) {
    save_assigments_default_Entry(
    title: $title
    date: $date
    shortDescription: $shortDescription
    assigmentStatus: 539
    authorId: $id
  ) {
    id
  }
}
`;

export default MUTATE_CREATE_ASSIGNMENT;
