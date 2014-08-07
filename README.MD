
<h2>Case Western Reserver Templates</h2>

<h6>Home Pages</h6>

<ol>
	<li>index.html = 1 column mega home page</li>
	<li>home-2-col-feature.html = 2 column child page with a large image slideshow feature</li>
	<li>home-2-col-small-feature-index.html = 2 column home page with a smaller feature</li>	
	<li>home-3-col-feature-index.html = 3 column home page</li>
</ol> 
<h6>Child/Sub Pages</h6>
<ol>
	<li>child-1-col.html = 1 column child page</li>
	<li>child-2-col.html = 2 column child page</li>
	<li>child-3-col.html = 3 column child page</li>
</ol> 
<h6>Subdirectories</h6>

/images = picture files (jpg, png, gif, etc...)
/lib = external libraries, there are dependecies within each external library, some may have /script, /css, and other files that reference 
	each other locally (ex. src = ../images/spritemap.png). Also, these libraries are updated periodically. 
	By keeping each in this external lib folder it'll be easy to track changes, and merge in whole library updates.
	
	Note when compiling and minimizing scripts and styles you'll have to reference each libraries subfolders.

/scripts = seperate script files. this can also contain libraries that don't have internal dependancies, such as jquery.js, modernizr.js, jqueryui.js
/styles =  individual stylesheets.

Demo of this version of the templates: http://nurs-bdm4-8.case.edu/
<p>8/7/2014</p>