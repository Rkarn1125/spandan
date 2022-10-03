import express from 'express';
const router = express.Router();

import teacherController from '../controllers/teacherControllers';


//teacher Routes
router.post('/teacher/register', teacherController.teacherRegistration)
router.post('/teacher/login', teacherController.teacherLogin)


export default router