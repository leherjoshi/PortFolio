const express =require('express');

const { sendEmailController } = require('../controller/portfolioController');

const router =express.Router();


router.post("/send-email",sendEmailController);

module.exports=router;