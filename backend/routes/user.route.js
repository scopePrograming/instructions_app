// To used express
const express = require('express')

// Store express router to used
const router = express.Router()

// User controllers
const userController = require('../controllers/user.controller')

// Auths
const auth = require('../middleware/auth')

// Register user
router.post('/user/register', userController.userRegister)

// login  user
router.post('/user/login', userController.userLogin)

// Show all user by admin
router.post('/admin/all', auth.adminAuth, userController.showAllUser)

// Show single user
router.get('/admin/single/:id', auth.adminAuth, userController.showSingleUser)

// delete your self (user)
router.delete('/user/delete', auth.userAuth, userController.deleteUser)

// delete users by admin
router.delete('/admin/delUser/:id', auth.adminAuth, userController.deleteUserByAdmin)

// logout any user or admin
router.post('/user/logout', auth.generalAuth, userController.logOut)

router.post('/user/logoutAll', auth.generalAuth, userController.logOutAll)

// To export router
module.exports = router