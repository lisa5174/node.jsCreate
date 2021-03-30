import models from "../models/index";
//從controller抽過來service做

const { users } = models;

class UserService {
  getUser = async (email) => {
    const user = await users.findOne({
      //http://127.0.0.1:3000/api/user?email=lisa571722@gmail.com
      where: {
        email,
      },
    });
    return user;
  };
}

export default new UserService();
