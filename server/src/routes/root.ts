import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	if (req.session && req.session.isLogged) {
		res.send(`
<div>
    <div><h1>You are Logged in</h1></div>
    <div><a href="/logout">Logout</a>
    <div><h2>Want to access protected page?</h2></div>
    <div>Access <a href="/protected">Protected</a> page
</div>
        `);
	} else {
		res.send(`
<div>
    <div>You are NOT Logged in </div>
    <div><a href="/login">Login</a>
</div>
        `);
	}
});

export { router };
