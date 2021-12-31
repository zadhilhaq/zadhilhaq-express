const log = (req, res, next) =>{
    console.log(new Date().toLocaleDateString(), '=>',req.methode, req.originalUrl)
    next()
}

module.exports = log
///