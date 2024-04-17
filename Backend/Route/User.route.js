import express from'express'
import { SignUp, login } from '../Controllers/User.controller.js';
const router = express.Router()


router.post("/signUp", SignUp)
router.post("/login", login)





export default router;