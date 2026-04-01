import mongoose, { Schema, Document } from "mongoose";

export interface ICohort extends Document {
    name: String;
    teacher: mongoose.Types.ObjectId;
    students: mongoose.Types.ObjectId[];
    BaseHp: number;
    createdAt: Date;
};

const cohortSchema = new Schema<ICohort>(
    {
        name: {type: String, required: true},
        teacher: {type: Schema.Types.ObjectId, ref: "Teacher", required: true},
        students: [{type: Schema.Types.ObjectId, ref: "Student"}],
        BaseHp: {type: Number, default: 100},
        createdAt: {type: Date, default: Date.now}
    },
    { timestamps: true }
)


export default mongoose.model<ICohort>("Cohort", cohortSchema);