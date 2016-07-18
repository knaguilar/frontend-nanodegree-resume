/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // Bio object

var bio = {
 	"name": "Karla N. Aguilar",
 	"role": "Front-End Web Developer",
 	"contacts": {
 		"mobile": "777-777-3333",
 		"email": "kn.aguilar7@gmail.com",
 		"github": "knaguilar",
 		"twitter": "@knaguilar7",
 		"location": "Storrs, CT"
 	},
 	"welcomeMessage": "Hello and Welcome!",
 	"skills": [
 		"Awesome", "Bilingual", "Code Ninja", "HTML", "CSS", "JavaScript", "Bootstrap", "Photographer"
 		],
 	"biopic": "images/profile_1.jpg"
};

//work object

var work = {
	"jobs": [
	{
		"employer": "Mansfield Board of Education",
		"title": "Substitute Teacher / Paraeducator",
		"location": "Mansfield, CT",
		"dates": "March 2016 - Present",
		"description": "Led classes of 15-20 students following routine activities and performing classroom management"

	},
	{
		"employer": "Santa Ana Public Library",
		"title": "Tutor in Tech and Support Services",
		"location": "Santa Ana, CA",
		"dates": "April - August 2015",
		"description": "Taught several 5-week basic computer skills and software courses to both adults and children"
	},
	{
		"employer": "CalPATH",
		"title": "Quality Assurance Student Tester",
		"location": "Berkeley, CA",
		"dates": "February - August 2014",
		"description": "QA Testing for CalPath projects through the use of Selenium, JUnit and Jenkins automated tools. Little supervision for software set-up, testing and installation."
	}
	]
};

//education object

var education = {
	"schools": [
	{
		"name": "UC Berkeley",
		"location": "Berkeley, CA",
		"degree": "B.A.",
		"majors" : ["Computer Science, Ethnic Studies Minor"],
		"dates": 2015,
		"url": "http://www.berkeley.edu/",
	},
	{
		"name": "Autonomous University of Barcelona",
		"location": "Barcelona, Spain",
		"degree": "N/A",
		"majors": ["Study Abroad"],
		"dates": 2014,
		"url": "http://www.uab.cat/"
	}
	],
	"onlineClasses": [
	{
		"title": "Front-End Web Development",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Adobe Education Train the Trainer",
		"school": "Adobe Education Exchange",
		"dates": 2016,
		"url": "https://edex.adobe.com/pd/course/t4t-spring-2016/"
	}
	]
};

//projects object
var projects = {
	"projects": [
	{
		"title": "Stumble Upon Lyfe",
		"dates": "2014",
		"description": "Two college student travelers exploring Europe while studying abroad and on a budget.",
		"images": ["http://placekitten.com/200/300"]
	},
	{
		"title": "Animal Trading Card",
		"dates": "2016",
		"description": "...",
		"images": ["http://placekitten.com/200/300", "http://placekitten.com/200/300"]
	},
	{
		"title": "Online Portfolio",
		"dates": "2016",
		"description": "...",
		"images": ["http://placekitten.com/200/300", "http://placekitten.com/200/300"]
	}
	]
};


bio.display = function() {
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedImage);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var expertise = 0; expertise < bio.skills.length; expertise++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[expertise]);
			$("#skills").append(formattedSkills);
		}
	}
};

bio.display();

//Add work experience
work.display = function() {
	$("#workExperience").append("<hr>");
	for (var job = 0; job < work.jobs.length; job++){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); //[job] is position in jobs array
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

//locationizer:
function locationizer(work_obj) {
    var locationArray = [];
    for(var job = 0; job < work_obj.jobs.length; job++){
        locationArray.push(work_obj.jobs[job].location);
    }
    return locationArray;
}

projects.display = function() {
	$("#projects").append("<hr>");
	for(var proj = 0; proj < projects.projects.length; proj++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[proj].images.length > 0){
			for(var image = 0; image < projects.projects[proj].images.length; image++){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

education.display = function() {
	$("#education").append("<hr>");
	for(var edu = 0; edu < education.schools.length; edu++) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("#", education.schools[edu].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		var formattedNameDegree = formattedName + " " + formattedDegree;
		$(".education-entry:last").prepend(formattedNameDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		$(".education-entry:last").append(formattedDates);

		if (education.schools[edu].majors.length > 0){
			var combinedMajors = "";
			for(var maj = 0; maj < education.schools[edu].majors.length; maj++){
				var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[maj]);
				combinedMajors += formattedMajors + " ";
			}
			$(".education-entry:last").append(combinedMajors); // Combined Majors in a list rather than have Majors: " " repeat each
		}
	}
	//TODO: Online Courses
	if(education.onlineClasses.length > 0){
		$(".education-entry:last").append(HTMLonlineClasses);
		for(var courses = 0; courses < education.onlineClasses.length; courses++){
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[courses].title);

			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[courses].school);
			var formattedTitleSchool = formattedTitle + " " + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);

			var formattedYear = HTMLonlineDates.replace("%data%", education.onlineClasses[courses].dates);
			$(".education-entry:last").append(formattedYear);

			var formattedURL = HTMLonlineURL.replace("%data%", "More information").replace("#", education.onlineClasses[courses].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};

education.display();

//add a map
$("#mapDiv").append(googleMap);

bio.displayFooter = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var phone = "<span class='zocial-call'>";
	var formattedMobileFont = phone + formattedMobile;
	$("#footerContacts").append(formattedMobileFont);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var email = "<span class='zocial-gmail'>";
	var formattedEmailFont = email + formattedEmail;
	$("#footerContacts").append(formattedEmailFont);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var github = "<span class='zocial-github'>";
	var formattedGitHubFont = github + formattedGitHub;
	$("#footerContacts").append(formattedGitHubFont);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var twitter = "<span class='zocial-twitter'>";
	var formattedTwitterFont = twitter + formattedTwitter;
	$("#footerContacts").append(formattedTwitterFont);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var location = "<span class='zocial-pinboard'>";
	var formattedLocationFont = location + formattedLocation;
	$("#footerContacts").append(formattedLocationFont);
};

bio.displayFooter();