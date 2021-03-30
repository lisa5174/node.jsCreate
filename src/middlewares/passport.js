import passport, { Passport } from "passport";
import LocalStrategy from "passport-local";
import UserService from "../services/user";

passport.use(
  new LocalStrategy( //命名，預設'local'
    {
      //改用email的欄位資訊做帳號驗證
      usernameField: "email",
    },
    async (email, password, cb) => {
      const user = await UserService.getUser(email);
      if (!user) {
        return cb({ status: 400, message: "沒有該用戶" }, false);
      }
      return cb(null, user);
    }
  )
);
export default passport;
