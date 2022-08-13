import urlMetadata from "url-metadata";
import postRepository from "../repositories/postRepository.js";

export async function postPublication(req, res) {
  try {
    const { session } = res.locals;
    const { url, content,tags } = req.body;

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
        
    tags.map(async (tagname)=>{
      const {rows:tag} = await postRepository.getTagIdByNameTag(tagname)
      if(!tag.length){
        await postRepository.postTag(tagname)
      }
      await postRepository.postTags_Posts(post[0].id,tagname)
    }) 
    
    return res.sendStatus(201);
  } catch(e) {
    res.status(500).send(e);
  }
}

export async function showPosts(req, res) {
  
  try {
    const {
      rows: userPostList
    } = await postRepository.getPosts();
    res.status(200).send(userPostList);
  } catch(e) {
    
    res.status(500).send(e);
  }
}