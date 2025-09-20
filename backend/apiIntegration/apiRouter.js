import express from 'express';
import {getApiData}  from './apiController.js';
import { testApi } from './test.js';
import { setDataInRedis } from '../middleware/redis.js';
import { login } from './login.js';
import { userRegistration } from '../controller/userRegistration.js';

const router = express.Router();
console.log("router")
router.get('/data', setDataInRedis(3600),getApiData);
router.get('/test', testApi)
router.post('/login', login)
router.post('/register', userRegistration)

export default router;