function adminMiddleware (req, res, next) {
    if(req.session.usuariologueado) {
    
        if(req.session.usuariologueado.user_category_id !== 2) {
            res.redirect('/')
        }
    
    }
    

    next();
}

module.exports = adminMiddleware;