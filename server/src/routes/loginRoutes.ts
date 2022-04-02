import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
	body: { [_: string]: string };
}
const router = Router();

router
	.route("/login")
	.get((req: Request, res: Response) => {
		res.send(`
<form action="" method="POST">
	<div>
		<label for="email">Email</label>
		<input type="email" name="email" />
	</div>
	<div>
		<label for="password">Password</label>
		<input type="password" name="password" />
	</div>
	<div>
		<input type="submit" value="submit" />
	</div>
</form>
    `);
	})
	.post((req: RequestWithBody, res: Response) => {
		const { email, password } = req.body;
		const correctEmail = "test@test.com";
		const correctPassword = "test";
		if (email && password) {
			if (email === correctEmail && password === correctPassword) {
				req.session = { isLogged: true };
				res.redirect("/");
			} else {
				res.send(`
<div><h1>Wrong email or password</h1></div>
<div><a href="/login">Login</a></div>
`);
			}
		} else {
			res.status(400).json({ msg: "Bad Request" });
		}
	});

router.get("/logout", (req: Request, res: Response) => {
	if (req.session) {
		req.session.isLogged = undefined;
		res.redirect("/");
	} else {
		res
			.status(400)
			.json({ error: "You need to login first before you logout" });
	}
});

export { router };
