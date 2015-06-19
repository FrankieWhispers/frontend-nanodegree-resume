//creates a bio object with varibles and functions to display on the the web page.
var bio = { 
  "name": "Frank Rini",
  "role": "Web Developer",
  "contacts": {
      "mobile": "661-555-5555",
      "email": "frini2@sbcglobal.net",
      "github": "FrankieWhsipers@github.com",
      "twitter": "@FrankieWhispers",
      "location": "Bakersfield, CA"
  },
  "welcomeMsg" : "Welcome to my resume'.",
  "skills": ["Engineering", "Manager", "Web Developer", "Programmer"],
  "bioPic": "images/fry.jpg",
  displayBio: function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);

    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#header").append(formattedMsg);  

    if(bio.skills.length > 0)
    {
        $("#header").append(HTMLskillsStart);

        for(var i=0; i < bio.skills.length; i++) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#header").append(formattedSkill);
        }
    }
  },
  displayFooterContact: function() {
    if(bio.contacts != null)
    {
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#footerContacts").append(formattedMobile);

      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#footerContacts").append(formattedEmail);

      var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#footerContacts").append(formattedgithub);

      var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      $("#footerContacts").append(formattedtwitter);

      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#footerContacts").append(formattedLocation);
    }
  }
}//bio

//Creates an object for education with varibles for schools and a function to display 
//them on the web page.
var education = {
  "schools": [
      {
       "name": "Tehachapi High School",
       "location": "Tehachapi, CA",
       "degree": "High School Degree",
       "majors": null,
       "dates": "1992",
       "url": "ths.teh.k12.ca.us"
      },
      {
       "name": "Bakersfield College",
       "location": "San Diego, CA",
       "degree": "BS",
       "majors": "CS",
       "dates": "2000",
       "url": "www.bakersfieldcollege.edu"
      }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Crash Course",
      "school": "Udacity",
      "dates": "2014",
      "url": "www.udacity.com/course/ud804"
    }
  ],
  displayEducation: function(){
    for ( school in education.schools) {

      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);

      var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLoc);

      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      if( education.schools[school].majors != null) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
      }
    }

    for( onlineCourse in education.onlineCourses) {

      $(".education-entry:last").append(HTMLonlineClasses);

      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
      $(".education-entry:last").append(formattedTitle);

      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      $(".education-entry:last").append(formattedSchool);

      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedUrl);
    }
  }
}  //education

//Creates an object of work for varibles of jobs and a function to display
//it on the webpage.
var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Engineer",
      "location": "Bakersfield, CA",
      "dates": "April 2000 - future",
      "description": "Spliced copper and fiber cables in multiple environments. Manager of twenty-five personnel with the reponsibility of safety, job assignment, quality control, human resource and project managment. Engineer for residental and commercial services, design of fiber services for businesses, project manage fiber for Bakersfield School district."
    },
    {
      "employer": "TelTec Alarms",
      "title": "Installer",
      "location": "Palmdale, CA",
      "dates": "February 1999 - April 2000",
      "description": "Installed alarms systems for residental and commericial buildings. Programmed and installed access conrtol systems for businesses. Placed inside wire on new and existing buildings"
    }
  ],
  displayWork: function() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace
        ("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace
        ("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);     
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLoc);
      var formattedDesciption = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDesciption);
    }
  }
} //work

//creates a project object with varibles for different projects and function to
//display them on the web page.
var projects = {
  "projects": [
    {
        "title": "Sample Project 1",
        "dates": "November 2014",
        "description": "Udacity Cup website.",
        "images": [
          "images/mockUp.jpg",
          "images/mockUp.jpg"
        ]
    }
  ],
  displayProjects: function(){
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);
        
      if(projects.projects[project].images.length > 0) {
        for(image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
         }
      }
    }
  }
} //projects

//Show X and Y location of where the user clicked in the console.
$(document).click(function(loc) {logClicks(loc.pageX,loc.pageY);})

//Display objetcs to the web page.
bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();
bio.displayFooterContact();

//Google Map me.....
$("#mapDiv").append(googleMap);