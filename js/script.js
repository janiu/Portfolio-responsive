var numberSlide = Math.floor(Math.random() * 4) + 1;
var timerSlider = 0;
var timerFadeOut = 0;
var hidding = false;
var mainText = "<img src=\"img/profil.png\" align=\"left\" hspace=\"8\" /> "
		+ "I'm junior Java developer and I have more than one year of expierence in programming in that language. It makes me satisfied and I am doing everything in my power to explore Java more and more."

function timer() {
	var hour = new Date().getHours();
	if (hour < 10)
		hour = "0" + hour;

	var minute = new Date().getMinutes();
	if (minute < 10)
		minute = "0" + minute;

	var second = new Date().getSeconds();
	if (second < 10)
		second = "0" + second;
	document.getElementById("clock").innerHTML = hour + ":" + minute + ":"
			+ second;
	setTimeout("timer()", 1000);
}

function setSlide(number, folder) {
	console.log(folder);
	if (hidding == false) {
		hidding = true;
		clearTimeout(timerSlider);
		clearTimeout(timerFadeOut);
		jQuery(image).fadeOut(500);
		numberSlide = number - 1;
		timerSlider = setTimeout(function() {
			slider(folder)
		}, 500);
	}
}

function slider(folder) {
	hidding = false;
	numberSlide++;
	if (numberSlide == 5)
		numberSlide = 1;
	
	var file="<img src=\"img/" +folder +"/"
		+ numberSlide
		+ ".png\" "
		+ " class=\"img-responsive col-lg-8 col-lg-offset-2 col-lg-offset-2 text-center\" />";
	
	document.getElementById("image").innerHTML = file;
	jQuery(image).fadeIn(500)
	/* timerSlider = setTimeout("slider("+folder+")", 4000); */
	/* setTimeout(slider(),4000,folder); */
	timerSlider = setTimeout(function() {
		slider(folder)
	}, 4000);

	timerFadeOut = setTimeout("hideSilde()", 3500);
	timerfalseHidding = setTimeout("hidding=false", 4500);
}

function hideSilde() {
	hidding = true;
	jQuery(image).fadeOut(500);
}

function getCareer() {
	mainText = "<font size=\"4\"> "
			+ "10.2013 - obecnie <br/>Akademia Górniczo-Hutnicza <br/> "
			+ "Wydział Inzynierii Metali i Informatyki Przemysłowej <br/> "
			+ "Informatyka Stosowana <br/><br/>	"
			+ "09.2015 - obecnie  <br/> Junior Java Developer - Comarch S.A. "
			+ "</font>";
	document.getElementById("main").innerHTML = mainText;
}

function getAboutMe() {
	mainText = "I'm junior Java developer and I have more than one year of expierence in programming in that language. It makes me satisfied and I am doing everything in my power to explore Java more and more."
	document.getElementById("main").innerHTML = mainText;
}

function getProjects() {
	mainText = "<div class=\"project1\"> "
			+ "<a href=\"LineFollower.html\" class=\"projectslink\" > "
			+ "Line Follower Robot - Arduino" + "</a></div><br/>	"
			+ "<div class=\"project2\"> "
			+ "<a href=\"webStore.html\" class=\"projectslink\" >"
			+ "Webstore - Spring + Hibernate  " + "</a> 	</div><br/>"
			+ "<div class=\"project3\"> 	"
			+ "<a href=\"drivingSchool.html\" class=\"projectslink\" >		"
			+ "Driving School - Swing + Hibernate  " + "</a> </div><br/>"
			+ "<div class=\"project4\">  "
			+ "<a href=\"SmartHome.html\" class=\"projectslink\" > "
			+ "GUI for control Smart home - Swing " + "</a> </div><br/> "
	document.getElementById("main").innerHTML = mainText;
}

function getSkills() {
	mainText = "- Java<br/>" + "- SQL<br/>" + "- Spring Framework<br/>"
			+ "- Enterprise JavaBeans<br/>" + "- Hibernate<br/>- Git<br/>"
			+ "- Servers: Tomcat & Weblogic<br/> ";
	document.getElementById("main").innerHTML = mainText;
}

function getContact() {
	mainText = "<br/> My e-mail address:<br/>  "
			+ "rafal.jankowski.93@gmail.com<br/><br/>"
			+ "My phone number:<br/> " + "730 - 557 - 912";
	document.getElementById("main").innerHTML = mainText;
}

function load() {
	document.getElementById("main").innerHTML = mainText;
}