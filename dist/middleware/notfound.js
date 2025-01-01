const notfoundMiddleware = (req, res, next) => {
    res.status(404).send(`Route ${req.url} Not Found! `);
};
export default notfoundMiddleware;
