module.exports=(req,res,next)=>{
    try {
        
    
        req.auth="okok"
        next()
        
    } catch (error) {
        next(error);
    }
}