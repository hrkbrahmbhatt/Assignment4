const User = require("../data/users");

const getAllUsers = async (req, res) => {
  // if id is in params , get that user
  if (req.query.id && req.query.id !== "") {
    try {
      const { id: UserID } = req.query;
      const user = await User.getOne(UserID); // goes to data > user.js

      //if no user
      if (!user || Object.keys(user).length === 0) {
        return res
          .status(404)
          .json({ msg: `No User with this ID : ${UserID}` });
      } else {
        res.status(200).json({ user }); // particular id user will shown
      }
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
  //all data will fetch
  else {
    try {
      const Users = await User.getAll(); //calling getall in data > user.js
      res.status(200).json({ Users });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
};

//create new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body); //calling create in data > user.js
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//update existing user's  data
const updateUser = async (req, res) => {
  try {
    const { id: UserID } = req.params;
    const updatedUser = await User.update(UserID, req.body); //calling update in data > user.js
    if (!updatedUser || Object.keys(updatedUser).length === 0) {
      return res.status(404).json({ msg: `No User with this ID : ${UserID}` });
    } else {
      res.status(200).json({ updatedUser });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
