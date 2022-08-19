import followRepository from "../repositories/followRepository.js";
import userRepository from "../repositories/userRepository.js";

export async function getFollowers(_, res) {
    try {
        const { session } = res.locals;

        const {
            rows: followersList
        } = await followRepository.getFollowersById(session.userId);

        res.status(200).send(followersList);
    } catch(e) {
        res.status(500).send(e);
    }
}

export async function postFollowers(req, res) {
    try {
        const { session } = res.locals;
        const { followingId } = req.body;
        
        if(session.userId === followingId)
            return res.sendStatus(422);
        
        const {
            rows: usersList
        } = await userRepository.getUserId(followingId);
        
        if(usersList.length <= 0) return res.sendStatus(404);

        await followRepository.postFollowersById(
            session.userId, followingId
        );

        res.sendStatus(201);
    } catch(e) {
        res.status(500).send(e);
    }
}

export async function unfollowing(req, res) {
    try {
        const { session } = res.locals;
        const id = Number(req.params.id);

        const {
            rows: followersList
        } = await followRepository.getFollowersById(session.userId);
        
        if(!followersList.some(following => 
            following.followingId === id    
        )) return res.sendStatus(404);

        await followRepository.deleteFollowersById(
            session.userId, id
        );

        res.sendStatus(200);
    } catch(e) {
        res.status(500).send(e);
    }
}