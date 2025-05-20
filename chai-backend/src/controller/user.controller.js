import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //   get user details from frontend
  const { fullname, email, username, password } = req.body;
  console.log("Email : ", email);
});

export { registerUser };
