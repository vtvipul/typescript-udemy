import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
	if (req.session && req.session.isLogged) {
		next();
		return;
	} else {
		res.status(403).send(`
<div>
    <h1>You are forbidden to access this page without logging in.</h1>
</div>
<div>
    <h2>Here, <a href="/login">Login</a> to access.</h2>
</div>
`);
	}
};

router.get("/", requireAuth, (req: Request, res: Response) => {
	res.send(`
<div>
    <h1>Welcome to PROTECTED page, authenticated user!</h1>
    <div>
        <h2>Wanna, <a href="/logout">Logout</a></h2>
    </div>
</div>
    `);
});

export { router };
