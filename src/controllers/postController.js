import postRepository from "../repositories/postRepository.js";

export async function postPublication(req, res) {
  const { session } = res.locals;
  const { url, content } = req.body;

  if (!content) {
    await postRepository.postPublicationUrl(session.userId, url);
    return res.sendStatus(201);
  }

  await postRepository.postPublicationFull(session.userId, url, content);
  return res.sendStatus(201);
}

export async function showPosts(req, res) {
  try {
    const { offset } = req.params;
    const { session } = res.locals;

    const {
      rows: postList
    } = await postRepository.getPosts(session.userId, offset);

    res.status(200).send(postList);
  } catch(e) {
    res.status(500).send(e);
  }
}