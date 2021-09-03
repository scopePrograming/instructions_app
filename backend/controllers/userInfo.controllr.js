// Requires
const UserInfo = require('../database/models/userInfo.model')
const User = require('../database/models/user.model')

// add user info
const addUserInfo = async (req, res) => {
    try {
        let user_id = req.user._id
        let userInfo = await UserInfo.findOne({ user_id })
        if (userInfo) {
            let objkeys = Object.keys(req.body)
            if (objkeys.length == 0) throw new Error(`Please insert data`)
            objkeys.forEach(info => userInfo[info] = req.body[info])
            await userInfo.save()
            res.status(200).send({
                apiStatus: true,
                success: userInfo,
                message: `Data inserted`
            })
        }
        else {
            let userInfoNew = new UserInfo({
                ...req.body,
                'user_id': user_id
            })
            await userInfoNew.save()
            res.status(200).send({
                apiStatus: true,
                success: userInfoNew,
                message: `Data inserted`
            })
        }


    }
    catch (error) {
        res.status(500).send({
            apiStatus: false,
            result: error.message,
            message: `Check data to insert`
        })
    }
}

// Show all userInfo
const showAllUserInfo = async (req, res) => {
    try {
        let allUserInfo = await UserInfo.find()
        res.status(200).send({
            status: true,
            success: allUserInfo,
            message: "All user information"
        })
    }
    catch (error) {
        res.status(500).send({
            status: false,
            result: error,
            message: 'There are no user information'
        })
    }

}

// Show singleUserInfo (by user)
const showSingleUserInfoForUser = async (req, res) => {
    try {
        let user_id = req.user._id
        let userInfo = await UserInfo.findOne({ user_id })
        res.status(200).send({
            apiStatus: true,
            success: userInfo,
            message: `Information this user`
        })
    }
    catch (error) {
        res.status(500).send({
            apiStatus: false,
            result: error.message,
            message: `Check data!`
        })
    }
}

// Show singleUserInfo (by admin)
const showsingleUserInfo = async (req, res) => {
    try {
        let id = req.params.id
        let userInfo = await UserInfo.findOne({ user_id: id })
        if (!userInfo) throw new Error(`The user information not found`)

        res.status(200).send({
            apiStatus: true,
            success: userInfo,
            message: `This single user information`
        })
    }
    catch (error) {
        res.status(500).send({
            apiStatus: false,
            result: error.message,
            message: `Check data! to show`
        })
    }
}

// Exports
module.exports = {
    addUserInfo,
    showAllUserInfo,
    showSingleUserInfoForUser,
    showsingleUserInfo
}
