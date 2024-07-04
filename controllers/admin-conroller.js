const Contact = require("../model/contact-model");
const User = require("../model/user-model");

const getAlluser = async (req, res) => {
  try {
    const user = await User.find({}, { password: 0 });
    console.log("user getted", user);
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log("error from geting user", error);
    next(error);
  }
};

const getAllcontact = async (req, res) => {
  try {
    const contact = await Contact.find({});
    console.log(contact);
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "NO contact Found" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    return res.status(200).json({ message: "User Deleted Successfully." });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id req for deletion",id);
    await Contact.deleteOne({ _id: id });

    return res.status(200).json({ message: "Contact Deleted Successfully." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlluser,
  getAllcontact,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};
