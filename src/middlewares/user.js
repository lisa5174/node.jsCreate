import passport from "./passport";

class UserMiddleware {
  Authenticate = (req, res, next) => {
    passport.authenticate("local", { session: false }, async (error, user) => {
      //passport的驗證方法
      if (error) {
        const { status, message } = error;
        res.status(status).json({ message });
        return; //要return，不然會繼續執行下面的code
      }
      res.status(200).json({ message: "找尋成功" });
      // if(!user){
      //     res.status(400).json({message:"登入失敗"})
      //     return;
      // }
    })(req, res, next);
  };
}
export default new UserMiddleware();
