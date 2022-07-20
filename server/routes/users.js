const User = require("../models/User");
const router = require("express").Router();

//LOGIN
router.post('/', async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ userName: req.body.username });
    if (!user) return res.status(400).json("Wrong username or password!");

    //validate password
    var validPassword;
    if (user.password === req.body.password) validPassword = 1
    if (!validPassword) return res.status(400).json("Wrong username or password!");

    //send response
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a user
// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//     const {password, updatedAt, ...other} = user._doc
//     res.status(200).json(other)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

module.exports = router;