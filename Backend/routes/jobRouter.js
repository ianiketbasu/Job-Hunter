import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobControllers.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/myjobs", isAuthorized, getMyJobs);
router.get("/:id", isAuthorized, getSingleJob);
router.put("/updatejob/:id", isAuthorized, updateJob);
router.delete("/deletejob/:id", isAuthorized, deleteJob);

export default router;
