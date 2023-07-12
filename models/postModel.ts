import mongoose, { Mongoose, model, models } from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  comments: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
  author: {
    id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    slug: {
      type: String,
    },

    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = models.Post || model("Post", postSchema);
export default Post;
