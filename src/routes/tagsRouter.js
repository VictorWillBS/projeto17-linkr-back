import { Router } from "express";
import { getTredingTags,showPostByTag} from "../controllers/tagController.js";
const tagsRouter = Router();

tagsRouter.get("/tagsTrending", getTredingTags);
tagsRouter.get("/hashtag/:hashtag",showPostByTag)
export default tagsRouter;