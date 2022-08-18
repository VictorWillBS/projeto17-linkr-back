import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import { getTredingTags,showPostByTag} from "../controllers/tagController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import offsetSchema from "../schemas/offsetSchema.js";
const tagsRouter = Router();

tagsRouter.get("/tagsTrending", getTredingTags);
tagsRouter.get(
    "/hashtag/:hashtag/:offset",
    validateSchema(offsetSchema),
    tokenValidation,
    showPostByTag
)

export default tagsRouter;