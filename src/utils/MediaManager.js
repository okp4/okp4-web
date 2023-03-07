export function GetImage(filename, allFiles) {
  let imageData;
  const image = allFiles?.allImages.edges.find((file) => {
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
  const video = allFiles?.allVideos.edges.find((file) => {
    return file.node.relativePath === filename;
  });

  if (video) {
    videoData = video.node.publicURL;
  } else {
    videoData = false;
  }

  return videoData;
}
