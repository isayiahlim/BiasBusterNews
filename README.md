# BiasBusterNewsDubHacks23 - Synergy Track
## Problem Statement
In a world where echo chambers and polarized opinions can dominate the news landscape, Bias Buster News is a project that aims to promote informed and open-minded citizenship. 
This news website personalizes the news articles recommended to a reader based on their self-reported political affiliation.
Thus, it introduces you to news articles and topics that you might not typically explore, fostering a deeper understanding of political landscapes and diverse viewpoints. 
We believe that well-informed citizens are essential for a thriving democracy, and we're committed to helping you become one. 

## How to Install + Use
Download the repository and run website locally (for which you will need a live server), or access it through GitHub pages here - https://isayiahlim.github.io/bootstrap/index.html. You will need an API key from newsapi.org, which you can get for free. Unfortunately, we do not have the financial resources to gain access to the premium version of the NewsAPI, which currently limits the number of calls we can make to it every day, thus requiring the user to download and manually enter the API Key. Ideally with the right resources, our website would be fully functional on its own.
On the home page, scroll to the slider and slide it to the left or right to describe your political alignment. 
All news articles will be updated to be personalized to you; continue to explore the website and read articles to bust your biases.

## Challenges
Going into this project, all of our collaborators had limited experience with JavaScript and HTML. A lot of time was spent learning syntax and researching the NewsAPI. A few specific issues were figuring out how to get URLs, titles, authors, etc., from news databases out of the JSON format returned by the NewsAPI, JavaScript syntax and how it relates back to HTML files, and automated web image resizing when pulling from URLs. Additionally, because of the time we spent learning, we were unable to implement a lot of the features we originally wanted on the website, such as an account system with a personalized political view.

## Accomplishments
As a group, we overcame our limited capabilities in web development to produce a working website. We were able to incorporate NewsAPI in a flexible way that allowed us the ability to search websites for articles relating to topics of our choosing and return information to help display it on our website.

## What We Learned
Collectively, we learned how to use git and version control to develop projects collaboratively. We learned how JavaScript can make web requests and use them in programs. We learned how HTML interacts with JavaScript. We learned the importance of APIs and their ever-important functionality in developing stuff. We learned how to build a scaleable website. And finally, we learned the importance of communication when you or someone else is having a hard time completing a task.

## Next Steps
A few steps to take this project to the next level could be a reward system, in-browser containers for news articles, and user accounts. It is one thing to provide functionality for people to read opposing views, but a completely different thing to get people motivated to do so. With a reward system, perhaps like Microsoft Rewards, users could gain points from reading articles more distanced from their own viewpoints, allowing them to redeem them in some kind of shop for cool prizes. Another step to improve the visibility of this website would be to host the other web pages of news articles locally through the use of a pop-up in the browser or embedding the articles on the webpage. This would limit the number of tabs people would have to open when using the website while keeping user engagement on the site. Additionally, the use of accounts would allow people to have their political biases already noted whenever they enter the site. This could be done initially with the use of a quiz/profile maker that could store options of political/ideological interest, similar to the "I Side With" quiz.

## Technologies Used
We used HTML, CSS, JS, JSON, HTML Codex Template, NewsAPI, and ALLSides Media Bias Chart. 
NewsAPI is a JavaScript API that allows users to pull articles from websites and return specific information about said articles, such as URLs, titles, and authors. With that data, we sorted the articles based on where they fall on the political spectrum using the AllSides Media Bias Chart, allowing us to create the "personalized" media output. JavaScript, CSS, and HTML were used as general construction tools for the website, with HTML Codex Template being used as the base.

## Credits
This web application was developed by four first-year University of Washington students for the 2023 DubHacks hackathon. Initial website template by HTML Codex. GitHub profiles of all authors -
<br></br>
Isayiah Lim: isayiahlim
<br></br>
Dixon Tan: light611
<br></br>
Shreya Pandey: shreyap2004
<br></br>
Vernon Lumpkin: vlumpkin
