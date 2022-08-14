import likeRepository from "../repositories/likeRepository";

export async function allLikes(req,res){
  const {postId}=req.params
  try {
    const {rows:allLikes} = await likeRepository.getAllLikes(postId)
    res.status(200).send(allLikes)
  } catch (error) {
    res.status(500).send(error)
  }

}

export async function allUserLikes(req,res){
  const {userId}=req.params
  try {
    const {rows:allUserLikes} = await likeRepository.getAllLikes(userId)
    res.status(200).send(allUserLikes)
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
  const {postId}=req.params
  const {userId}=req.body
  try {
    await likeRepository.deleteLike(postId,userId)
    res.status(200).send()
  } catch (error) {
    res.status(500).send(error)
  }
}