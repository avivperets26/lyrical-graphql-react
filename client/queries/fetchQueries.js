import gql from "graphql-tag";

export const querySongs = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const querySong = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
