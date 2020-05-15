
function menu(index) {
    var pages = ['index.html', 'publications.html', 'students.html', 'teaching.html', 'activities.html', 'past_projects.html'];
    var titles = ['Home', 'Publications', 'Students', 'Teaching', 'Activities', 'Past Projects'];

    document.write('            <ul>');

    for (var i=0; i<pages.length; i++) {
        if (index == i) {
            document.write('				<li><a class="current" href="' + pages[i] + '">' + titles[i] + '</a></li>');
        }
        else {
            document.write('				<li><a href="' + pages[i] + '">' + titles[i] + '</a></li>');
        }
    }

    document.write('			</ul>');
}

function footer() {
	document.write('		<p><strong>Mailing Address:</strong> 1515 St. Catherine St. West, Montreal, Quebec, Canada H3G 1M8<br/><strong>Office:</strong> EV3.112 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Telephone:</strong> (1) 514-848-2424 ext. 3020<br/><strong>Email:</strong> tsantalis [at] cse.concordia.ca | nikolaos.tsantalis [at] concordia.ca</p>');
    document.write('		<p>&copy; 2012 Nikolaos Tsantalis | <a href="http://andreasviklund.com/templates/inland/">Template design</a> by <a href="http://andreasviklund.com/">andreasviklund.com</a></p>');
}