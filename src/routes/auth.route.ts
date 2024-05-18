import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { validateCourseSchema } from "../middleware/validatorSchema.middleware";
import { AuthSchema } from "../schema/auth.schema";
import { userSignUpSchema } from "../schema/user.schema";

const router = Router()

router.post('/register', validateCourseSchema(userSignUpSchema), register) // registro de usuario
router.post('/login',validateCourseSchema(AuthSchema), login) // login de usuario

export {router}