// To used express
const express = require('express')

// Store express router to used
const router = express.Router()

// Auths
const auth = require('../middleware/auth')

// userInfo controllers
const userInfoController = require('../controllers/userInfo.controllr')

// add userInfo
router.post(
    '/user/addUserInfo',
    auth.userAuth,
    userInfoController.addUserInfo
)

// Show all userInfo (by admin)
router.post('/admin/showAllUserInfo', auth.adminAuth, userInfoController.showAllUserInfo)

// Show single userInfo (by user)
router.post('/user/showSingleUserInfoForUser', auth.userAuth, userInfoController.showSingleUserInfoForUser)

// Show all instructions for one user
router.get('/admin/showsingleUserInfo/:id', auth.adminAuth, userInfoController.showsingleUserInfo)

// To export router
module.exports = router