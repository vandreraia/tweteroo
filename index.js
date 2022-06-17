import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

const tweets = [];

app.post(`/sign-up`, (req, res) => {
    if (req.body.username && req.body.avatar) {
        users.push(req.body);
    } else {
        res.sendStatus(400);
    }
    res.status(201).send("ok");
})

app.post(`/tweets`, (req, res) => {
    let myTweet = {};

    if (req.body.tweet) {

        myTweet = {
            username: req.body.username,
            avatar: users.find(user => user.username === req.body.username).avatar,
            tweet: req.body.tweet
        }
        tweets.push(myTweet);
    } else {
        res.sendStatus(400);
    }
    res.status(201).send("ok");
})

app.get(`/tweets`, (req, res) =>{
    let postTweets = []

    for (let i = 0; i < 10; i++) {
        if (tweets[tweets.length - i]) {
            postTweets.push(tweets[tweets.length - i]);
        }
    }
    
    res.send(postTweets);
})

app.listen(5000);