import commentRepository from "../repositories/commentRepository.js";

export async function postComment(req, res) {
  const { session } = res.locals;
  const { content, postId } = req.body;
  const userId = session.userId;

  try {
    await commentRepository.postComment(content, postId, userId);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error);
  }
}
