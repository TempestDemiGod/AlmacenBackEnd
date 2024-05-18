import app from "./app/app";
import { PORT } from "./config/config";
import { connectDB } from "./dbConnect/connect";

connectDB()

app.listen(PORT, ()=> console.log(`app running in the PORT ${PORT}`))

