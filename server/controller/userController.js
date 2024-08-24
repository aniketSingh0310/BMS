const userModal = require("../model/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  // const {name,email,password}=req.body;
  try {
    const userExists = await userModal.findOne({ email: req.body?.email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(req.body?.password, salt);
    req.body.password = hashedPassword;
    const user = new userModal(req.body);
    const response = await user.save();
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const userExists = await userModal.findOne({ email: req.body?.email });
    if (!userExists) {
      return res
        .status(200)
        .send({ success: false, message: "User Email doesn't exists" });
    }
    const validatePassword = await bcrypt.compare(
      req.body?.password,
      userExists.password
    );
    if (!validatePassword) {
      return res
        .status(200)
        .send({ success: false, message: "Invalid Password" });
    }
    const token = jwt.sign({ userId: userExists._id, userName:userExists.name }, process.env.SecretKey, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      success: true,
      message: "User loggedIn successfully",
      data: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//Fetching user details
const getCurrentUserInfo= async (req,res)=>{
  try {
    const user= await userModal.findOne({_id: req.body.userId}).select("-password")
    res.send({
      success:true,
      message:"User details fetched successfully",
      data:user
    })
  } catch (error) {
    res.send({
      success:false,
      message:error.message
    })
  }
}

module.exports = { registerUser, loginUser,getCurrentUserInfo };
