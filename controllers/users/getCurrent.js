const getCurrent = (req, res, next) => {
  const { name, email, birthyear, phone, telegram, avatar, token } = req.user;
   /** for check */
    // console.log('name', name, 'email', email, 'birthyear',birthyear, 'phone', phone, 'telegram',telegram, 'avatar',avatar, 'token', token);

  res.json({
    status: 'success',
    code: 200,
    user: {
      name,
      email,
      birthyear,
      phone,
      telegram,
      avatar,
    },
    token,
  });
};

module.exports = getCurrent;