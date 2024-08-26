function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if (!token || token !== 'YOUR_AUTH_TOKEN') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

module.exports = {
    authenticate
};

