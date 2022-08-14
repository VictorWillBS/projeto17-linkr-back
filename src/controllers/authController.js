import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import usersRepository from "../repositories/usersRepository.js";
import sessionsRepository from "../repositories/sessionsRepository.js";

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const {
            rows: users
        } = await usersRepository.getUserByEmail(email);
        const [ user ] = users;
        
        if(!user) return res.sendStatus(404);
        if(
            !bcrypt.compareSync(password, user.password)
        ) return res.sendStatus(401);

        const {
            rows: usersSession
        } = await sessionsRepository.getSessionByUserId(user.id);
        const [ userSession ] = usersSession;

        const token = uuid();
        const userData = { token, userId:user.id,}
        if(usersSession.length > 0) {
            await sessionsRepository.setSessions(token, userSession.id);
            
            res.status(200).send(userData);
        } else {
            await sessionsRepository.createSession(user.id, token);

        
        
            res.status(200).send(userData);
        }
    } catch(e) {
        res.status(500).send(e);
    }
}