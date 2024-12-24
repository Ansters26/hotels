const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/myDatabase';

mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
}
)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to mongoDb');
});
db.on('error',(err)=>{
    console.log('Connection error',err);
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

module.exports = db