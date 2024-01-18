# Quizetime!

Quiztime is a easy to use quiz site, both for the user and if you want to make a quiz with a certain topic or for a certain demographic. 
The quiz displays a question and four different answer options. When the user selects an answer it clearly shows if it the right Och wrong answer. When the user has completed all the questions the total score will display in the question area. But if the user want to keep track on every point, they can easily do so at the bottom of the page. 
If you want to adjust the questions you can easy do so, in a separate JavaScript file, that way you don’t need to be afraid to change something you shouldn’t. 

[Link to Quiztime](https://lindaapersson.github.io/Portfolio-2/)

![Image of responsvie design](assets/readme-img/screenshot.png)

## Site structure
The site consist of one single page that displays a header, footer, “starting box”, “rules box” and a “game area”. The “starting box” and “rules box” hides when the game starts, and the “game area” changes when the user has completed all the questions. 

To help me map out all the functions and how I wanted the quiz to work I took help of LucidFlowchart. This image helps me see what I needed to start with and what I was supposed to do next. For example, it was while doing this chart I decided to not include a “exit button”, because I want the user to keep answering question and staying on the site. Especilly if you change the questions to some harder ones, I don’t want the user to take the “easy way out” by just press an exit button, I want them go all the way, and answer everything. 

![Flowchart](assets/readme-img/flowchart.png)

## Design
I knew that I wouldn’t have the time to come up with the most original or specific questions, so I focused on making the quiz easy to change. So you can use the quiz and adapter it to what ever equation you want! With that in mind I made the following options:

### Font
I chose the font Popins, because it´s easy to read but with a little twist. It works for all ages, and give a good contrast that is easy to read. 

### Background
The background Is just one single image. This makes it wary easy to change the background to something that matches the questions. 

### Colors:
The main colors are beige, brown and black. I chose those colors because it gives a good contrast that makes it easy to read the text. And that is a very importing thing whale using a online quiz. 

## Features
Quiztime is a responsive and interactive site with the following features:

### The header - 
The header contains an image of a question mark and the logo. The header clearly shows the user the name of the page. 

![Screenshot of header](assets/readme-img/header.png)

### The footer -
The footer displays at the bottom of the page, and contains three social media icons(Twitter, YouTube and Instagram). All icons a clickable and takes the user to each social media platform in a new tab. 

![Screenshot of footer](assets/readme-img/footer.png)

### The “starting box” - 
This is what the user will see when they enter the page. It greats them and gives the two options. The can either chose the Start button to start the game, or the rules button to read the rules of the game. 

![Screenshot of starting box](assets/readme-img/startbox.png)

### The “rules box”
Since Quiztime is design to be easy to use, and just give the user one or two clickable options. The rules sections is more of a “how to play” section. When the user clicks the rules button it takes them to a area that display instruction of how they are going to do to make it through the quiz. 

![Screenshot of rules box](assets/readme-img/rules.png)

### The Quiz
After clicking the Start button the user will enter the quiz. The page displays a questions area, where the user can read the question, four answer options, a Next button and a area where the user can see their score and what question they are on and how many they have left. 

![Screenshot of the quiz](assets/readme-img/first-question.png)

#### Question area
The question area is at the top of the page with the question clearly displayed and the question number. 
#### Answer options
There is four buttons that displays the different answer options. The user can only click at one of the options at this point. All other buttons are disabled. If the user selects the right option, the border will become green. If the user selects the wrong answer the border of that question will become red and the right answer will become green. 

![Screenshot of user selected right answer](assets/readme-img/question-right.png)
![Screenshot of user selected wrong answer](assets/readme-img/question-wrong.png)

#### Next button
After the user has selected an option, the Next button will be clickable again, and will take the user to the next question. 

#### Score area 
The area underneath the next button displays the users score and what question the user are on and how many questions they have left. 
user selected right answer

![Screenshot of score area](assets/readme-img/scorearea.png)

### JavaScript
The is two separate JavaScript files conected to Quuztime, one with the functions and descriptions on how the quiz should run. And one with all the questions. The purpose of that arrangement is to make it as easy as possible to change the questions and answers.

## Deployment 
The site was deployed using GitHub. 
1. Log into GitHub.
2. Locate the right GitHub Repository.
3. At the top of the repository, select Settings from the menu.
4. Scroll down the Settings page to the "Pages" section.
5. Under "Source" click the drop-down menu labeled "None" and select "Main".
6. When selected, the page will automatically refresh and the website is deployed.
7. Scroll back down to the "Pages" section to get the link to the webpage.

## Testing
### HTML
The HTML code was tested with W3C Validation, with no errors. 

![Screenshot of W3C Validation](assets/readme-img/html-validator.png)

### CSS
The CSS cod was tested with W3 Jigsaw, with no errors.

![Screenshot of W3 Jigsaw](assets/readme-img/css-validator.png)

### Lighthouse
Testing the page with Lighthouse, desktop view, it got a good result. 

![Screenshot of Lighthouse, desktop view](assets/readme-img/lighthouse-desktop.png)

Testing the page with Lighthouse, mobil view, it got a score that has room for improvement. Reading the report, it says that the the LCP need to improve. Unfortinally I don’t have the knowledge to do something about that.

![Screenshot of Lighthouse, mobil view](assets/readme-img/lighthouse-mobil.png)


## Buggs
### Debugging
While scanning the page my mentor found a bug. After answering the first question, she got to the second question and she could click the next button without selecting an answer. So she could skip to the end, without answering nine questions. 
### Fix
I fixed that by moving “hide next button” to the right place in JavaScript. 

### Buggs now
There is no bugs at the page right now that I’m aware of. 

## Credits
### Content
The two images used are royalty free from Prixabay. You can find them here: 
[Logo, questionmark](https://pixabay.com/sv/illustrations/fr%C3%A5getecken-alfabet-fr%C3%A5gande-font-3246711/)

[Background image](https://pixabay.com/sv/photos/l%C3%B6v-v%C3%A4xt-torr-falla-hortensia-8390274/) 

The Faveicon was created through this site:[Faveicon](https://realfavicongenerator.net/)

### Code
This YouTube tutorial gave me inspiration and ideas on how I wanted Quiztime to turn out. 
[Youtube Tutorial](https://www.youtube.com/watch?v=riDzcEQbX6k)