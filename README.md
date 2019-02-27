Final Project - Interactive Data Visualization  
===

## Link
https://calebralphs.github.io/final/src/index.html

Note: the Google Maps API is glitchy, and the API call will throw errors, saying that the API Key in use is outdated and has been replaced. The viewer needs to refresh the page until the Map shows up (sometimes it takes a couple dozen times). 

## Data Sets
- Click [here](https://data.cityofnewyork.us/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95) for the accident data used. You can see that in the Jupyter Notebook that this file was renamed to 'NYC_Motor_Vehicle_Collisions.csv' and placed in a directory up one level and into another '../data/[filename]'

- Click [here](https://data.cityofnewyork.us/City-Government/NYC-Street-Centerline-CSCL-/exjm-f27b/data) for the street data used. You can see that in the Jupyter Notebook that this file was renamed to 'NYC_Streets.csv' and placed in the same directory specified above.

- Click [here](https://github.com/fedhere/PUI2015_EC/blob/master/mam1612_EC/nyc-zip-code-tabulation-areas-polygons.geojson) for the zip code geospatial data used. You can see that in the Jupyter Notebook that the file was saved in '.geojson' format, renamed as 'NYC_Zip_Polygons.geojson', and placed in the same directory specified above.

## Library Dependencies for Jupyter

Open your terminal and run '[conda/pip] install [library name]' for the following library names (in this order):

1. pandas
2. numpy
3. plotly
4. json
5. matplotlib
5. shapely
6. fiona
7. six
8. pyproj
9. geopandas
10. pysal

NOTE: the 'conda install [library name]' may throw an error. In that case, try 'pip install [library name]. There also may be additional
library dependencies which one can look up.

Origial README
===

The key learning experience of this course is the final project. 
You will design a web site and interactive visualizations that answer questions you have or provide an exploratory interface to some topic of your own choosing. 
You will acquire the data, design your visualizations, implement them, and critically evaluate the results. 

The path to a good visualization is going to involve mistakes and wrong turns. 
It is therefore important to recognize that mistakes are valuable in finding the path to a solution, to broadly explore the design space, and to iterate designs to improve possible solutions. 
To help you explore the design space, we will hold events such as feedback sessions in which you propose your idea and initial designs and receive feedback from the class and staff.

We will discuss how to form teams as part of the process.
In other words, don't form a team on your own just yet, but rather focus on generating ideas.

Proposal
---

Submit project proposals using [this Google Form](https://goo.gl/forms/J5qe3WdokwvXW8FA3).
You may submit more than one proposal.
A good range would be: at least 2, at most 4, for any given team.

Prototype Presentation & Feedback
---

For this Milestone we expect you to hand in your code and process documentation (see Process Book below) in it’s current state. You don’t have to hand in a screencast and you don’t have to have your website ready.

For your Milestone you should have completed your data acquisition, or at least have a significant sample of your data. You must have your data structures in place. For example, if you plan to collect 1000 data records, but only have 200, that’s fine. If you are missing one of two datasets you want to use you will lose points, since you have to have the whole structure.

You must have a working visualization prototype. You may not have all your views up and running, and it may not be completely interactive, but the direction and the content must be clear.

Final Project Materials
---
For your final project you must hand in the following items.

### Process Book

An important part of your project is your process book. Your process book details your steps in developing your solution, including the alternative designs you tried, and the insights you got. Develop your process book out of the project proposal. Equally important to your final results is how you got there! Your process book is the place you describe and document the space of possibilities you explored at each step of your project. It is not, however, a journal or lab notebook that describes every detail - you should think carefully about the important decisions you made and insights you gained and present your reasoning in a concise way.

We strongly advise you to include many figures in your process book, including photos of your sketches of potential designs, screen shots from different visualization tools you explored, inspirations of visualizations you found online, etc. Several images illustrating changes in your design or focus over time will be far more informative than text describing those changes. Instead, use text to describe the rationale behind the evolution of your project.

Your process book should include the following topics. Depending on your project type the amount of discussion you devote to each of them will vary:

- Overview and Motivation: Provide an overview of the project goals and the motivation for it. Consider that this will be read by people who did not see your project proposal.
- Related Work: Anything that inspired you, such as a paper, a web site, visualizations we discussed in class, etc.
- Questions: What questions are you trying to answer? How did these questions evolve over the course of the project? What new questions did you consider in the course of your analysis?
- Data: Source, scraping method, cleanup, etc.
- Exploratory Data Analysis: What visualizations did you use to initially look at your data? What insights did you gain? How did these insights inform your design?
- Design Evolution: What are the different visualizations you considered? Justify the design decisions you made using the perceptual and design principles you learned in the course. Did you deviate from your proposal?
- Implementation: Describe the intent and functionality of the interactive visualizations you implemented. Provide clear and well-referenced images showing the key design and interaction elements.
- Evaluation: What did you learn about the data by using your visualizations? How did you answer your questions? How well does your visualization work, and how could you further improve it?

As this will be your only chance to describe your project in detail make sure that your process book is a standalone document that fully describes your results and the final design. 
[Here](http://dataviscourse.net/2015/assets/process_books/bansal_cao_hou.pdf) are a [few examples](http://dataviscourse.net/2015/assets/process_books/walsh_trevino_bett.pdf) of process books from a similar course final.

### Project Website

You will create a public website for your project using GitHub pages or any other web hosting service of your choice. 
The web site should contain your interactive visualization, summarize the main results of the project, and tell a story. 
Consider your audience (the site should be public public) and keep the level of discussion at the appropriate level. 
Your process book and data should be linked from the web site as well. 
Also embed your interactive visualization and your screen-cast in your website. 
If you are not able to publish your work (e.g., due to confidential data) please let us know in your project proposal.

### Project Screen-Cast

Each team will create a two minute screen-cast with narration showing a demo of your visualization and/or some slides. 
You can use any [screencast tool](http://dataviscourse.net/2015/screencast/) of your choice -- Camtasia works well. 
Please make sure that the sound quality of your video is good - it may be worthwhile to invest in an external USB microphone. 
Upload the video to an online video-platform such as YouTube or Vimeo and embed it into your project web page. 
We will show some of the best videos in class.

We will strictly enforce the two minute time limit for the video, so please make sure you are not running longer. 
Use principles of good storytelling and presentations to get your key points across. Focus the majority of your screencast on your main contributions rather than on technical details. 
What do you feel is the best part of your project? 
What insights did you gain? 
What is the single most important thing you would like your audience to take away? Make sure it is front and center rather than at the end.

Outside Libraries/References
---

For this project you *do not* have to write everything from scratch.

You may *reference* demo programs from books or the web, and *include* popular web libraries like Bootstrap, JQuery, Backbone, React, Meteor, etcetera. 

Please *do not* use libraries on top of d3, however. Libraries like nvd3.js look tempting, but such libraries often have poor defaults and result in poor visualizations.
Instead, draw from the numerous existing d3 examples on the web.

If you use outside sources please provide a References section with links at the end of your Readme.

Resources
---

Stanford recently released a set of [interesting datasets](http://cjlab.stanford.edu/2015/09/30/lab-launch-and-data-sets/).

Viau maintains a [huge list of d3 examples](http://christopheviau.com/d3list/gallery.html), some may have multiple views.

Utah has a [great list of resources](http://dataviscourse.net/2015/resources/) including data links.

The "[Data is Plural](https://tinyletter.com/data-is-plural/archive)" weekly letter often contains interesting datasets.

Requirements
---

Store the following in your github repository:

- Code - All web site files and libraries assuming they are not too big to include
- Data - Include all the data that you used in your project. If the data is too large for github store it on a cloud storage provider, such as Dropbox or Yousendit.
- Process Book- Your Process Book in PDF format.
- README - The README file must give an overview of what you are handing in: which parts are your code, which parts are libraries, and so on. The README must contain URLs to your project websites and screencast videos. The README must also explain any non-obvious features of your interface.

GitHub Details
---

- Fork the repo. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Make sure your "master" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit the README.md with a link to your gh-pages site: for example http://YourUsernameGoesHere.github.io/DataVisFinal/index.html
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.

Grading
---

- Process Book - Are you following a design process that is well documented in your process book?
- Solution - Is your visualization effective in answering your intended questions? Was it designed following visualization principles?
- Implementation - What is the quality of your implementation? Is it appropriately polished, robust, and reliable?
- Presentation - Are your web site and screencast clear, engaging, and effective?
Your individual project score will also be influenced by your peer evaluations.

References
---

- This final project is adapted from http://dataviscourse.net/2015/project/
