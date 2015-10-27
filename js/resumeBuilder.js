//OBJECTS
// ++++++++++++++++++++++++++++++++++++++++++++++++++
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++


//Biography object

var bio = {
	"fullName" : "Jessica Holliday",
	"role": "Developer",
	"picURL": "images/me.jpg",
	"welcomeMsg": "It's true. I can do it all.",
	"skills": ["HTML","CSS","Straight-up, vanilla javascript","jQuery and other fancy js","SQL and Relational Databases", "Basic+ Understanding of Select Modern Frameworks - Ruby on Rails, Node","R (statistical programming language)"],
	"contacts": {
		"email": "hazenbrassy@gmail.com",
		"twitter": "@hazenbrassy",
		"github": "github.com/hazenbrassy",
		"location": "401 NE 65th Ave, Portland, OR 97213"
	}
};

//Education object
var education = {
	"schools": [
		{
			"schoolName": "Reed College",
			"location": "Portland,OR",
			"degree": "BA",
			"dates": "",
			"major": ["English Literature"]
		},
		{
			"schoolName": "Portland State University",
			"location": "Portland,OR",
			"degree": "Masters",
			"dates": "",
			"major": ["Financial Analysis"]
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015 ",
			"url": "www.udacity.com"
		},
		{
			"title": "Data Scientist Tool Kit",
			"school": "Coursera",
			"dates": "2014 ",
			"url": "www.coursera.com"
		}
	]
};

//Projects object
var projects = {
	"proj": [
		{
			"projectTitle": "<a href=\"http://gurgle.us/campthing/campthing.html\">CampThing",
			"dates": "2015-2016",
			"description": "CampThing: helping parents manage summer",
			"images": ["images/campthing_browser.png"]
		}
	]
};

//Work object
var work = {
	"jobs": [
		{
			"employer": "Nonprofit Technology Network",
			"jobTitle": "Operations Director",
			"location": "Portland, OR",
			"dates": "12/2012-current",
			"description": "Keeping the wheels on the car while pushing down on the gas at an awesome non-profit."
		},
		{
			"employer": "Klatu Networks",
			"jobTitle": "Business Manager",
			"location": "Canby ,OR",
			"dates": "2/2013-1/2014",
			"description": "Learning the ropes in a start-up environment."
		},
		{
			"employer": "Staccato Gelato",
			"jobTitle": "Owner",
			"location": "Portland, OR",
			"dates": "2003-2012",
			"description": "Running a fabulous small business and making the world happier and slightly chubbier."
		},
	]
};


//FUNCTIONS
// ++++++++++++++++++++++++++++++++++++++++++++++++++
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++


//WORK Display function
work.display = function() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));

		var formatted = HTMLworkEmployer.replace("%data%",work.jobs[job].employer)
			+  HTMLworkTitle.replace("%data%",work.jobs[job].jobTitle);

		$(".work-entry:last").append(formatted);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
	}
}

//Projects Display function
projects.display = function() {
	for (var x = 0; x < projects.proj.length; x++) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.proj[x].projectTitle));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.proj[x].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.proj[x].description));
		for (var y = 0; y < projects.proj[x].images.length; y++) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.proj[x].images));
		}
	}
}

//Education Display function
education.display = function () {
	$("#education").append(HTMLschoolStart);

	for (var x = 0; x < education.schools.length; x++) {
		$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[x].schoolName));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[x].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[x].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[x].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[x].major));
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (var x = 0; x < education.onlineCourses.length; x++) {
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title));
		$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[x].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[x].url));
	}

}




//Appending/Displaying HTML
// ++++++++++++++++++++++++++++++++++++++++++++++++++
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++


//Name and Role
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.fullName));

//Contacts
if (bio.contacts) {
//	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
}


$("#header").append(HTMLbioPic.replace("%data%",bio.picURL));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));




if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
//	console.log(HTMLskillsStart);

	for (var i=0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
//		console.log(HTMLskills);
	}
}

work.display();
projects.display();
education.display();



//Map
$("#mapDiv").append(googleMap);



//$("#header").append(HTMLskillsStart);

$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));






