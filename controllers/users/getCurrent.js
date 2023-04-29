const getCurrent = (req, res, next) => {
const { userName, email, birthday, token, phone, telegram, avatar } = req.user;


  res.json({
    status: 'success',
    code: 200,
    user: {
      userName,
      birthday,
      email,
      phone,
      telegram,
      avatar,
    },
    token,
  });
};

module.exports = getCurrent;