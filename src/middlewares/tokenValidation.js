import sessionsRepository from "../repositories/sessionsRepository.js";

export async function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const { rows: session } = await sessionsRepository.getSessionByToken(token);

  if (session.length === 0) {
    return res.sendStatus(401);
  }

  res.locals.session = session;
  next();
}
