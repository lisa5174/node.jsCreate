import _ from "lodash"; //有這行才能_.map
import models from "../models/index";
import UserService from "../services/user";

const { users } = models;

class UserController {
  getUser = async (req, res) => {
    // const { body } = req.params;
    // const user = await UserService.getUser(id);

    // const { email } = req.query; //http://127.0.0.1:3000/api/user?email=lisa571722@gmail.com
    // const user = await users.findOne({
    //   where: {
    //     email,
    //   },
    // });

    // const user = await users.findAll({
    //   attributes: { exclude: ["password"] },
    // });

    // const reponse = _.map(user, (o) => ({
    //   ...o.dataValues,
    //   vip: true,
    // }));

    res.status(200).json({ user }); //user/response
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
