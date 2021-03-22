import models from "../models/index";

const { users } = models;

class UserController {
  getUser = async (req, res) => {
    const { email } = req.query;
    const user = await users.findOne({
      where: {
        email,
      },
    });
    // const name = "lisa";
    // const token = `Hi ${name}`;
    res.status(200).json({ user });
  };

  postUser = async (req, res) => {
    const { body } = req;
    const { email, password } = body;
    const user = await users.create({
      email,
      password,
    });
    res.status(200).json({ user });
    // const { name, phone } = body;
    // const profile = {
    //   name,
    //   phone,
    // };
    //res.status(200).json({ profile });
  };
}

export default new UserController();
