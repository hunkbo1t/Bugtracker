const mongoose = require("mongoose");
const { Schema } = mongoose;

const IssueSchema = new Schema({
    issue_id: { type:String, require:true},
    issue_text: { type:String, require:true},
    created_on:Date,
    updated_on:Date,
    created_by: { type:String, require:true},
    assigned_to:String,
    status_by_tester: { type:Boolean, require:true},
    status_by_dev:String,
    priority:String,
    project_name:String,
});
const Issue = mongoose.model("IssueSchema", IssueSchema);

const ProjectSchema = new Schema({
    name: { type:String, required:true},
    issues: [IssueSchema]
});
const Project = mongoose.model("Project",ProjectSchema);

exports.Issue = Issue;
exports.Project = Project;