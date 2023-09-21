import express from 'express';
import { LoginController } from '../controllers/logincontroller.js';

const login = express.Router();

login.post('/', LoginController);

export default login;
