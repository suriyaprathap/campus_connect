import mongoose from "mongoose";
const { Schema } = mongoose;
const attendenceSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: "subject",
  },
  totalLecturesByFaculty: {
    type: Number,
    default: 0,
  },
  lectureAttended: {
    type: Number,
    default: 0,
  },
  date: { type: Date, required: true, default: Date.now },
});

export default mongoose.model("attendance", attendenceSchema);
