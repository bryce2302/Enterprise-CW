const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",

mongoUri: "mongodb+srv://bryce_2302:Password12@cluster0.9ocoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 

}

export default config
