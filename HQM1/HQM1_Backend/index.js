import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {createServer} from 'http'
import teamroute from './route/teamroute.js'
import contactroute from './route/contactroute.js'

dotenv.config();

const app = express();
const server = createServer(app);

const  PORT = process.env.PORT||5000;



//middleware
app.use(cors());
app.use(express.json());



app.use('/api/team',teamroute)
app.use('/api/contact-us',contactroute);

//home route
app.get('/',(req,res)=>{
    res.send("This is the home page");
})




server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})