import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

const tweets = [];

app.post(`/sign-up`, (req, res) => {
    users.push(req.body);
    res.send("ok")
})

app.post(`/tweets`, (req, res) => {
    // console.log(tweets)
    tweets.push(req.body);
    res.send("ok")
})

app.get(`/tweets`, (req, res) =>{
    let postTweets = []

    for (let i = 0; i < 10; i++) {
        if (tweets[tweets.length - i]) {
            postTweets = tweets[tweets.length - i];
        }
    }
    console.log(postTweets)
    res.send(postTweets);
})

app.listen(5000);