import tagRepository from "../repositories/TagRepository.js";

export async function tagController (req,res) {
    try {
        const {rows:tagsTrending} = await tagRepository.getTagsRepository();
        res.status(200).send(tagsTrending);
    } catch(e) {
        res.status(500).send(e);
    }
}