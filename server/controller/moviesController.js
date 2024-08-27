const movieModal = require("../model/movieModal")

const AddMovie= async(req,res)=>{
try {
    const movie= new movieModal(req.body)
    await movie.save()
    res.status(201).send({
        success:true,
        message:"Movie Added Successfully",
        data:movie
    })
} catch (error) {
    res.send({
        success: false,
        message: error.message
        
    })
}
}

const GetAllMovies= async(req,res)=>{
    try {
        const movies= await movieModal.find()
        res.status(201).send({
            success:true,
            message:"Movies List",
            data:movies
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
            
        })
    }
    }

    const UpdateMovie= async(req,res)=>{
        try {
            await movieModal.findByIdAndUpdate(req.body?._id ,req.body)
            res.status(201).send({
                success:true,
                message:"Movie Updated Successfully",
                })
        } catch (error) {
            res.send({
                success: false,
                message: error.message
                
            })
        }
        }

        const DeleteMovie= async(req,res)=>{
            try {
                await movieModal.findByIdAndDelete(req.body._id)
                
                res.send({
                    success:true,
                    message:"Movie Deleted Successfully",
                    data:movie
                })
            } catch (error) {
                res.send({
                    success: false,
                    message: error.message
                    
                })
            }
            }
module.exports={AddMovie,GetAllMovies,UpdateMovie,DeleteMovie}