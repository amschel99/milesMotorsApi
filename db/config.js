
import mongoose from 'mongoose'

const connect= (url)=>{


    return mongoose.createConnection(url)
}

export default connect