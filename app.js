require('dotenv').config();
const express = require('express')
const app = express()
const Posts = require('./database/schemas/Post')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const posts = await Posts.find({}).sort('-createdAt')
    const pageProps = {
        title: "Home | Latest Study Material",
        data: posts
    }
    res.render('index.ejs', pageProps)
})

app.get('/notes', async (req, res) => {
    const posts = await Posts.find({ type: "Notes" }).sort('-createdAt')
    const pageProps = {
        title: "Notes | Latest Study Material",
        data: posts
    }
    res.render('index.ejs', pageProps)
})

app.get('/sample-paper', async (req, res) => {
    const posts = await Posts.find({ type: "Sample Paper" }).sort('-createdAt')
    const pageProps = {
        title: "Sample Papers | Latest Study Material",
        data: posts
    }
    res.render('index.ejs', pageProps)
})

app.listen(process.env.PORT || 80)