import dbConnect from "../../../db/dbConnect";
import HeroModel from "../../../models/hero";

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  switch (method) {
    case "GET":
      try {
        const hero = await HeroModel.findById(id);
        if (!hero) {
          res.status("400").json({
            status: 0,
          });
          return
        }
        res.status(200).json({
          status: 1,
          hero: hero,
        });
      } catch (error) {
        res.status("400").json({
          status: 0,
        });
      }
      break;
    case "PUT":
      try {
        const hero = await HeroModel.findByIdAndUpdate(id, req.body, {new: true});
        if (!hero) {
          res.status("400").json({
            status: 0,
          });
          return
        }
        res.status(200).json({
          status: 1,
          hero
        });
      } catch (error) {
        res.status("400").json({
          status: 0,
        });
      }
      break;
    case "DELETE":
      try {
        const hero = await HeroModel.deleteOne({ _id: id });
        if (!hero) {
          res.status("400").json({
            status: 0,
          });
          return
        }
        res.status(200).json({
          status: 1,
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
