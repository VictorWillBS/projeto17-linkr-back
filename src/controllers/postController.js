import urlMetadata from "url-metadata";
import postRepository from "../repositories/postRepository.js";

export async function postPublication(req, res) {
  try {
    const { session } = res.locals;
    const { url, content, tags } = req.body;
    
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

    const {rows:post} =  await postRepository.postPublicationFull(session.userId, url, content);
    
    if(tags) {
      tags.map(async (tagname)=>{
        const {rows:tag} = await postRepository.getTagIdByNameTag(tagname)
        if(!tag.length){
          await postRepository.postTag(tagname)
        }
        await postRepository.postTags_Posts(post[0].id,tagname)
      }) 
  
      
    }
    return res.sendStatus(201);
  } catch(e) {
    res.status(500).send(e);
  }
}

export async function showPosts(req, res) {
  try {
    const { session } = res.locals;

    const {
      rows: userPostList
    } = await postRepository.getPosts(session.userId);
    res.status(200).send(userPostList);
  } catch(e) {
    
    res.status(500).send(e);
  }
}

export async function showPostsOffset(req, res) {
  try {
    const { session } = res.locals;
    const { offset } = req.params;

    const {
      rows: userPostList
    } = await postRepository.getPosts(session.userId, offset);

    res.status(200).send(userPostList);
  } catch(e) {
    res.status(500).send(e);
  }
}

export async function editPosts(req, res) {
  try {
    const { session } = res.locals;
    const body = req.body;

    const {
      rows: postList
    } = await postRepository.getAllPosts();
    
    const userPostList = postList.filter(post =>
      post.userId === session.userId
    );

    if(userPostList.length <= 0)
      return sendStatus(404);
    if(!userPostList.some(post => post.postId === body.postId))
      return res.sendStatus(401);

    await postRepository.setPostsById(body.postId, body.content);

    if(body.tags) {
      body.tags.map(async (tagname)=>{
        const {rows:tag} = await postRepository.getTagIdByNameTag(tagname)
        if(!tag.length){
          await postRepository.postTag(tagname)
        }
        await postRepository.postTags_Posts(body.postId, tagname)
      })
    }

    res.sendStatus(200);
  } catch(e) {
    res.status(500).send(e);
  }
}

export async function deletePosts(req, res) {
  try {
    const { session } = res.locals;
    const{ id } = req.params;
    
    const {
      rows: postList
    } = await postRepository.getAllPosts();
    
    const userPostList = postList.filter(post =>
      post.userId === session.userId
    );

    if(userPostList.length <= 0)
      return sendStatus(404);
    if(!userPostList.some(post => post.postId === Number(id)))
      return res.sendStatus(401);
    
    await postRepository.deletePostsById(Number(id));

    res.sendStatus(200);
  } catch(e) {
    res.status(500).send(e);
  }
}