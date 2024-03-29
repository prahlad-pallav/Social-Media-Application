const router = require('express').Router();
const authController = require('../controllers/authControllers');

router.post('/signup', authController.signupController);
router.post('/login', authController.loginController);
router.post('/refresh', authController.refreshAccessTokenController);

module.exports = router;