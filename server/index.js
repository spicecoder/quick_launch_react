const Express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
var database;
const app = Express();
app.use(cors());
app.use(Express.json());
const PORT = 8000;

app.get("/posts", async (req, res) => {
  const Post = database.collection("post");
  const PAGE_SIZE = 6;
  const page = parseInt(req.query.page || "0");
  const total = await Post.countDocuments({});
  const posts = await Post.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page)
    .toArray();
  res.json({
    totalPages: Math.ceil(total / PAGE_SIZE),
    posts,
  });
});

app.listen(PORT, () => {
  MongoClient.connect(
    "mongodb://localhost:27017/",
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db("QLA");

      console.log(`Server is running on port: ${PORT}`);
    }
  );
});
