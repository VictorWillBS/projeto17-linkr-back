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

export async function getCountComment(req, res) {
  const { postId } = req.body;
  try {
    const { rows: data } = await commentRepository.getCountCommentById(postId);
    return res.send(data[0]);
  } catch (error) {
    return res.status(500).send(error);
  }
}
