require('dotenv').config()
const multer = require("multer");
const path = require('path');
const firebsae = require("firebase/app");
var randomstring = require("randomstring");
const { getStorage, ref, uploadBytes,getDownloadURL } = require("firebase/storage");
const {API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,MESSAGING_SENDER_ID,APP_ID} = process.env,
firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  };
module.exports={
    upload:async(req,res,next)=>{
    
        try {
            console.log(req.auth,"<<<<<");           
            console.log(firebaseConfig);
              
        firebsae.initializeApp(firebaseConfig);
    
        const storage = getStorage();
      
            const storageRef = ref(storage, `ok/${randomstring.generate(10)}-${req.file.originalname}`);
            var snapshot = await uploadBytes(storageRef, req.file.buffer)
            // console.log("file uplaoded",snapshot.ref.getDownloadURL());
            console.log(snapshot.ref);
           var url =await getDownloadURL(snapshot.ref) 
            console.log(url);
            // const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${snapshot.ref._location.bucket}/o/${snapshot.ref._location.path_}?alt=media`;
              

            // console.log(publicUrl);
        
 
       
        } catch (error) {
                console.log(error);
        }     
    }
}


// https://firebasestorage.googleapis.com/v0/b/tesupload-3a767.appspot.com/o/ok/TsJiiKpakg-500 (1).jpg?alt=media