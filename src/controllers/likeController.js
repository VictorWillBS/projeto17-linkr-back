import likeRepository from "../repositories/likeRepository.js";

export async function like(req, res) {
  const { postIdLike, like } = req.body;
  const { session } = res.locals;
  const userIdLike = session.userId;

  try {
    const { rows: likes } = await likeRepository.getLike(
      postIdLike,
      userIdLike
    );
    if (likes.length !== 0 && like) {
      return res.sendStatus(200);
    }
    if (like) {
      await likeRepository.addLike(postIdLike, userIdLike);
      return res.sendStatus(201);
    } else {
      await likeRepository.deleteLike(postIdLike, userIdLike);
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getLikes(req, res) {
  const { postLikeId } = req.body;
  try {
    const { rows: likes } = await likeRepository.getLikePostId(postLikeId);
    return res.send(likes);
  } catch (error) {
    return res.status(500).send(error);
  }
}
