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