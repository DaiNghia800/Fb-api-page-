const express = require("express");
const router = express.Router();
const controller = require("../controllers/pageController");

/**
 * @swagger
 * tags:
 *   name: Page API
 *   description: Facebook Page APIs
 */

/**
 * @swagger
 * /api/page/{pageId}:
 *   get:
 *     summary: Get page info
 *     tags: [Page API]
 *     parameters:
 *       - in: path
 *         name: pageId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/page/:pageId", controller.getPageInfo);

/**
 * @swagger
 * /api/page/{pageId}/posts:
 *   get:
 *     summary: Get posts
 *     tags: [Page API]
 *     parameters:
 *       - in: path
 *         name: pageId
 */
router.get("/page/:pageId/posts", controller.getPosts);

/**
 * @swagger
 * /api/page/{pageId}/posts:
 *   post:
 *     summary: Create post
 *     tags: [Page API]
 *     parameters:
 *       - in: path
 *         name: pageId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post created
 */
router.post("/page/:pageId/posts", controller.createPost);

/**
 * @swagger
 * /api/page/post/{postId}:
 *   delete:
 *     summary: Delete post
 *     tags: [Page API]
 */
router.delete("/page/post/:postId", controller.deletePost);

/**
 * @swagger
 * /api/page/post/{postId}/comments:
 *   get:
 *     summary: Get comments
 *     tags: [Page API]
 */
router.get("/page/post/:postId/comments", controller.getComments);

/**
 * @swagger
 * /api/page/post/{postId}/likes:
 *   get:
 *     summary: Get likes
 *     tags: [Page API]
 */
router.get("/page/post/:postId/likes", controller.getLikes);

/**
 * @swagger
 * /api/page/{pageId}/insights:
 *   get:
 *     summary: Get insights
 *     tags: [Page API]
 */
router.get("/page/:pageId/insights", controller.getInsights);

module.exports = router;