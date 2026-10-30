# Project Title: Pick-Me-Up Quiz :love_letter: #
# Welcome #
The [Pick-Me-Up Quiz](https://a-kiera.github.io/pick-me-up-quiz/) is live and perfect for those of us who need a little extra lovin' every once in a while.

The world is your oyster, diva :sparkles:

And if you ever forget it - come back to this quiz and be reminded.

# Description #
This site is the third project for my course with Learning People UK, where I was tasked with designing an online interactive quiz using HTML, CSS and JavaScript.

Creative liberty was given as to the subject matter and so I thought why not make a a quiz that has the purpose of providing users with a positive morale boost. 

The Pick-Me-Up Quiz can be used by all users although the target audience is primarily gen z social media users. As such, the site is designed with a colourful (*cough* girlypop *cough*)palette and an ironic tone.

# Features and Errors #
![chrome-full](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/chrome-full.png)

*The page is fully responsive, with the quiz container and rules dialog adapting to various screen sizes.
*Tested on chrome:

![Chrome-flex-quiz](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/chrome-flex-quiz.png)
![chrome-full-quiz](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/chrome-full-quiz.png)
![chrome-full-rules](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/chrome-full-rules.png)

*And tested on microsoft edge too:

![flex-edge](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/flex-edge.png)
![full-edge](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/full-edge.png)

*HTML and CSS codes were validated using [W3C](https://validator.w3.org/#validate_by_input) and [W3CCSS](https://jigsaw.w3.org/css-validator/validator): 


![validate-css](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/validate-css.png)
![validate-html](https://github.com/a-kiera/pick-me-up-quiz/blob/main/assets/Documentation/validate-html.png)

*I encountered an error that prevented the initial javascript commit from working, in which I used .`getElementsByClassName` for the variable `quizContainer` and the console error came up null. This was resolved by choosing `.querySelector` instead.

*Unfortunately, due to time constraints the script is incomplete and so the quiz only has partial functionality, with the start button activating and revealing only the question and answer template thus far. 

*The main methods and properties used in the script file so far are: `document.getElementById, .innerHTML, .addEventListener`.

*.getElementById: returns an element with a specified value and will return `null` if the element does not exist or cannot be found.

*Example in script.js: `const rulesButton = document.getElementById('rulesbtn');`

*.innerHTML: a property that can set or return an HTML content of an element. There are different variations, like `innerText` and `innerContent`.

*Example in script.js: `document.getElementById('count-questions').innerText = 'Questions left: ' + totalQuestions;` which is used to access the question counter and create a formula where the total questions are added to the text.

*.addEventListener: an incredibly useful method that 'listens' for the movements of a user on the screen and, according to the action, can attach an event handler

*Example in script.js: `nextButton.addEventListener('click', () => { currentQuestion++;});` which means that mean a user clicks the 'next' button the currentQuestion variable increments by 1, and so makes it useful to proceed to the next question.

# Future Improvements #
- [ ] Review, add and adjust JavaScript in order to complete functionality of quiz and improve my own working knowledge of the language
- [ ] Add "sassy" responses to each of the answer options
- [ ] Light/dark mode toggle for user comfort
- [ ] Add media, e.g. gifs, to make site more engaging for users

# Technologies #
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used to build the structure of the site.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) was used to add styles and adjust layout.
* [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) was used to arrange elements symmetrically in columns.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) was used to make the site interactive.
* [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
* [Git](https://git-scm.com/) was used for the version control of the website.
* [GitHub](https://github.com/) was used to host the code of the website.

# Deployment #
## Deployment to GitHub Pages ##
The site was deployed to GitHub pages. The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Main Branch, then click "Save".
* The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [https://a-kiera.github.io/pick-me-up-quiz/]

# Contact #
Let me know if you have any feedback or suggestions.
Thank you for visiting the [Pick-Me-Up Quiz] diva!!! 

# Credits # 
External tutorials used for project:
W3C Flexbox - [https://www.w3schools.com/css/css3_flexbox_responsive.asp]
HTML dialog - [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog]
Media Queries - [https://www.w3schools.com/css/css_rwd_mediaqueries.asp] and [https://www.youtube.com/watch?v=K24lUqcT0Ms]
CSS Box Shadow templates - [https://getcssscan.com/css-box-shadow-examples]

Credits to:
Star quiz - [https://github.com/Allwrightben/starquiz]
An example quiz given to us, which was used as a guide to tackle answer grids and proper container styling.


# License #
MIT License

Copyright (c) [2026] [Amy Kiera Macleod]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.