import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import { getTredingTags,showPostByTag} from "../controllers/tagController.js";
const tagsRouter = Router();

tagsRouter.get("/tagsTrending", getTredingTags);
tagsRouter.get("/hashtag/:hashtag",tokenValidation,showPostByTag)
export default tagsRouter;