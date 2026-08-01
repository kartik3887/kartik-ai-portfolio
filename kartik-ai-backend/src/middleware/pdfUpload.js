import multer from "multer";
import fs from "fs";


const uploadPath = "uploads/resume";


if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath,{
        recursive:true
    });
}



const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(null,uploadPath);

    },


    filename:(req,file,cb)=>{

        cb(
            null,
            Date.now()+"-"+file.originalname
        );

    }

});



const fileFilter=(req,file,cb)=>{

    if(file.mimetype==="application/pdf"){

        cb(null,true);

    }
    else{

        cb(new Error("Only PDF files allowed"),false);

    }

};



const uploadResume = multer({

    storage,

    fileFilter,

    limits:{
        fileSize:5*1024*1024
    }

});


export default uploadResume;