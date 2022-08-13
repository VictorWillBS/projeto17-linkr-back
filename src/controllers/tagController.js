import tagRepository from "../repositories/TagRepository.js";

export async function getTredingTags (req,res) {
    try {
        const {rows:tagsTrending} = await tagRepository.getTagsRepository();
        res.status(200).send(tagsTrending);
    } catch(e) {
        res.status(500).send(e);
    }
}

export async function showPostByTag(req,res){
    const {hashtag} = req.params 
    
    try {
        const {rows:postsbyTag} = await tagRepository.getPostByTag(hashtag);
        res.status(200).send(postsbyTag);
    } catch(e) {
        res.status(500).send(e);
    }
}