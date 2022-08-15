import userRepository from "../repositories/userRepository.js";

export async function getUsers(_, res) {
    try {
        const {
            rows: userList
        } = await userRepository.getUsersList();

        if(userList.length <= 0) return res.sendStatus(404);

        res.status(200).send(userList);
    } catch(e) {
        res.status(500).send(e);
    }
}

export async function getUser (req, res) {
    const { session } = res.locals;
    const { rows: user } = await userRepository.getUserId(session.userId);
    res.send(user[0]);
}

export async function getUserbyToken (req, res) {
    const { token } = req.body;
    const { rows: user } = await userRepository.getUserIsdbyToken(token);
    res.send(user[0]);
}

export async function getUserbyId (req, res) {
    const { id } = req.params;
    const { rows: user } = await userRepository.getUserId(id);
    res.send(user[0]);
}

export async function getUserPosts(req, res) {
    try {
        const {id}=req.params
        const { rows: userPosts}= await userRepository.getUserPosts(id)
        res.status(200).send(userPosts);
    } catch(e) {
        res.status(500).send(e);
    }
}
