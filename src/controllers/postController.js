import postRepository from "../repositories/postRepository.js";

export async function postPublication(req, res) {
  const { session } = res.locals;
  const { url, content } = req.body;

  if (!content) {
    await postRepository.postPublicationUrl(session[0].userId, url);
    return res.sendStatus(201);
  }

  await postRepository.postPublicationFull(session[0].userId, url, content);
  return res.sendStatus(201);
}
