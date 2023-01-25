export function GetImage(filename, allFiles) {
  let imageData;
  const image = allFiles.find((file) => {
    return file.node.relativePath === filename;
  });

  if (image) {
    imageData = image.node.childImageSharp.gatsbyImageData;
  } else {
    imageData = false;
  }

  return imageData;
}

export function GetVideo(filename, allFiles) {
  let videoData;
  const video = allFiles.find((file) => {
    return file.node.relativePath === filename;
  });

  if (video) {
    videoData = video.node.publicURL;
  } else {
    videoData = false;
  }

  return videoData;
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
