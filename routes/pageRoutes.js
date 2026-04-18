const express = require("express");
const router = express.Router();
const controller = require("../controllers/pageController");

router.get("/page/:pageId", controller.getPageInfo);
router.get("/page/:pageId/posts", controller.getPosts);
router.post("/page/:pageId/posts", controller.createPost);
router.delete("/page/post/:postId", controller.deletePost);
router.get("/page/post/:postId/comments", controller.getComments);
router.get("/page/post/:postId/likes", controller.getLikes);
router.get("/page/:pageId/insights", controller.getInsights);

module.exports = router;
