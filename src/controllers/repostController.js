import repostRepository from "../repositories/repostRepository.js";

export async function postRepost(req, res) {
  const { session } = res.locals;
  const userId = session.userId;
  const { postId } = req.body;

  try {
    await repostRepository.post(userId, postId);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error);
  }
}
