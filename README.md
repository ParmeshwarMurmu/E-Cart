# E-Cart


E-Kart is a dynamic eCommerce web application created with a tech stack comprising HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. This is an application where users can purchase different products with different categories. E-Cart brings an immersive shopping experience, primarily centered around a diverse range of clothing products. It was an individual Project completed within 25 days.

## Project Type
Full Stack


## Deployed App
Frontend: https://e-cart-blue.vercel.app

Backend: https://e-cart-5jh7.onrender.com

## Table of Contents

- [Installation & Getting Started](#installation--getting-started)
- [Usage](#usage)
- [Authenticated Pages](#authenticated-pages)
- [API Endpoints](#api-endpoints)
- [Technology Used](#technology-used)

## Directory Structure

-**E-Cart/**
- **backend/**
   - **AllRoutes/**
      - allProductRoute.js
      - userRoute.js
     - womenRoute.js
     - womenCategoryRoute.js
     - shoesRoutes.js
     - categoryRoute.js
     - singleProductRoute.js
     - shoeCategoryRoute.js
   - **middlewares/**
      - auth.js
      - menDataCheck.js
      - womenDataCheck.js
   - **Model/**
     - BaseScherma.js
     - CartSchema.js
     - MenSchema.js
     - OrderSchema.js
     - ShoeSchema.js
     - UserSchema.js
     - WomenSchema.js
   - index.js
   - db.js

- **frontend/**
   - **public/**
   - **src/**
      - **Admin/**
          - AddItem.jsx
          - AdminHome.jsx
          - AdminLogin.jsx
          - AllOrderComp.jsx
          - AllOrder.jsx
          - AllProductsCard.jsx
          - MenModal.jsx
          - ShoeModal.jsx
          - WomenModal.jsx
      - **Components/**
      - **Context/**
      - **Images/**
      - **MenCompSlide/**
      - **Redux/**
      - **Routes/**
      - **SlideShows/**
      - App.js
      - index.js

## Features:-
```
✅ CRUD Operations GET POST PUT PATCH DELETE
✅ Authentication
✅ Authorization
✅ Slide Show 
✅ Sorting
✅ Filtering
✅ Pagination
✅ Deleting
✅ Text Search
✅ Responsive
```

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running.

Step 1. Clone this Repository using Command
```bash
git clone Repository Url
```

Step 2. Install all the necessary dependencies

## frontend
```bash
cd frontend
npm install
```
this will install all the necessary dependencies on your frontend

## backend
```bash
cd backend
npm install
```
this will install all the necessary dependencies on your backend

Step 3. Create .env flie inside your backend folder and add below informations
```bash
mongoUrl = "mongodb+srv://YOUR EMAIL AND PASSWORD OF MONGO ATLAS@cluster0.nnesbwa.mongodb.net/?retryWrites=true&w=majority"
PORT = 8000
SECRET_KEY = 'ACCORDING TO YOU'

```
Step 4. Start your backend server. Open terminal and write the below commands
```bash
cd backend
npm run server

```


## Usage
Below are some instructions and examples on how to use this project.

## Sign Up

Step 1. If you are a new user and you have not registered then in order to purchase any product you need to create your account first and then login to your account.

![SignUp Page](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/fa4e882c-34be-4dda-b663-9c08167c6c6e)

**Note** *** After successfull registration  you will see a successfull toast with User Register message.



## Login

Step 2. After successfull Registration log in to Your account and use the same credential used at the time of registration.

![Login Page](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/24c98ada-68ef-4516-a05a-2e820dd41230)


**Note** *** After successfull Login  User is going to see its profile at top right corner of the application.






## Home Page
This is the home page and user can see latest offers going on, latest trends, new Arrivals in all categories etc.

![E-Cart Home Page](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/224f24ff-c1a6-46b8-994c-9caf643db428)

## Home Product Section
![Product Section](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/1cd3148d-c739-47b3-b916-853b1a17066e)


## Product Page

This is the product page where user can see all product and sort the product according to user choice. User can sort the product according to their categories, brand, color and price.

Also user can see product details and Add to cart Button where user can add product to thier cart.

![E-Cart Product Page](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/34b1effe-9a6a-4309-85e9-43c538417fa4)


## Single Product Page

This is the Single product page where users can see the product details in a detailed way. Users can see different pictures of the product and user can select product sizes,  and the user can also find some Similar product Recommendations.


![Single Product Page](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/bf9c0f76-beec-4aa5-a21f-2b0e39a96f28)

##  Search Bar

If a user wants to browse or wants to search any products then the user can find a search bar below the navbar and user can enter the query and get the results.
Also users can add products to thier cart .

![Search Categories](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/3ca383d6-cf46-4518-90bc-b9f5cb2d20ee)



# User Cart Section
![user Cart section](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/b319832e-2e2d-4b06-a1ce-ab9a1cdf95a0)



# Footer Section
![Footer Section](https://github.com/ParmeshwarMurmu/E-Cart/assets/121368970/57921292-250e-4279-bd5e-a4fac464817b)



## Authenticated Pages

- User Cart Page
- User Order Page
- User Profile Page

**Note** *** In order to access these pages you need to login first. Without authentication you cannot access this page.


## Technology Used

List and overview of the technologies used in the project.

**frontend**
- HTML
- CSS
- javaScript
- React
- chakraUi
- Redux

**backend**
- Node.js
- Express.js


**Database**
- MongoDB


