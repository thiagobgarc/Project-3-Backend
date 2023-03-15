const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.json('/sessions')
    }
}