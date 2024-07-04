const jwt = require("jsonwebtoken");
const User = require("../model/user-model")

const authMiddlewere = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Unauthorized HTTP, Token Is Not Provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("token form auth middlwere", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({email:isVerified.email}).
    
    select({
    password:0,
    })

    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    
    return res.status(401).json({msg:"Unauthorized token"})
  }
};

module.exports = authMiddlewere;
