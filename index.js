$("#add-education-btn").on("click", () => {
    var standardName = $("#standard-input").val();
    var yearOfCompletion = $("#year-of-completion-input").val();
    var percentage = $("#percentage-input").val();
    $("#education").append("<h6><b>"+standardName+"</b></h6><h6>"+yearOfCompletion+"</h6><h6>"+percentage+"</h6>");
});
$("#add-internship-btn").on("click", () => {
    var company = $("#internship-company-input").val();
    var title = $("#internship-title-input").val();
    var internshipTime = $("#internship-time-input").val();
    $("#internships").append("<h6><b>"+company+"</b></h6><h6>"+title+"</h6><h6>"+internshipTime+"</h6>");
});
$("#add-training-btn").on("click", () => {
    var course = $("#course-name-input").val();
    var trainingTime = $("#course-time-input").val();
    $("#trainings").append("<h6><b>"+course+"</b></h6><h6>"+trainingTime+"</h6>");
});
$("#add-project-btn").on("click", () => {
    var projectName = $("#project-name-input").val();
    var aboutProject = $("#about-project-input").val();
    $("#projects").append("<h6><b>"+projectName+"</b></h6><p>"+aboutProject+"</p>");
});
$("#add-skill-btn").on("click", () => {
    var skill = $("#skill-name-input").val();
    $("#skills").append("<li>"+skill+"</li>");
});
$("#add-work-sample-btn").on("click", () => {
    var githubLink = $("#github-profile-input").val();
    var otherPortfolio = $("#other-portfolio-input").val();
    $("#work-samples").append("<h6>Github Link</h6><a href='"+githubLink+"'>"+githubLink+"</a><h6>Other Portfolio</h6><a href='"+otherPortfolio+"'>"+otherPortfolio+"</a>");
    $("#add-work-sample").remove();
});
$("#add-additional-detail-btn").on("click", () => {
    var additionalDetail = $("#additional-details-input").val();
    $("#additional-details").append("<li>"+additionalDetail+"</li>");
});