module.exports = async(req, res, next) => {
    try{
        return next();
    }
    catch(err){
                res.status(500).send({'err': 'Ops! Algo deu errado'});
    }
        
    
}