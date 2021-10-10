# Introduction

Secret Sauce is a community for Sauce customers to share best practices, network with peers, and provide feedback to help us provide ever-increasing value to you and your business. We understand that no one knows Sauce better than those who are using it every day, and we wanted to create a community where our most active users can interact.

![](https://images.ctfassets.net/czwjnyf8a9ri/5Zf1PeVgCvHUJ9wplGPFWl/c01943960c92c7de9dadb66da08ea61c/SL_Secret_Sauce_Rebrand-01__1_.png?fm=webp&w=800)

## Goals

This repository has to goal, fulfill the next points:

1. Login with a valid user.
   Expected: Validate the user navigates to the products page when logged in.
2. Login with an invalid user.
   Expected: Validate error message is displayed.
3. Logout from the home page.
   Expected: Validate the user navigates to the login page.
4. Sort products by Price (low to high).
   Expected: Validate the products have been sorted by price correctly
5. Add multiple items to the shopping cart.
   Expected: Validate all the items that have been added to the shopping cart.
6. Add the specific product ‘Sauce Labs Onesie’ to the shopping cart.
   Expected: Validate the correct product was added to the cart.
7. Complete a purchase.
   Expected: Validate the user navigates to the order confirmation page

## Installation:

what will you need to run this repository:

- Download [Visual Studio Code](https://code.visualstudio.com "Visual Studio Code")
- run: npm install
- run:npm install [Testcafe](https://testcafe.io "Testcafe")
- run: npm install [dotenv](https://testcafe.io/documentation/402802/recipes/configuration/access-environment-variables-in-tests "dotenv")
- run: npm install --save-dev multiple-cucumber-html-reporter [JSON TestCafé Reporter](https://www.npmjs.com/package/testcafe-reporter-cucumber-json "JSON TestCafé Reporter")
- run: npm install --save testcafe-reporter-cucumber-json [To generate the HTML report](https://www.npmjs.com/package/testcafe-reporter-cucumber-json "To generate the HTML report")

Clone the repo into your local machine:
`https://github.com/Karenco1014/SQA_Challenge.git`

- cd SQA_Challenge
- npm run test:report
- npm run createReport
