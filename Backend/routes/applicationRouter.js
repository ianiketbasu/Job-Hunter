import express from "express";
import {
  employerGetAllApplications,
  jobSeekerDeleteApplication,
  jobSeekerGetAllApplications,
  postApplication,
} from "../controllers/applicationControllers.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();
router.get("/employer/getall", isAuthorized, employerGetAllApplications);
router.get("/jobseeker/getall", isAuthorized, jobSeekerGetAllApplications);
router.delete(
  "/deleteapplication/:id",
  isAuthorized,
  jobSeekerDeleteApplication
);
router.post("/jobseeker/post", isAuthorized, postApplication);

export default router;
