// import { useStaticQuery, graphql } from "gatsby";

export function GetImage(filename, allFiles) {
  let imageData;
  const image = allFiles.find((file) => {
    return file.node.relativePath === filename;
  });

  console.log(image);

  if (image) {
    imageData = image.node.childImageSharp.gatsbyImageData;
  } else {
    imageData = false;
  }

  return imageData;
}

// export const query = graphql`
//   query AllImages {
//     allFile {
//       edges {
//         node {
//           id
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;

// const data = useStaticQuery(graphql`
//   query ImageQuery {
//     allFile(filter: { relativePath: { eq: "index_intro_card_1.png" } }) {
//       edges {
//         node {
//           id
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `);
