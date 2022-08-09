import usersRepository from "../repositories/usersRepository.js";

export async function signUp(req, res) {
  const { email, userName, password, pictureUrl } = req.body;
  try {
    const { rows: user } = await usersRepository.getUserByEmail(email);
    if (user.length !== 0) {
      return res.sendStatus(409);
    }
    usersRepository.addUser(email, password, userName, pictureUrl);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error);
  }
}
