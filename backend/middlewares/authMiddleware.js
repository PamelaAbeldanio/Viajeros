function authMiddleware (req, res, next) {
    if (!req.session.usuariologueado) {
        return res.redirect('/login');
    }

    next();
}

module.exports = authMiddleware;