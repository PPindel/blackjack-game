# BLACKJACK GAME

![image](https://user-images.githubusercontent.com/114284732/206716068-2dc16cf3-eda1-4c52-9807-063a97b12b6a.png)

# Repository
https://github.com/PPindel/blackjack-game

# Live Website
https://ppindel.github.io/blackjack-game/

Portfolio Project 2

# Author
Przemyslaw Pindel

# Project Overview

![image](https://user-images.githubusercontent.com/114284732/206716193-f6232534-36b5-4ae0-ad9f-b14c6b544e2f.png)

Blackjack Game is just a simple, relaxing card game perfect for long winter evenings. Get yourself a cup of hot chocolate and try your luck against the computer!

## Table of Contents
- [BLACKJACK GAME](#blackjack-game)
- [Repository](#repository)
- [Live Website](#live-website)
- [Author](#author)
- [Project Overview](#project-overview)
  * [Table of Contents](#table-of-contents)
- [UX](#ux)
  * [Target Audience](#target-audience)
  * [Project Goals](#project-goals)
  * [User Stories](#user-stories)
    + [As a customer I expect:](#as-a-customer-i-expect-)
    + [As a developer I expect:](#as-a-developer-i-expect-)
  * [Design Choices](#design-choices)
    + [Colors](#colors)
    + [Typography](#typography)
    + [Animations and Transitions](#animations-and-transitions)
  * [Design Elements](#design-elements)
  * [Wireframes](#wireframes)
    + [Features](#features)
  * [Implemented Features](#implemented-features)
  * [Future Features](#future-features)
- [Testing](#testing)
  * [Validation Testing](#validation-testing)
    + [CSS Validation](#css-validation)
    + [HTML Validation](#html-validation)
    + [Javascript Validation](#javascript-validation)
  * [Compatibility and Responsive Testing](#compatibility-and-responsive-testing)
  * [Manual Testing](#manual-testing)
    + [Defect Tracking](#defect-tracking)
    + [Defects of Note](#defects-of-note)
  * [Outstanding Defects](#outstanding-defects)
  * [Accessibility](#accessibility)
    + [Keyboard Navigation](#keyboard-navigation)
- [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
- [Deployment](#deployment)
  * [Run Locally With GitPod](#run-locally-with-gitpod)
  * [Deploy to GitHub Pages](#deploy-to-github-pages)
  * [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# UX
## Target Audience
The game is aimed at people who don't have enough free time to learn complicated rules. It is simple in its construction, the rules are widely known and most users will have no problem understanding it.

## Project Goals
- Goal of this project is to provide relaxing entertainment for a user
- Nice to look warm design combined with classic card game
- With Blackjack Game, you can satisfy your gambling need safely (without the risk of losing money).

## User Stories
### As a customer I expect:
- clear look
- simply navigation
- easy to read and functional content
- the feeling of using a premium product

### As a developer I expect:
- easy to read code
- hassle-free implementation of new features
- simple adding of new content at the request of the owner

## Design Choices
### Colors

Contrasting theme idea - wooden table in a warm and sunny room.

![image](https://user-images.githubusercontent.com/114284732/206725918-884081b0-e7fa-4fc0-98dd-5a8da419346b.png)

### Typography
Used fonts: Electrolize and Oleo Script - elegant and easy to read.
Font style and size were selected to ensure the best readability for the user.

### Animations and Transitions
Buttons are getting bigger and highlighted when hovered, getting smaller when pressed down:

![image](https://user-images.githubusercontent.com/114284732/206765001-2d6430bd-c156-45a0-8a1d-4b0a03ab34ab.png)
![image](https://user-images.githubusercontent.com/114284732/206765052-607a3a0c-f1f9-4d5e-9a3b-bd011b3bb611.png)
![image](https://user-images.githubusercontent.com/114284732/206765243-73a33f85-3e2a-414f-b791-636525569097.png)

## Design Elements

The fully responsive design of each card (HTML and CSS built, no images to improve responsiveness):
![image](https://user-images.githubusercontent.com/114284732/206766312-3012e465-8ccf-440e-9b7f-d2eca159c70c.png)

Custom modals instead of common alarms at the end of the deal:

![image](https://user-images.githubusercontent.com/114284732/206765578-41ff10fb-92a6-4a79-8659-b30d3a2e207d.png)
![image](https://user-images.githubusercontent.com/114284732/206765420-54ef6add-c682-4e87-9333-fbd3d112f72d.png)
![image](https://user-images.githubusercontent.com/114284732/206765464-547e7e25-7cfb-45a7-a9bc-462ab2e73a05.png)
![image](https://user-images.githubusercontent.com/114284732/206765500-bee3da79-b6a7-4454-b2d7-2c3f0fe657e5.png)

## Wireframes
![image](https://user-images.githubusercontent.com/114284732/206768461-fc50038b-8df2-4c5d-8867-13b22fe720ac.png)

### Features
## Implemented Features
- Easy to navigate, simple one-page design with semantic construction - header, main section, and footer:

    ![image](https://user-images.githubusercontent.com/114284732/206769803-27f99f5d-86e2-4650-ae18-4b0c2b926ea3.png)
    
- Live score counter:

    ![image](https://user-images.githubusercontent.com/114284732/206769902-3b78b4f0-1cef-4afd-9d75-467477e67ea6.png)
    
- Simple AI implemented for computer opponent so each game is exciting and satisfying:

    ![image](https://user-images.githubusercontent.com/114284732/206770764-4d6263a5-8ed6-4dac-9d28-04721e3f4521.png)
    
- Dynamic game interface with hiding buttons:

    ![image](https://user-images.githubusercontent.com/114284732/206771585-45800f1d-9782-45ca-b827-9c08e9076393.png)
    ![image](https://user-images.githubusercontent.com/114284732/206771623-20fb5019-5f66-4e42-9f77-f64c5a29ce1d.png)

- Animated buttons:

    ![image](https://user-images.githubusercontent.com/114284732/206770118-091bf293-d822-4bb9-9dbc-4366758223f3.png)

- Big points are stored locally in JSON file so the user doesn't lose progress after closing the game tab:

    ![image](https://user-images.githubusercontent.com/114284732/206770945-c94f5939-c496-4cb5-8a96-d85ca2cc5af5.png)

- Instructions on how to play are hidden in pop up modal:

    ![image](https://user-images.githubusercontent.com/114284732/206770252-6630d7fb-4ebe-4d99-a4c3-ba1ff848903a.png)
    ![image](https://user-images.githubusercontent.com/114284732/206770296-2adfafac-c1b4-4642-86b6-6aba35949c06.png)

- Modals instead of alarms:

    ![image](https://user-images.githubusercontent.com/114284732/206770419-55169279-2003-498b-a294-47113d758acd.png)
    
- Info about missing Java Script:
    ![image](https://user-images.githubusercontent.com/114284732/206769622-02d53598-a57c-40e9-b185-a14c0ecdf297.png)

- Custom 404 page:
    ![image](https://user-images.githubusercontent.com/114284732/206769154-a6df8ff6-d40f-4813-9ae2-c5f67ae07c60.png)

## Future Features
The plan for the next updates is to add virtual currency and implement a betting system for each deal.

# Testing
The site was tested in 4 browsers for Windows PC - Chrome, Firefox, Edge, and Opera. No issues were detected. Safari browser test passed - no issues detected. Mobile browsers tested - Chrome, Firefox, Samsung browser - no issues detected. The site is fully responsive for every size device.
My friends helped me a lot with game testing so I can assure you that the current version is free of bugs, responsive, and it's a lot of fun to play.

## Validation Testing
### CSS Validation
No errors were found in the style.css file:
![image](https://user-images.githubusercontent.com/114284732/206774422-d756cce1-387f-474b-bdf0-787850aef845.png)

### HTML Validation
No errors in the index.html file:
![image](https://user-images.githubusercontent.com/114284732/206774814-4e8872a2-edce-4ae7-952a-26f9eb1be7bb.png)

No errors in the 404.html file:
![image](https://user-images.githubusercontent.com/114284732/206775026-74de4ed1-67b4-48c4-b19c-048db28444cf.png)

### Javascript Validation
No errors in JS files (script.js and constants.js combined):
![image](https://user-images.githubusercontent.com/114284732/206775994-9b1b0249-6386-485f-bb50-06617539817c.png)

## Compatibility and Responsive Testing
As the biggest market share in Ireland belongs to Chrome and Safari, I focused on these two browsers and didn't forget about others too.

Samsung S22 Ultra:

![image](https://user-images.githubusercontent.com/114284732/206803649-953aa452-07e0-4ecc-9f48-48f8253aa6c1.png)

Samsung Galaxy A10:

![image](https://user-images.githubusercontent.com/114284732/206803866-77c11274-3ecf-409b-89bc-6ead068a90fc.png)

Redmi Note 11:

![image](https://user-images.githubusercontent.com/114284732/206803987-6c5a6768-3608-486e-ae9d-c28ad51084da.png)

iPhone 14 Pro Max:

![image](https://user-images.githubusercontent.com/114284732/206804113-afb38900-0652-49f7-b407-84bbdc3e88c3.png)

iPhone 8:

![image](https://user-images.githubusercontent.com/114284732/206804226-12118111-4084-4352-bf50-202c55f79f3d.png)

Ipad Pro 12.9:

![image](https://user-images.githubusercontent.com/114284732/206804368-5e56d308-ba31-4cfa-8789-d0ae23fe9862.png)

Mac:

![image](https://user-images.githubusercontent.com/114284732/206804502-000b2fed-e69b-4e16-840d-6dfe733bb29a.png)


## Manual Testing
https://docs.google.com/spreadsheets/d/17U5ND_qIVSv95PoQ_jnpY4RGTwZ9w-D3pBOQB5yGjtA/edit?usp=sharing

![image](https://user-images.githubusercontent.com/114284732/206879701-2dd1f02e-d479-4d59-9daf-1a348a6988eb.png)

### Defect Tracking
- Fix bug - new game button text overflow with button borders - detected and fixed on 28.11.2022
- Fix bug when 1st Ace for the computer was counted as 11 when its value was 1 - detected and fixed on 29.11.2022
- Fix bug when Ace value was changed to 1 until page refresh after receiving 2 Aces in starting hand - detected on 29.11.2022 / fixed on 02.12.2022

### Defects of Note
The most frustrating bug to find and remove was the situation when the computer was losing the game and didn't take another card (when he clearly could take one more to win).
Also implementing the variable value of Ace (1 or 11) was a nightmare at the beginning and caused a lot of defects.

## Outstanding Defects
This is possible to break the game score if the user goes to local storage files and changes the values stored for something not expected. Need to implement function preventing manipulation with local storage file.

## Accessibility
Mobile version:

![image](https://user-images.githubusercontent.com/114284732/206808309-a7d2fe28-4c0f-48eb-9948-d3ac24146164.png)

Desktop version:

![image](https://user-images.githubusercontent.com/114284732/206808378-2d7895de-a9c7-4010-baf2-6e50f3d9aa6f.png)

The accessibility score for mobile devices is 97 points due to the warning for color contrast, however, I've tested the game on multiple devices and the color contrast is ok in my opinion (my testers (and friends :)) agree with me). For the desktop, it's 100. Aria labels and titles are used in this project.

### Keyboard Navigation
The game is keyboard friendly - all navigation tests passed. I've used the focus function to bring focus to key buttons and implemented a function to close modals with any button on the keyboard down.

![ScreenRecorderProject1](https://user-images.githubusercontent.com/114284732/206880887-ca21fc7f-8c07-4584-98b6-c7cc239f44d0.gif)

# Technologies Used
## Languages
- HTML
- CSS
- Java Script

## Frameworks, Libraries & Programs Used
List out the tools you used:
- Balsamiq
- coolors.co
- Font Awesome
- GitPod
- GitHub
- Google fonts

# Deployment
## Run Locally With GitPod

To run locally with GitPod we need to type the below command in the GitPod terminal:

![image](https://user-images.githubusercontent.com/114284732/206723554-9d4db244-05a7-43cc-92bd-d4e262d1a89e.png)

Then open the link with port 8000 in our browser:

![image](https://user-images.githubusercontent.com/114284732/206723687-8373e2f5-1800-495b-b206-014ff3309488.png)

## Deploy to GitHub Pages

The site was deployed to GitHub pages:

1. Go to the GitHub EngineBoostGarage repository then open settings:

  ![image](https://user-images.githubusercontent.com/114284732/206722224-6f434a85-67f5-405a-9130-c4515f36903b.png)
    
2. Select pages:
  
  ![image](https://user-images.githubusercontent.com/114284732/206721998-3fbd6628-b6e8-4c34-8713-0451da404950.png)
    
3. Choose a source to deploy from a branch, then select the main branch and save:

  ![image](https://user-images.githubusercontent.com/114284732/206722345-3bda90fc-6b09-456d-b47b-e59ac2525c55.png)
  ![image](https://user-images.githubusercontent.com/114284732/206722519-d912b4a6-7129-487e-bde7-deed4d8ed2e6.png)

## Credits
- https://learn.codeinstitute.net/ - Love Maths project and other lessons
- https://flaviocopes.com/how-to-shuffle-array-javascript/ - shuffling array function
- https://stackoverflow.com/ - code inspirations
- https://www.w3schools.com/ - code inspirations

## Content
- https://www.cs.mcgill.ca/~rwest/wikispeedia/wpcd/wp/b/Blackjack.htm - how to play section

## Media
- https://www.pexels.com - Ace of spades logo img and favicon
- https://fontawesome.com/ - icons
- https://fontjoy.com/ - font pairing
- https://coolors.co/ - colors combination

## Acknowledgments

Big thanks to Malia Havlicek - Code Institute mentor for her ideas and support in this project!
Also, I would like to thank all my friends for live testing the game!

- https://gs.statcounter.com/ - browser market share for Ireland
- https://www.browserstack.com/ - Safari browser testing tool
- https://ui.dev - responsiveness testing
- https://validator.w3.org/ - HTML validator
- https://jigsaw.w3.org/ - CSS validator
- https://jshint.com/ - JS validator
- https://web.dev - performance testing
