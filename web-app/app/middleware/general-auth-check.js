module.exports = (req, res, next = () => {}) => {
	if (req.isAuthenticated()) {
		next(); // all is well
	} else {
		res.redirect("/login");
	}
};
