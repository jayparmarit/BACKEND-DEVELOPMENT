import dotenv from "dotenv";

dotenv.config({ path: "./.env" });



import passport from "passport"
import GoogleStrategy  from "passport-google-oauth20"


const GoogleAuthStrategy  = GoogleStrategy .Strategy

passport.use(
   new GoogleAuthStrategy({
     clientID: process.env.CLIENTID,
    clientSecret:process.env.CLIENTSECRET,
    callbackURL: "http://localhost:5000/auth/google/redirect"
},
    async (accessToken, refreshToken, profile, cb)=>{
        cb(null,profile)
        console.log("profile",profile)
    },

))

export default passport;