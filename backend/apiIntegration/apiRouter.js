import express from 'express';
import {getApiData, getdashboardData}  from './apiController.js';
import { testApi } from './test.js';
import { setDataInRedis } from '../middleware/redis.js';
import { login } from './login.js';
import { userRegistration } from '../controller/userRegistration.js';
import { getContactDetails, getJob } from '../controller/jobDetails.js';
import { payrollData } from '../controller/payrollDataAPI.js';
import { generatePdf } from '../controller/generatePdf.js';

const router = express.Router();
console.log("router")
router.get('/data', setDataInRedis(3600),getApiData);
router.get('/dashboard', setDataInRedis(3600),getdashboardData);
router.get('/test', testApi)
router.post('/login', login)
router.post('/register', userRegistration);
router.get('/job',getJob);
router.get('/contact',getContactDetails)
router.get('/payroll',payrollData);
router.post('/generate-pdf',generatePdf);

export default router;