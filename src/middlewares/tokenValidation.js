import sessionsRepository from "../repositories/sessionsRepository.js";

export async function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const { rows: sessionList } = await sessionsRepository.getSessionByToken(token);
  const [ session ] = sessionList;

  if (sessionList.length === 0) {
    return res.sendStatus(401);
  }

  res.locals.session = session;
  next();
}
