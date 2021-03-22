import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import http from "http";
import indexRouter from "./router/index";
//javascript看不懂import,export,要用babel轉換成es5
//程式碼都放在src
//--s-dev只有在本地,不會跟著專案跑

require("dotenv").config(); //引入.env

const app = express();

//規則,引入
app.use(express.json()); //接收json格式
app.use(express.urlencoded({ extends: false })); //防止網址有.等特殊字元//extends v.s. extends
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "../view"))); //讀檔,沒讀到會跑到靜態頁面
app.use(morgan("dev")); //有很多可以用,這裡用dev
app.use(cors()); //誰可以接後端，誰是白名單

app.use(
  session({
    //設定密碼等相關資料,放在.env,不用加單雙引號
    secret: process.env.APP_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
//要有上面那一個app.use(session)，才能用passport
app.use(passport.initialize()); //初始化
app.use(passport.session()); //session改用passport

app.use("/api", indexRouter); //讓網址有前綴,不用每次都打
//前端就可以知道

const server = http.createServer(app); //啟動server服務
//把這邊建立的server套用到我們的server上面??
//...->express->app->seerver
server.listen(3000); //設定port

//server啟動
server.on("listening", () => {
  const addr = server.address();
  console.log(`This is server on ${addr.port}`); //console顯示啟用port號
});
