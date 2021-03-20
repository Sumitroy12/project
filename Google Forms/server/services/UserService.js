const Users = require('../models/userModel')
const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = "aanasadnjkdjsk";

module.exports = {
  loginGet: async (req, res) => {
    try {
      var result = await Users.find().lean();
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  },

  login: async (req, res) => {
    console.log(req.body.email);
    try {
      var result = await Users.findOne({ email: req.body.email }).lean();
      // console.log(result);

      if (!result) {
        var gData = {
          name: req.body.name,
          email: req.body.email,
          image: req.body.image,
        };
        console.log(gData);

        var newUser = new Users(gData);
        newUser.save().then((docs) => {
          var user = {
            id: docs._id,
            name: docs.name,
            email: docs.email,
            image: docs.image,
          };
          console.log(user);

          const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET, {
            expiresIn: "24h",
          });
          // console.log(accessToken);

          res.status(200).json({
            accessToken,
          });
        });
      } else {
        var user = {
          id: result._id,
          name: result.name,
          email: result.email,
          image: result.image,
        };
        // console.log(user);

        const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET, {
          expiresIn: "24h",
        });
        // console.log(accessToken);
        res.status(200).json({
          accessToken,
        });
      }
    } catch (error) {
      res.send(error);
    }
  },
};
