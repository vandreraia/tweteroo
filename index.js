import express from `express`;

const app = express();

const users = [];

const tweets = [];

app.post(`/sign-up`, (req, res) => {
    users.push(req);
    res.send("ok")
})

app.post(`/tweets`, (req, res) => {
    tweets.push(req);
    res.send("ok")
})

app.get(`/tweets`, (req, res) =>{
    const postTweets = []

    for (let i = 0; i < 10; i++) {
        postTweets = tweets[tweets.length - i];
    }
    res.send(postTweets);
})

app.listen(5000);