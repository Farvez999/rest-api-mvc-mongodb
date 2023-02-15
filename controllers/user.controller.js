const User = require('../models/user.model')
const { v4: uuidv4 } = require('uuid')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneUser = (req, res) => {
    res.status(200).json({
        message: 'get one user'
    })
}

const createUser = async (req, res) => {
    try {
        const newUser = new User(
            {
                id: uuidv4(),
                name: req.body.name,
                age: Number(req.body.age)
            }
        )
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }

}
const getUpdateUser = (req, res) => {
    res.status(200).json({
        message: 'update user'
    })
}
const getDeleteUser = (req, res) => {
    res.status(200).json({
        message: 'delete user'
    })
}

module.exports = { getAllUsers, getOneUser, createUser, getUpdateUser, getDeleteUser }