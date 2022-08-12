import userRepository from "../repositories/userRepository.js";

export async function getUsers(req, res) {
    try {
        const { id } = req.params;

        const {
            rows: userList
        } = await userRepository.getUsersById(id);
        const [ user ] = userList;

        if(userList.length <= 0) return res.sendStatus(404);

        res.status(200).send(user);
    } catch(e) {
        res.status(500).send(e);
    }
}