var bio={
	name: "Sen Yang",
	role: "Software Engineer",
	email: "sensenseyang@gmail.com",
	mobile: "(310)-272-6950",
	github: "https://github.com/SenseYang",
	loc: "500 Landfair Ave, Los Angeles, CA 90024",
	img_url: "images/portrait.jpg",
	welcomeMSG: "Welcome to my webpage!",
	skills: ["C++", "Java", "PHP", "MySQL", "HTML", "JavaScript", "C", "Matlab", "Linux"]
	
}

var work={
	"work": [
		{
			"start": "2013",
			"employer": "UCLA",
			"title": "Research Assistant",
			"date": "Sept. 2013 - now",
			"loc": "Los Angeles",
			"des": "Work as a research assistant in Prof. Xiangfeng Duan's group."
		}
	]
}

function displayWork(){
	for(w in work.work){
		$("#workExperience").append(HTMLworkStart);	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.work[w].employer);
		formattedEmployer = formattedEmployer.replace("#", 'http://xduan.chem.ucla.edu/');
		var formattedTitle = HTMLworkTitle.replace("%data%", work.work[w].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.work[w].date);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.work[w].loc);
		var formattedDes = HTMLworkDescription.replace("%data%", work.work[w].des);
		$(".work-entry").append(formattedEmployer + formattedTitle);
		$(".work-entry").append(formattedDate);
		$(".work-entry").append(formattedLocation);
		$(".work-entry").append(formattedDes);
	}
}

var education = {
	"schools": [
		{
			"name": "University of California, Los Angeles",
			"degree": "Master of Science",
			"major": "Materials Engineering",
			"gradyear": 2015
		},
		{
			"name": "Zhejiang University",
			"degree": "Bachelor of Engineering",
			"major": "Information Engineering",
			"gradyear": 2013
		}
	],
	"online_class":[
		{
			"title": "Introduction to HTML and CSS",
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "JavaScript Basics",
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
}

var project = {
	"projects": [
		{
			"title": "Game MiniRogue",
			"date": "May 2015",
			"keyword":["C++", "Java", "OOP"],
			//"description":"It is a game of dungeon adventure in randomly generated 2D maps. Multiple classes were designed and implemented using OOP, including 4 categories of monsters, 4 categories of weapons and 5 categories of scrolls, etc. It also realized smart monster behavior that calls for more strategy to win the game.",
			"des": ["Implemented a game of dungeon adventure in randomly generated 2D maps", "Designed and implemented multiple classes using OOP: 4 categories of monsters, 4 categories of weapons, 5 categories of scrolls, etc", "Realized smart monster behavior using inheritance and BFS algorithm"],
			"images":[
			]
		},
		{
			"title": "Movie Database",
			"date": "June 2015",
			"keyword": ["PHP", "MySQL", "HTML"],
			//"description": "This project realized inter-linked webpages for Movie Database using PHP and HTML. It used CSS framework Bootstrap to implement webpage styles and responsive layouts. MySQL is used to set up the relational model.",
			"des": ["Designed and realized webpages for Movie Database using PHP and HTML", "Used CSS framework Bootstrap to implement webpage styles and responsive layouts", "Used MySQL to set up the relational model for the Movie Database and realized functionalities including: (1) Adding information: adding movies, actors, directors and user comments. Data integrity is taken into consideration. (2) Retrieve information: search keywords in database and return all matched actor, director and movie information in database."],
			"images":[
			]
		},
		{
			"title": "MiniMatlab",
			"date": "June 2013",
			"keyword": ["Abstract Syntax Tree", "C"],
			//"description": "It is a command-line matrix calculator which supported most Matlab matrix operations. It used hierarchial Abstract Syntax Tree data structure to handle and evaluate input expression.",
			"des": ["Realized a command-line matrix calculator which supported Matlab matrix operations including: (1) matrix initialization. (2) Arithmetic, power and determinant calculations. (3) Vector calculations, including dot product, scalar product and inner angle. (4) Retrieve matrix by matrix name. (5) Matrix related math functions.", "Designed hierarchial AST data structure to handle expression evaluation; implemented ASTNode and finished AST construction and evaluation algorithm."],
			"images":[
			]
		}
	]
}

project.display = function(){
	var proj = 0;
	for(; proj < project.projects.length; proj++){
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[proj].date);
		var keywords = project.projects[proj].keyword[0];
		for(var k = 1; k < project.projects[proj].keyword.length; k++){
			keywords = keywords + ", " + project.projects[proj].keyword[k];
		}
		var formattedKeyword = HTMLprojectKeyword.replace("%data%", keywords);
		//var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedKeyword);
		//$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(HTMLprojectDescriptionStart);
		for(var i = 0; i < project.projects[proj].des.length; i++){
			var formattedDes = HTMLprojectDescriptionLine.replace("%data%", project.projects[proj].des[i]);
			$(".project-des:last").append(formattedDes);
		}
	}
}


// print name and role and welcome information
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", "Welcome to my resume!");
var formattedImage = HTMLbioPic.replace("%data%", bio.img_url);
//$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// print image and contact information
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGit = HTMLgithub.replace(/%data%/g, bio.github);
var formattedTwit = HTMLtwitter.replace("%data%", "@SenYang");
var formattedAddr = HTMLlocation.replace("%data%", bio.loc);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGit);
$("#topContacts").append(formattedTwit);
$("#topContacts").append(formattedAddr);
$("#header").append(formattedImage);
$("#header").append(formattedWelcome);
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var counter = 0;
	var formattedSkill;
	while(counter < bio.skills.length){
		formattedSkill = HTMLskills.replace("%data%", bio.skills[counter]);
		$("#skills").append(formattedSkill);
		counter++;
	}
}
displayWork();
project.display();
//$("#main").append(internationalizeButton);