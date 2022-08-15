import likeRepository from "../repositories/likeRepository.js";

// import likeRepository from "../repositories/likeRepository";



// export async function allUserLikes(req,res){
//   const {userId}=req.params
//   try {
//     const {rows:allUserLikes} = await likeRepository.getAllLikes(userId)
//     res.status(200).send(allUserLikes)
//   } catch (error) {
//     res.status(500).send(error)
//   }
// }

export async function allLikes(req,res){
  const {postId}=req.params
  console.log(postId);
  try {
    const {rows:allLikes} = await likeRepository.getAllLikes(postId)
    res.status(200).send(allLikes)
  } catch (error) {
    res.status(500).send(error)
  }

}

export async function postLike(req,res){
  const {postId}=req.params
  const {userId}=req.body
  try {
    await likeRepository.postLike(postId,userId)
    res.status(201).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

export async function deleteLike(req,res){
  const {postId,userId}=req.params
    try {
    await likeRepository.deleteLike(postId,userId)
    res.status(200).send()
  } catch (error) {
    res.status(500).send(error)
  }
}



export async function like(req, res) {
  const {postId} = req.params
  const { userId } = req.body;
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

