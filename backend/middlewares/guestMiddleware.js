function guestMiddleware (req, res, next) {
    if (req.session.usuariologueado) {
        return res.redirect('/perfil')
    }

    next();
}

module.exports = guestMiddleware;