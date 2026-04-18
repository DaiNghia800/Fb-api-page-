const service = require("../services/facebookService");

exports.getPageInfo = async (req, res) => {
  try {
    const data = await service.getPageInfo(req.params.pageId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const data = await service.getPosts(req.params.pageId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const data = await service.createPost(req.params.pageId, req.body.message);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const data = await service.deletePost(req.params.postId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const data = await service.getComments(req.params.postId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getLikes = async (req, res) => {
  try {
    const data = await service.getLikes(req.params.postId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getInsights = async (req, res) => {
  try {
    const data = await service.getInsights(req.params.pageId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
