import express  from   'express' ;
import { Login, Register } from '../controllers/auth.js';
import {validateRegister, validateLogin} from "../helpers/validation.js";
const router = express.Router();


router.post("/register",validateRegister, Register);
router.post("/login", validateLogin, Login);


export default router;