import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a job title!!"],
    minLength: [3, "Job title must contain at least 3 characters!!"],
    maxLength: [50, "Job title can't exceed 50 characters!!"],
  },
  description: {
    type: String,
    required: [true, "Please provide a job description!!"],
    minLength: [3, "Job description must contain at least 30 characters!!"],
    maxLength: [500, "Job description can't exceed 500 characters!!"],
  },
  category: {
    type: String,
    required: [true, "Please provide job category!!"],
  },
  country: {
    type: String,
    required: [true, "Job country is required!!"],
  },
  city: {
    type: String,
    required: [true, "Job city is required!!"],
  },
  location: {
    type: String,
    required: [true, "Job location is required!!"],
    minLength: [3, "Job location must contain at least 30 characters!!"],
    maxLength: [50, "Job title can't exceed 500 characters!!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed salary must contain at least 4 digits!!"],
    maxLength: [9, "Salary can't exceed 9 digits!!"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary from must contain at least 4 digits!!"],
    maxLength: [9, "Salary from can't exceed 9 digits!!"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary to must contain at least 4 digits!!"],
    maxLength: [9, "Salary to can't exceed 9 digits!!"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
