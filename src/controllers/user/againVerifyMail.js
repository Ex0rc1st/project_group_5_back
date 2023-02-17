const { dbUsers } = require("../../models/user");
const { HttpError } = require("../../helpers/httpError");
const sendVerifyMail = require("../../helpers/sendVerifyMail");

const againVerifyMail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new HttpError(400, "request body missing required field email");
  }

  const user = await dbUsers.findOne({
    email: email,
  });

  if (!user) {
    throw new HttpError(404, error.message);
  };

  const { verify, verificationToken } = user;
  if (verify) {
    throw new HttpError(400, "Verification has already been passed");
  }

  await sendVerifyMail(email,verificationToken);
  res.json({ message: "Verification email sent" });
};

module.exports = againVerifyMail;