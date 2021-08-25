// Call mongoose
const mogoose = require('mongoose')

// config to connect database
mogoose.connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})