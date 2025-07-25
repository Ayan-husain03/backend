import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // * one who is subscribing the subscribers
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // * one to whom is subscirber is subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
