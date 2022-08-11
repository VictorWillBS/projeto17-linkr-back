import tagRepository from "../repositories/TagRepository.js";
export async function tagController (req,res){
    const {rows:tagsTrending} = await tagRepository.getTagsRepository();
    res.send(tagsTrending);
}