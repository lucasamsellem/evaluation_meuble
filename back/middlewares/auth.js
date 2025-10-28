import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) {
		return res.status(401).json({ error: "Token invalide" });
	}

	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(401).json({ error: "Token invalide" });
		}

		req.user = user;
		next();
	});
};
