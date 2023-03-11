import mongoose from 'mongoose'

mongoose.connect(`mongodb+srv://OmkarBorker:E0esto93CFkamRzA@cluster0.nhfxh7n.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected")
});