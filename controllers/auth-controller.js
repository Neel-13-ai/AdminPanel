const User = require("../model/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send("welecome to the  home page using router....");
  } catch (error) {
    console.error(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    const hash_password = await bcrypt.hash(password, 10);

    if (userExist) {
      return res.status(400).json({
        message: "This email is already used please used diffrent email.. ",
      });
    }

    const createUser = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });
    res.status(200).json({
      msg: "user registered  sucessfully.....",
      token: await createUser.generateToken(),
      userId: createUser._id.toString(),
    });
  } catch (error) {
    // console.error("error during creating user", error);
    // return res.status(500).json({ msg: "error while connecting to database" });
    nex(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "invalid email adress" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).json({
        msg: "log-in sucessfully.....",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({ message: "invalid credentails" });
    }
  } catch (error) {
    console.error("internal sever error", error);
  }
};

// ---------------------------------------------for getting user data-----------------------------------------------------------------//

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});

    //  res.status(200).json({msg:'hi user'})
  } catch (error) {
    console.error("error from geting user data", error);
  }
};

module.exports = { home, register, login,user };
