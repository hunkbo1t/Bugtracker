const mongoose = require("mongoose");
const { Schema } = mongoose;
// Schema
const IssueSchema = new Schema({
    issue_id: { type:String, require:true},
    project_name:String,
    issue_text: { type:String, require:true},
    created_on:Date,
    updated_on:Date,
    resolved_on:Date,
    reopen:Date,
    created_by: { type:String, require:true},
    assigned_to:String,
    status_by_tester: { type:Boolean, require:true},
    status_by_dev:String,
    priority:String,
    description: { type:String, require:true},
    attachment: {
        name:String,
        data: Buffer,
        contentType: String
    }
});
const Issue = mongoose.model("IssueSchema",IssueSchema);

const ProjectSchema = new Schema({
    name: { type:String, required:true},
    issues: [IssueSchema]
});
const Project = mongoose.model("Project",ProjectSchema);

const UserSchema = new Schema({
    name: { type:String, require:true},
    role: { type:String, require:true},
    mail:String,
});
const User = mongoose.model("User",UserSchema);
// Schema Exports
exports.Issue = Issue;
exports.Project = Project;
exports.User = User;