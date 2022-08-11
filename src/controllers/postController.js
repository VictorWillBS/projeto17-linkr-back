import urlMetadata from "url-metadata";
import postRepository from "../repositories/postRepository.js";

export async function postPublication(req, res) {
  try {
    const { session } = res.locals;
    const { url, content } = req.body;

    const {
      title, image, description
    } = await urlMetadata(url);
    const {
      rows: metadataList 
    } = await postRepository.getMetadatas();

    if(!metadataList.some(metadata => metadata.url === url)){
      await postRepository.postMetadata(
        url, title, description, image
      );
    };

    if (!content) {
      await postRepository.postPublicationUrl(session.userId, url);
      return res.sendStatus(201);
    }

    await postRepository.postPublicationFull(session.userId, url, content);
    return res.sendStatus(201);
  } catch(e) {
    res.status(500).send(e);
  }
}

export async function showPosts(req, res) {
  try {
    const { offset } = req.params;
    const { session } = res.locals;

    const {
      rows: userPostList
    } = await postRepository.getPostsbyUserId(session.userId, offset);

    res.status(200).send(userPostList);
  } catch(e) {
    res.status(500).send(e);
  }
}