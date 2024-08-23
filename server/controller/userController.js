const userModal = require("../model/userModal");
const bcrypt= require('bcrypt')
const registerUser = async (req, res) => {
  // const {name,email,password}=req.body;
  try {

    const userExists = await userModal.findOne({email:req.body?.email})
    if(userExists){
        return res.status(400).json({message:"User already exists"})
        }
    const salt= await bcrypt.genSalt(10);
    
    
    const hashedPassword=await bcrypt.hash(req.body?.password,salt);
    req.body.password=hashedPassword
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

module.exports = {registerUser};
