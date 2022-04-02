import express, { Application, Request, Response } from "express";
import { router as loginRouter } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router as rootRouter } from "./routes/root";
import { router as protectedRouter } from "./routes/protected";
import "./controllers/loginController";
import { AppRouter } from "./AppRouter";

const app: Application = express();

// for parsing content of forms
app.use(bodyParser.urlencoded({ extended: true }));

// for using cookie-session to add req.session in request
app.use(cookieSession({ keys: ["some-string-value"] }));

// connecting different Routes with express application
app.use("/", loginRouter);
app.use("/", rootRouter);
app.use("/protected", protectedRouter);
app.use("/", AppRouter.getInstance());

// starting server
app.listen(3000, () => {
	console.log("App listening on :3000");
});
