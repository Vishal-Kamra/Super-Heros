import dbConnect from "../../../db/dbConnect";
import HeroModel from "../../../models/hero";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const heros = await HeroModel.find({});
        res.status(200).json({
          status: 1,
          hero: heros,
        });
      } catch (error) {
        res.status("400").json({
          status: 0,
        });
      }
      break;
    case "POST":
      try {
        const hero = await HeroModel.create(req.body);
        res.status(200).json({
          status: 1,
          hero,
        });
      } catch (error) {
        res.status("400").json({
          status: 0,
        });
      }
      break;
    default:
      res.status("400").json({
        status: 0,
      });
      break;
  }
};
