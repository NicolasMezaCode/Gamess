const admin=require('firebase-admin')
admin.initializeApp({
    credential:admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL, 
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
})
const signUp=async(req,res)=>{
    console.log(req.body)
    const userResponse= await admin.auth().createUser({
        email: req.body.email,
        password:req.body.password,
        emailVerified:false,
        disabled:false
    })
    res.send("User created successfully")
}
module.exports={
    signUp,
}