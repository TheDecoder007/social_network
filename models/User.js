const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "User needs a name!",
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: "User needs an email!",
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friend.reduce(
    (total, friend) => total + friend.username.length + 1,
    0
  );
});

const User = model("User", UserSchema);
module.exports = User;
