//Biography object

var bio = {
	"fullName" : "Jessica Holliday",
	"role": "Developer",
	"picURL": "me.jpg",
	"welcomeMsg": "It's true. I can do it all.",
	"skills": ["javascript","HTML","CSS","General quips"],
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
			"name": "Reed College",
			"location": "Portland,OR",
			"degree": "BA",
			"major": ["English Literature"]
		},
		{
			"name": "Portland State University",
			"location": "Portland,OR",
			"degree": "Masters",
			"major": ["Financial Analysis"]
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "www.udacity.com"
		},
		{
			"title": "Data Scientist Tool Kit",
			"school": "Coursera",
			"dates": "2014",
			"url": "www.coursera.com"
		}
	]
};

//Projects object
var projects = {
	"proj": [
		{
			"projectTitle": "CampThing",
			"dates": "2015-2016",
			"description": "CampThing: helping parents manage summer",
			"images": ["http://gurgle.us/campthing/images/campthing_browser.png"]
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
			"dates": "2003-current",
			"description": "Running a fabulous small business and making the world happier and slightly chubbier."
		},
	]
};


$("#header").append(HTMLheaderName.replace("%data%",bio.fullName));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));

if (bio.contacts) {
	//$("#topContacts").append(HTMLemail.replace("%data%",bio.email));
}
$("#header").append(HTMLbioPic.replace("%data%",bio.picURL));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i=0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	}
}

//WORK EXPERIENCE
for (job in work.jobs) {
//	console.log(HTMLworkDates.replace("%data%",work.jobs[job].dates));
//	console.log(HTMLworkEmployer.replace("%data%",work.jobs[job].employer));
//	console.log(HTMLworkTitle.replace("%data%",work.jobs[job].jobTitle));
//	console.log("</div>");

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));

	var formatted = HTMLworkEmployer.replace("%data%",work.jobs[job].employer)
		+  HTMLworkTitle.replace("%data%",work.jobs[job].jobTitle);

	$(".work-entry:last").append(formatted);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
}


//Projects
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

projects.display();

//Map
$("#mapDiv").append(googleMap);

//$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
//$("#header").append(HTMLemail.replace("%data%",bio.email));
//$("#header").append(HTMLbioPic.replace("%data%",bio.picURL));
//$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));


//$("#header").append(HTMLskillsStart);

//$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
//$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
//$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));






