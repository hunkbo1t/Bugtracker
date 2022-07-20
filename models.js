const mongoose = require("mongoose");
const { Schema } = mongoose;
// IssueSchema
const IssueSchema = new Schema({
    issue_id: { type: String, require: true },
    project_name: String,
    issue_text: { type: String, require: true },
    created_on: Date,
    updated_on: Date,
    resolved_on: Date,
    reopen: Date,
    created_by: { type: String, require: true },
    assigned_to: String,
    status_by_tester: { type: Boolean, require: true },
    status_by_dev: String,
    priority: String,
    description: { type: String, require: true },
    attachment: {
        name: String,
        data: Buffer,
        contentType: String
    }
});
const Issue = mongoose.model("IssueSchema", IssueSchema);

// ProjectSchema
const ProjectSchema = new Schema({
    project_name: { type: String, required: true },
    project_owner: String,
    project_status: { type: String, required: true },
    start_date: Date,
    end_date: Date,
    team_members: { type: String, required: true },
    total_issues: [IssueSchema]
});
const Project = mongoose.model("Project", ProjectSchema);

// UserSchema
const UserSchema = new Schema({
    username: { type: String, require: true },
    role: { type: String, require: true },
    mail: String,
});
const User = mongoose.model("User", UserSchema);

// Schema Exports
exports.Issue = Issue;
exports.Project = Project;
exports.User = User;