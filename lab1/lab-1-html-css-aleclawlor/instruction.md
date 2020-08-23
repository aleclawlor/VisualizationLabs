--- 

layout: default
title: lab1

---
# <img src="img/logo.png" width="30px"> CSCI339001 Visualization

##  Lab 1

Welcome to the first lab in our visualization course! 

Labs are designed as self-guided workbooks. Students are asked to read and work through the given example problems, and to push the code of your completed lab to their Github repositories and share the url through Canvas by the next Monday.

We embrace the concept of learning by doing. To truly master new programming and development skills, students have to spend the time to figure things out and to try different approaches and examples.

The course staff is available for any questions that pop up along the way. We encourage students to actively contact them with questions, but at the same time, make sure that you come to the lab prepared and ready to code!

### Learning Objectives

After completing this lab, students will be able to

* Setup a web development environment
* Write a basic HTML document
* Customize the style of the HTML document using CSS
* Understand the Document Object Model (DOM) in HTML

### Prerequisites

You have read the prereading and setup a basic development environment. [Revisit](reading.md)

#### Setup You Lab Repository

Once the development environment is ready, please [go to this link and accept the invitation](https://classroom.github.com/a/V9XeRXIs) to work on this lab. This will create a repository on Github under your username with a template code we provide. To work on the code in your local machine, you first need to [clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) the repository. You can find a simple instruction how to clone within VSCode: [here](https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository)

### Overview

In this course we will use HTML, CSS, JavaScript, and SVG to create interactive data visualizations. Before starting with extensive visualization developments and learning more about the visualization library [D3.js](https://d3js.org/), we will use the first two labs to get basic understanding of the fundamental web technology stack.

The next 90 minutes are split up into multiple theoretical and interactive sections. All the activities are consecutive and will result in a basic web page with random facts about Boston College. We will provide the facts and the interactive component. Your task is to set up the markup (HTML) and the style (CSS) of the website. After completion of this lab you will be well-prepared for the following labs.

*The result of the first lab may look like the following screenshot. Most of the design decisions are up to you - so feel free to be creative and come up with your own ideas.*

![Lab 1 - Preview](img/instruction/lab1-preview.png?raw=true "Lab 1 - Preview")

### HTML (Hypertext Markup Language)

As you have read, HTML is used to structure content for web browsers. It enables us to differentiate between content and structure of a document.

*A brief HTML example:*

	<h1>Curious George Goes to a Chocolate Factory</h1>
	<p>
		When <i>George</i> and the man with the yellow hat stop to shop at a chocolate
		factory store, George becomes curious about how chocolates are made...
	</p>
	

*Result as shown in a web browser:*

![HTML Example](img/instruction/html-example.png?raw=true "HTML Example")

A comprehensive and well structured list of HTML elements can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).


#### HTML Boilerplate

Every HTML5 document requires a little bit of boilerplate code that you should just copy and past every time you create a new file. A boilerplate is a piece of code that is usually copied with little or no alteration, much like a template, to speed up the creation of new files. In the case of HTML5 this includes several HTML tags (e.g. \<head>, \<html>, ...) that don't have visual equivalents on the website, but that are necessary to define the document's metadata.

You should get familiar with this structure:

```
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
This is where the main content of the page goes.
</body>
</html>
```


#### CSS Selectors: Classes and IDs

Classes and IDs are extremely helpful for selecting specific HTML elements. Your CSS and JavaScript code will rely heavily on classes and IDs to identify elements.

(1) ```<div>Interactive Data Visualization</div>```

In the above HTML snippet, the div-element has no attributes, so the only possible way to identify the element is by its tag name *div*. If there are multiple div-tags in one page, which happens frequently, selecting just the above div element becomes a problem.

(2) ```<div id="book-123">The Value of Visualization</div>```

To solve this problem, we can give the element a unique ID: *book-123*. However, each element can only have a single ID, and each ID value can be used only once per page!

(3) ```<div class="book content">Visualization Analysis and Design</div>```

Any attribute or styling information that needs to be applied to multiple elements on a page should be done with a *class*. In the above example, we have assigned the div element to the class *book*, that allows us to select all HTML containers of the type *book*. At the same time, we have assigned the div element to the class *content*. 

Elements can be assigned multiple classes, simply by separating them with a space.

-----


#### Activity 1

1. **Find a HTML file named ```index.html``` in your code repository**

2. **Copy the HTML boilerplate into the ```index.html``` file**

3. **Add some structure to the *body* of your new document and try different HTML elements. The content should be appropriate for the HTML tags you are using (e.g., a headline vs. a paragraph).**
	
	Make sure to include at least:
	
	* A top-level headline
	* An empty div-container (will be filled with facts later)
	* A hyperlink to any other page
	* An image
	* A button (will trigger the search for a new fact)
		
	Open your file ```index.html``` in a web browser to see the results (use "Go Live" from the [Live Server plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).

4. **Add the following classes and IDs to the elements**
	
	* Add the ID ```content``` to the div container
	* Add the ID ```generate``` to the button
	* Add the classe ```button```to the button


-----

### DOM

The Document Object Model (DOM) is a programming interface for HTML and SVG (we will learn this later) documents. It provides a hierarchical structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. Or in other words, it is a model that the browser generates, when it parses the HTML document.

The difference between HTML and DOM should be more understandable after the following interactive exercise. The following example figure will help understanding their relationship:

![The HTML DOM Tree of Objects](https://www.w3schools.com/whatis/img_htmltree.gif)

-----

#### Activity 2

##### Web Developer Tools

Every modern-day web browser has built-in *developer tools* that expose the current state of the DOM and help us to better understand what is going on. In this exercise we will use the *Web Inspector* to view the DOM tree of our document.


1. **Create a new file ```dom-example.js``` in the ```js``` project** 
   
2. **Paste the following code to the Javascript file**

```javascript

let facts = [
	"Boston College (also referred to as BC) is a private Jesuit research university in Chestnut Hill, Massachusetts.",
	"Boston College was founded in 1863 by the Society of Jesus (the Jesuits) to educate Boston's predominantly Irish, Catholic immigrant community.",
	"When it outgrew the limitations of the space, then-president Rev. Thomas I. Gasson, S.J., bought 31 acres of the former Lawrence Farm in Chestnut Hill, Massachusetts, and broke ground in 1909 on a new campus, today fondly known as “the Heights.”",
	"BC began as an undergraduate liberal arts college, but as its aspirations grew, it added graduate programs and professional schools fulfilling its charter as a university.",
	"The university has more than 9,300 full-time undergraduates and nearly 5,000 graduate students.",
	"Boston College athletic teams are known as the Eagles, their colors are maroon and gold, and mascot is Baldwin the Eagle.",
	"In 2017-18, 4,192 degrees were awarded in more than 50 fields of study, through eight schools and colleges.",
	"In 1927, Boston College conferred one earned bachelor’s degree and fifteen Master’s degrees on women through the Extension Division.",
	"The two most popular undergraduate majors are economics (A&S) and finance (CSOM).",
	"The computer science major has seen an increase of nearly 800 percent, growing from just 53 students in 2008 to 420 in 2019",
	"Boston College tied in 38th among national universities and 421st among global universities in U.S. News & World Report's America's Best Colleges 2018 rankings.",
	"In 2014, the undergraduate school of business, the Carroll School of Management, placed 4th in an annual ranking of US undergraduate business schools by Bloomberg Businessweek.",
	"AHANA is the term Boston College uses to refer to persons of African-American, Hispanic, Asian, and Native American descent. The term was coined at Boston College in 1979 by two students, Alfred Feliciano and Valerie Lewis, who objected to the name Office of Minority Programs used by Boston College at the time.",
	"'The Heights' is a nickname given to Boston College. It recalls both BC's lofty aspirations—the college motto is 'Ever to Excel'—and its hilltop location, an area initially designated as 'University Heights'.",
	"On October 18, 2017, hundreds of students walked out of class in a protest against racism and to demand the college officials pay more attention to the school's racial climate.",
	"For the Class of 2023, Boston College received 35,500 applications, of which it admitted 9,500 (27%).",
	"There are over 179,000 alumni in over 120 countries around the world.",
	"BC has the largest alumni association among Catholic universities in the world, consisting of 168,651 members.",
	"Boston College was named one of the 100 most beautiful college campuses by Best College Reviews.",
	"Bapst library was named one of the 25 most beautiful college libraries in the world by Campus Grotto.",
	"Boston College has over 7,000 alumni couples, but if you want to get married at the campus church, St. Ignatius, you should probably put yourself on the waiting list now.",
	"At BC, you can take classes on Disney films in the English Department. Professor Bonnie Rudner also teaches classes on young adult fiction and fairytales.",
	"One of BC’s dining halls, which is currently known for its delicious mac and cheese, was a bar years ago. Vanilla Ice performed there once in the 90’s and the stage collapsed.",
	"During exam weeks, Boston College brings in petting zoos and puppies for students to play with. There is also free coffee in the dining halls and libraries during exams.",
	"BC’s Red Bandana 5K Run and the Red Bandana football game held every October are two traditions that honor BC alum Welles Crowther who passed away in the 9/11 attacks.",
	"Boston College is the most popular college on Instagram. BC’s Gasson Hall, is the third most Instagrammed college building in the country."
];



document.querySelector("#generate").onclick = function(){
	var randomFact = facts[Math.floor(Math.random()*facts.length)];

	// CREATE NEW PARAGRAPH-TAG
	var paragraph = document.createElement("p");
	paragraph.className = "generated-content";

	// CREATE PARAGRAPH CONTENT
	var node = document.createTextNode(randomFact);

	// ADD PARAGRAPH CONTENT TO TAG
	paragraph.appendChild(node);

	// ADD PARAGRAPH TO DIV-CONTAINER WITH ID "content"
	var element = document.querySelector("#content");
	element.appendChild(paragraph);

	console.log('blur', this);
	this.blur();
}


```

1. **Include the JavaScript file that you just created into your HTML document. Add the following line at the bottom of ```index.html``` (inside the ```<body></body>```)**

	```
	<script src="js/dom-example.js"></script>
	```
		
	This script will listen to your button (*ID: cs171-basics*). It will automatically deliver random facts if you click on the button.


2. **Open *index.html* in your web browser and navigate to *Developer Tools***

	We strongly encourage you to use Google Chrome which we will be using for grading. On Mac OS, you can navigate to the Developer Tools using:

	- Chrome: View → Developer → Developer Tools
	
	Make sure to check out the keyboard shortcut of your system to open the developer tools!

3. **Inspect the DOM with the *Web Inspector***

	In the default mode, the *Web Inspector* should be docked to the bottom of the window and split the page horizontally.
		
	We can see something that looks like the source code of the HTML document that you wrote in your editor. Some tags are probably collapsed. Actually, you are **not** viewing the raw content of your HTML document. What you are seeing is the visual representation of the DOM tree (after all scripts have run and potentially modified the original HTML source)!	
		
	The HTML you write is parsed by the browser and turned into the DOM. In simple cases this will look like your raw HTML, but if any JavaScript code has been executed, the current DOM may be different, as JavaScript commands can add, remove, and adjust the DOM dynamically.

4. **Update the DOM: Click on the previously created button!**

	Every time you click on the button, a function in the external JavaScript file that we provided for you will be triggered that adds a new paragraph (random fact) to the DOM tree. You can see the new elements in the browser window and the current state of the DOM in the *Web Inspector*.

	Your ```index.html``` remains unchanged. We have only modified the DOM with JavaScript, not the actual document. Your modifications will be discarded if you reload the page.
	
	If you have trouble getting this step to work you should double check that you have added the appropriate IDs to your HTML tags!
	
5. **Update the DOM: Delete nodes from the DOM tree**

	You can also use the *Web Inspector* to modify your DOM directly. You can edit the content, add attributes or delete nodes. Try it out and delete some paragraphs!

	The developer tools of modern browsers usually include many other tools to make the life of a web developer easier. In the next activity we will use the Web Inspector to modify CSS and next week we will use the JavaScript Console for debugging.
	
	**From now on, whenever you are programming HTML, CSS, JavaScript, or D3, you should always have the developer console open. This helps you in debugging and figuring out what is going on in the code!**

-----


### Cascading Style Sheets (CSS) - *Making things pretty!*

With HTML you define the structure and content of the page and with CSS you set its style - things like fonts, colors, margins, backgrounds etc.

A stylesheet will usually consist of a list of CSS rules that are inserted either in a ```<style>``` block in your HTML header, or, more often, stored in an external file and included via the below line of code. Make sure to include an external style sheet always in the HTML header (inside the ```<head></head>``` elements of your HTML file). 

	<link rel="stylesheet" href="css/style.css"> 

This assumes that you have a separate file ```style.css``` in the folder ```css```.

*CSS styles consist of selectors and properties, grouped in curly brackets. A property and its value are separated by a colon, and the line is terminated with a semicolon.*

A simple rule in CSS can look like the following:

	div {
		font-size: 15px;
		padding: 30px 10px;
		background-color: #F7F7F7;
		color: black;
		border: 2px solid red;
	}

![CSS Example Result](img/instruction/css-example.png?raw=true "CSS Example Result")


If you are searching for an exhaustive list of style properties we recommend [Mozilla's Developer Platform](https://developer.mozilla.org/en-US/docs/Web/CSS) or [w3schools.com](http://www.w3schools.com/CSS/). Some CSS properties are needed quite often, so you should try to memorize them.

In the above example we have assigned our CSS rule to all div containers but if we want to style specific elements we can use the selectors *id* and *class*.

As you can see in the example below, IDs are preceded with a hash mark (*#article-1*) and class names are preceded with a period (*.error*). You can also use descendant selectors to address nested tags (*.article .warning*).


*Example:*

```html
	<!DOCTYPE HTML>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
  	  	<title>Simple CSS</title>
 	   	<style>
 	   	#article-1 {
 	   	  text-decoration: underline;
 	   	}
        	.error {
            	  font-weight: bold;
            	  color: red;
        	}
        	.article .warning {
          	  color: blue;
        	}
   		</style>
	</head>
	<body>

	<div class="article" id="article-1">Some text</div>
	
	<div class="article">
		Some other text
		<div class="warning">and a warning</div>
	</div>
	
	<div class="article error">Error!</div>

	</body>
	</html>
```
*Result:*

![CSS Example 2 Result](img/instruction/css-example-2.png?raw=true "CSS Example 2 Result")

-----

#### Activity 3


In this activity you will use CSS to add custom styles to your HTML file.


1. **Create an external CSS file ```style.css``` and include it in your HTML document ```index.html```**

2. **Add several CSS rules to your stylesheet. You can choose the design parameters freely (e.g., decisions about fonts, font size, colors or scales) but make sure to include at least:**

	- *ID Selector* (e.g. *#content*)
	- *Class Selector*
	- *Descendant Selector* for the dynamically created Boston College facts (paragraphs)
	- Custom *Hover-Effect* for hyperlinks
	- *Padding* and *Margin* properties
	- *Color* or *Background-Color* properties

	You can play around with different CSS parameters, but don't worry too much right now about making your webpage look beautiful, we will come back to the design at the end of the lab.
	
3. **Inspecting the CSS with the *Web Inspector***

	If you are working on a more sophisticated problem it can be very useful to analyze your CSS rules with the *Web Inspector*. The CSS styles in the right panel match the currently selected DOM element.
	
	- Click on different lines in the *Elements*-panel to see the respective CSS properties. The rules are collected from inline styles, attached stylesheets and user agent stylesheets. User agent stylesheets are the browser's default properties, such as font-size or margin.
	
	- Be mindful that rules that are specified later in a CSS file generally override rules that were specified earlier in the file, but not always. The true logic has to do with the specificity of each selector. The *div.content* selector would override the *div* rule even if it were listed first, simply because it is a more specific selector.
		
		The order of the CSS rules in the right panel helps you to identify the importance of the individual styles.
	
	- Similar to the DOM tree, you can also modify, add and remove CSS rules and properties in the web inspector. This is a quick and easy way to try different styles directly in the browser (debugging), but keep in mind that the changes will be discarded if you reload the page. Try it out and modify your CSS in the browser!
	
	- If you include a specific color in your CSS properties the *Web Inspector* shows you a small button, linked to a color picker. This little tool can help you to find the desired color codes. Add a new CSS rule in the *Web Inspector* and change the font color of the headline!


-----

### CSS Framework

Rather than coding from scratch, frameworks enable you to utilize ready made blocks of code to help you get started. They give you a solid foundation for what a typical web project requires and usually they are also flexible enough for customization.

For styling, we use [***Milligram***](https://milligram.io/), an open-source minimal CSS framework. It provides a base style so that you do not need to worry a lot about styling. Its [**grid system**](https://milligram.io/#grids) also helps you to create multi-column and nested layouts, especially if your website should work on different devices. All CSS rules can be overridden by your own rules.

You can find many other popular CSS frameworks [here](https://github.com/troxler/awesome-css-frameworks) and feel free to use anything you like. The question whether a framework can be useful depends on the individual project and on the developer. Therefore, it is up to you to decide if you want to use it.

-----

#### Activity 4


In the last activity you will download and include the Milligram framework in your project. 


1. **Download Milligram**

	[https://milligram.io/#getting-started](https://milligram.io/#getting-started)
	
	Click "Download Milligram". This will download a zip file.
	
2. **Extract the zip file and copy the ```milligram.min.css``` in the ```dist``` folder into your ```css``` directory**

3. **Include the Milligram files in your ```index.html```**

	In your header link to the Milligram minified(*) CSS: ```milligram.min.css```
	
	Every time you work with CSS libraries/frameworks you should insert them right before your own stylesheets. Thereby your rules are prioritized and you can override the default properties of the libraries.
	
	> (*)*The purpose of minification is to increase the speed of websites, by removing spacing, indentation, newlines and comments. These elements are not required to successfully run CSS (or JS) in a browser. The best practice of many developers is to maintain a regular version of the CSS (or JS) file and when rolling out the project, the stylesheet is transformed to the optimized version.*
	
	 	
4. **Reload ```index.html```in your browser**

	* Do you notice any changes?
	* Open the *Web Inspector* and check the different styles

5. **Override Milligram styles**

	- Add custom CSS rules to change the *Background-Color* and the Hover-State of the previously created button in your ```style.css```.

	- We assume that you do not know the CSS selectors or properties for changing the background color and the hover-state yet. Search for it online, either in google or at [W3 school](https://www.w3schools.com/cssref/sel_hover.asp). Example search term: "CSS background color" and "CSS hover selector".
	
	*Keep in mind: If you have to override too many styles, it can be easier to work without a framework.*

-----

### Bonus Activities (optional!)

These bonus activities are not required, but we recommend that you try them!

1. **Add a grid layout to your webpage**

	Take a look at the [grid system](https://milligram.io/#grids) of Milligram. Use the first screenshot in this document as guideline to create a grid with the textual facts on the left and images on the right. 


2. **Further beautify index.html**
	
	Play around with different CSS styles. Think of the design of webpages you like and try to recreate that look. Remember you can look at their CSS styles with ***Web Inspector*** tool.

-----

### Submission of lab

You have now completed the activities of Lab 1 and should have a basic understanding of HTML, CSS, and how you can style your webpage based on CSS selectors and libraries like Milligram.

#### Push to Github Repository
Please push your completed lab 1 to the remote repository. You can do this in VSCode as your have seen in the pre-reading. For instance, click the Source Control icon on the left and you will see changes you made, similar to the following:

![Git](https://code.visualstudio.com/assets/docs/editor/versioncontrol/overview.png)

You will then **add** the changes to the working index (click '+' icon) and put the message about the changes and **commit** (click '✓') and **push** using the dropdown menu.  



#### Testing Online

Github provides a hosting service called [Github Pages](https://pages.github.com/), that allows for hosting a website directly from the repository. To do so, it only requires a few steps. First go to the Settings page on your Github repository. 

![Settings1](https://help.github.com/assets/images/help/repository/repo-actions-settings.png)

Scroll below until you see "Github Pages". Change the source to "master branch" not "gh-pages branch". 

![Settings2](https://help.github.com/assets/images/help/pages/none-source-setting.png)

Github Pages will automatically host the HTML file in your master branch (where you pushed your code) on a url name like this: ```https://bcviscourse.github.io/lab1-[username]/```. Put your user name in the placeholder. It may take a few minutes for the hosting to work.

#### Submit to Canvas

Finally, please submit the working url on Canvas, which allows us to keep track of your grades on Canvas. We will use the url to grade your lab work. 

**If you are done early, please help others around your table.**

*See you next week!*