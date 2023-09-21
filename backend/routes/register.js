import express from 'express';
import { RegisterController } from '../controllers/registercontroller.js';

const register = express.Router();

register.post('/', RegisterController);

export default register;
