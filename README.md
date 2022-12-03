# BLACKJACK GAME

![image](https://user-images.githubusercontent.com/114284732/205451278-ef7537f1-c53f-43a4-97f5-6fd1f31eb790.png)

https://ppindel.github.io/blackjack-game/

Portfolio Project 2

# Author
Przemyslaw Pindel

# Project Overview

![image](https://user-images.githubusercontent.com/114284732/205451310-5ae7872c-40e5-43d0-bc52-842c86e28672.png)

Blackjack Game is just a simple, relaxing card game perfect for long winter evenings. Get yourself a cup of hot chocolate and try your luck against computer!

## Table of Contents

- [ENGINE BOOST GARAGE](#engine-boost-garage)
- [Author](#author)
- [Project Overview](#project-overview)
  * [Table of Contents](#table-of-contents)
  * [UX](#ux)
    + [Project Goals](#project-goals)
    + [User stories](#user-stories)
    + [Design choices](#design-choices)
      - [Colors](#colors)
      - [Typography](#typography)
      - [Images](#images)
      - [Animations and Transitions](#animations-and-transitions)
    + [Wireframes](#wireframes)
    + [Features](#features)
      - [Implemented Features](#implemented-features)
      - [Future Features](#future-features)
  * [Testing](#testing)
    + [Validation Testing](#validation-testing)
    + [Cross Browser and Cross Device Testing](#cross-browser-and-cross-device-testing)
    + [Manual Testing](#manual-testing)
    + [Defect Tracking](#defect-tracking)
  * [Accessibility](#accessibility)
    + [Lighthouse Audits](#lighthouse-audits)
    + [Keyboard Navigation](#keyboard-navigation)
  * [Deployment](#deployment)
  * [Credits](#credits)
    + [Content](#content)
    + [Media](#media)
    + [Acknowledgments](#acknowledgments)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## UX
### Project Goals

As I mentioned before, the website design is not accidental. It refers to popular icons, fit into the subculture of the tuning world, and targets adult users. Also provides a professional, aesthetic look so every customer will enjoy the clear design of the site.

### User stories

As a customer I expect:
- clear look
- simply navigation
- easy to read and functional content
- the feeling of using a premium product

As a developer I expect:
- easy to read code
- hassle-free implementation of new features
- simple adding of new content at the request of the owner

### Design choices

#### Colors

Contrasting theme idea - street lamps illuminate the night.

![obraz](https://user-images.githubusercontent.com/114284732/196186138-eda054be-7458-4715-b204-16a321b68256.png)

#### Typography

Exo, NTR - modern-looking fonts well reflecting the spirit of the content. A pairing recommendation is given by https://fontjoy.com/

![obraz](https://user-images.githubusercontent.com/114284732/195984131-8297294f-0247-42be-a26a-e2506bbf7ec8.png)

#### Images

The selected images are supposed to affect the imagination and give the feeling of high speed, great power, and beauty of cult cars.

![obraz](https://user-images.githubusercontent.com/114284732/195984159-127b5db9-ee8e-40ed-9e11-e9e538798c65.png)

![obraz](https://user-images.githubusercontent.com/114284732/195984218-6c720091-bd6c-405b-8b2e-10945e9a17fc.png)

![obraz](https://user-images.githubusercontent.com/114284732/195984280-261bf919-09e9-4ac1-9e5f-9fc947a53ae0.png)

![obraz](https://user-images.githubusercontent.com/114284732/195984291-b9154ce6-2198-41e7-8e57-737befb25f17.png)

#### Animations and Transitions

I didn't want to overwhelm the user with too many animation effects. In my opinion, it's very easy to distract a user from the main content by adding animations everywhere and finally it ends as a bad user experience. See below the effects I used:

- The current page is marked by underline

  ![obraz](https://user-images.githubusercontent.com/114284732/195984465-5da4950d-d984-4c7b-b743-27f341f66b1f.png)

- Hovering over the hyperlink element changes its color to yellow

  ![obraz](https://user-images.githubusercontent.com/114284732/195984528-64bb7c24-ca48-441b-b0c9-620875a4f220.png)

- simply animation is added to social media icons

  ![obraz](https://user-images.githubusercontent.com/114284732/195984602-33d5ecce-e159-485f-824a-8cd1eb1ade11.png) ![obraz](https://user-images.githubusercontent.com/114284732/195984612-97dee213-26d2-4899-b9c7-d1442865f0a0.png)

### Wireframes

- Home page for desktop:

  ![obraz](https://user-images.githubusercontent.com/114284732/195985585-af183e7f-86a9-494b-bf24-3260ea8c5867.png)

- Home page for mobile:

  ![obraz](https://user-images.githubusercontent.com/114284732/196673803-3cb4fac0-47f2-4038-9434-5a557eb15676.png)

- Gallery:

  ![obraz](https://user-images.githubusercontent.com/114284732/196673944-c77b7613-3235-4056-9e20-828d2d0fff27.png)

- Form:

  ![obraz](https://user-images.githubusercontent.com/114284732/196674086-de05a189-084c-494c-bb58-8ce9ce8bc3ac.png)

- Custom "thank you" and 404 error pages:

  ![obraz](https://user-images.githubusercontent.com/114284732/196674224-4f5bd11c-259c-4789-8f46-2aa27ccc98d6.png)

### Features

This project has implemented features:
- home page with an about as section and a motto that reflects the spirit of being a car enthusiast
- sticky nav bar after scrolling and fixed arrow in the bottom left corner to come back to the top
- projects page which contains a gallery with finished modifications and projects
- booking page contains a form where a user provides info about his car to get possible tuning options and dates available
- successful form submission is confirmed by "thank you message"
- custom 404 page
- responsive design with layout changing sections for smaller devices
- smooth scrolling

#### Implemented Features

- Favicon:
    
    ![obraz](https://user-images.githubusercontent.com/114284732/196194031-34c2e49f-4af0-41ac-b19a-f1d9ae4029c2.png)

- Header:

    all pages have the same header with the nav bar
    
    ![obraz](https://user-images.githubusercontent.com/114284732/196190106-a7a2514c-a7f6-4960-9b4d-de7a01d22344.png)

- Sticky nav bar after scrolling down:

    ![obraz](https://user-images.githubusercontent.com/114284732/196190396-c940c899-c4cf-4cb2-b705-782c85147fef.png)

    Navigates to the home page, projects gallery, and booking page.
    The current site is marked with an underline.

- Responsive about us section:

    ![obraz](https://user-images.githubusercontent.com/114284732/195986817-d9c1c7bd-97a0-430f-bbe4-95c10cd3333b.png)
    
    Short and consistent info about the company and services provided - hides an image for smaller devices to improve readability
    
    ![obraz](https://user-images.githubusercontent.com/114284732/196192369-87b1429d-ff04-49ab-bfa0-fb8cf2bb3c49.png)

- Responsive motto section:

    ![obraz](https://user-images.githubusercontent.com/114284732/195986898-16500dd5-90cf-4f4e-8045-1a06c133785e.png)
    
    Image of a beautiful car with a quote from one of the most recognizable icons of the car world - Jeremy Clarkson.
    This is not only business, this is our lifestyle. Display changes to block for devices under 1200px
    
    ![obraz](https://user-images.githubusercontent.com/114284732/196192486-ac42e987-6245-4aa9-a1e2-c1e63aabcc6f.png)

- Address and footer:

    ![obraz](https://user-images.githubusercontent.com/114284732/195987007-ccdec1ee-188d-4c5c-87d9-1a9ce37893dc.png)
    
    Address info on every page, a footer with stylized icons leading to social websites, and a small arrow in the bottom left of the page to easily go back to the top of the page with implemented smooth scrolling.

- Gallery:

    ![obraz](https://user-images.githubusercontent.com/114284732/195987111-70733fed-ddff-4043-8144-e81f0a421de7.png)
    
    Simple user and developer-friendly gallery. Readable, nice design and new projects can be added very quickly and easily.

- Form

    ![obraz](https://user-images.githubusercontent.com/114284732/195987157-6ce73cf6-dcba-42ec-96ec-34e8cd1bd471.png)
    
    Consistent form section with the cult car in the background. The button changes color on hover.
    
    ![obraz](https://user-images.githubusercontent.com/114284732/195987259-002a9853-5909-4eb4-8a0c-a535ba326f49.png)
    
- Thank you page:

    ![obraz](https://user-images.githubusercontent.com/114284732/195987274-a76b543c-52e8-43dc-9364-7d8659ae26d9.png)
    
    Informs user about successful query submission.
    
- Custom 404 error page:

    ![obraz](https://user-images.githubusercontent.com/114284732/196193826-2ed5072d-8767-41be-a5b9-a5aebb020569.png)
    
    404 error page to show a user that we have a sense of humor :)
    
#### Future Features

- page with optional tuning kits filtered by make, model, engine, and year of the car
- shop page to buy tuning accessories for DIY

## Testing

   The site was tested in 4 browsers for Windows PC - Chrome, Firefox, Edge, and Opera. No issues were detected.
   Safari browser test passed - no issues detected.
   Mobile browsers tested - Chrome, Firefox, Samsung browser - no issues detected.
   The site is fully responsive for every size device.

### Validation Testing
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
    ![obraz](https://user-images.githubusercontent.com/114284732/195988129-21d99b39-932f-4188-b3d8-dec7d48d36dc.png)

    
- [HTML Validator](https://validator.w3.org/)
    ![obraz](https://user-images.githubusercontent.com/114284732/195988176-125b9378-dd91-46eb-b148-e5c89363a234.png)


### Cross Browser and Cross Device Testing

As the biggest market share in Ireland belongs to Chrome and Safari, I focused on these two browsers and didn't forget about others too.

Iphone 13 Pro

![obraz](https://user-images.githubusercontent.com/114284732/196225788-99190dd4-5e28-400e-b5c0-6730382968d0.png)

Iphone 13 Mini

![obraz](https://user-images.githubusercontent.com/114284732/196225875-9dc14076-cc5b-4223-94d9-3e7d283a9b89.png)

Ipad Pro

![obraz](https://user-images.githubusercontent.com/114284732/196226324-4683503d-f58c-4f4d-9f60-6e2657cd9486.png)

Mac

![obraz](https://user-images.githubusercontent.com/114284732/196226731-5bf21342-0e49-4022-84b5-ece8a7bb9d07.png)

Samsung S22

![obraz](https://user-images.githubusercontent.com/114284732/196227115-a877fae0-3cd8-4708-a6e0-ccfdf512630e.png)

The site is fully compatible with all Windows, iOS, and Android devices using Chrome, Safari, Firefox, Edge, Opera or Samsung browser.

### Manual Testing

https://docs.google.com/spreadsheets/d/1m6Gz4TojGCkIW2e6Ml6owGv7Xzy-e8yM/edit?usp=sharing&ouid=112368290695905562039&rtpof=true&sd=true

### Defect Tracking

- Problem with empty space on the right side of the home page - tracked and fixed on 4th Oct 2022
- Problem with a too big margin above Nissan370z picture on home page - tracked and fixed on 7th Oct 2022
- Problem with displaying main div content of the home page for Opera browser - tracked and fixed on 7th Oct 2022
- Problem with displaying Nissan370z picture and quote for mobile devices - tracked and fixed on 7th Oct 2022
- Double </i> closing tags - tracked and fixed on 8th Oct 2022
- Too big margin for footer section (all devices) - tracked and fixed on 12th Oct 2022
- Duplicate ID in footer - tracked and fixed on 14th Oct 2022
- Bug with map display in booking.html page, no scroll option removed - tracked and fixed on 14th Oct 2022
- Small bug with too width nav bar (width changed from 100% to auto) - tracked and fixed on 17th Oct 2022

## Accessibility

Accessibility testing is aimed to make sure that those with visual or physical disabilities can still browse your website. Some users have had strokes or accidents that make it difficult to use a mouse so they use keyboard keys to tab through sites. Others use screen readers that rely on HTML tags to help the user navigate quickly through the site to find the information they want, others have color blindness or contrast issues. It's the law to provide services 
Here's a [site](https://www.w3.org/WAI/fundamentals/accessibility-intro/#:~:text=Accessibility%20is%20Important%20for%20Individuals%2C%20Businesses%2C%20Society,-The%20Web%20is&text=That%20is%2C%20the%20accessibility%20barriers,older%20people) where we can learn more about accessibility and the internet.
Engine Boos Garage site is designed to support users with reading difficulties.

### Lighthouse Audits

- Chrome Lighthouse tool for PC:

  ![obraz](https://user-images.githubusercontent.com/114284732/196223204-f3f09164-9caa-4afa-9ad6-aac00e48af5d.png)

- Chrome Lighthouse tool for Mobile:

  ![obraz](https://user-images.githubusercontent.com/114284732/196224190-20e5378e-753a-4fa2-8785-4720439aef52.png)


### Keyboard Navigation

The website allows a user to fully navigate with the Tab key.

## Deployment

The site was deployed to GitHub pages:

1. Go to GitHub EngineBoostGarage repository then open settings:

  ![obraz](https://user-images.githubusercontent.com/114284732/195993317-61729a82-8f91-438b-93c5-cc751428002f.png)
    
2. Select pages:
  
  ![obraz](https://user-images.githubusercontent.com/114284732/195993351-ee95f76f-48c1-4c01-9a6c-b6c0ede121a5.png)
    
3. Choose source to deploy from a branch, then select the main branch and save:

  ![obraz](https://user-images.githubusercontent.com/114284732/195993404-aa51e712-2ef2-4ead-87ee-6e7b98240704.png)

## Credits

- https://learn.codeinstitute.net/ - Love Running and Coders Coffeehouse projects helped me a lot to understand the main points of the good website
- https://stackoverflow.com/ - a great site for troubleshooting
- https://www.w3schools.com/ - gallery code inspiration
- https://fontjoy.com/ - font idea inspiration
- https://codepen.io/yuchehsieh/pen/ExaWvbe - sticky navbar feature

### Content

- https://quotefancy.com - Jeremy Clarkson's quote

### Media

- https://www.pexels.com/ - all images were taken from Pexels
- https://imagecompressor.com/ - image optimizer
- https://cloudconvert.com - jpg to webp image conversion
- https://fontawesome.com - icons
- https://google-map-generator.com/ - Google map iframe
- https://coolors.co/ - color palette generator

### Acknowledgments

Big thanks to Malia Havlicek - Code Institute mentor for her ideas and support in this project!
Also, I would like to thank all my friends for live testing the site!

- https://gs.statcounter.com/ - browser market share for Ireland
- https://www.browserstack.com/ - Safari browser testing tool
- https://ui.dev - responsiveness testing
- https://validator.w3.org/ - HTML validator
- https://jigsaw.w3.org/ - CSS validator
- https://web.dev - performance testing
