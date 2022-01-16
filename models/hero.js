import Mongoose from "mongoose";

const HeroSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name to your hero."],
    unique: true,
  },
  realName: {
    type: String,
    required: [true, "Real name is real identity please provide real name."],
  },
});

const HeroModel = Mongoose.models.Hero || Mongoose.model("Hero", HeroSchema)

export default HeroModel