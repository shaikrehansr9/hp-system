import mongoose, { Schema, Document } from "mongoose";

export interface ITeacher extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: String;
  cohorts: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const teacherSchema = new Schema<ITeacher>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }, 
    role: { type: String, default: "teacher" },
    cohorts: [{ type: Schema.Types.ObjectId, ref: "Cohort" }], 
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

export default mongoose.model<ITeacher>("Teacher", teacherSchema);
