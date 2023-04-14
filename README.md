# Moonberry

Moonberry is an ecommerce site where users can browse and shop for aesthetic furniture. Users can create an account to interact with products by adding or removing them to their cart and purchasing them.

All features update the page the user is on without a refresh of the page through use of the Redux store.

## Live Site

[https://moonberry.fly.dev/](https://moonberry.fly.dev/)

## Tech Stack

<img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/redux.svg" alt="Redux" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/express.svg" alt="Express" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg" alt="MongoDB" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg" alt="Git" width="40px" height="40px"><img src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="Visual Studio Code" width="40px" height="40px">

# Features

## Home Page

![Home Page](./images/homepage.png)

## User Authentication

Users can create a new account to sign up or log into an existing account.

![Sign Up Form](./images/signup.png)
![Login Form](./images/login.png)

Unregistered users can browse products but will be directed to login when trying to checkout.

![Unregistered User](./images/unregistered_user.gif)

Once the user is logged in, they can view all items they had saved to their cart.

![Registered User](./images/registered_user.gif)

## Products

Users can see all available products in the shop. They can also click to view an individual product to read the description and add the item to their cart.

![Products Display](./images/products.gif)

## Cart

A user can view all the items in their cart. They can also update the quanities of the items, remove items, and see a real-time update of their order summary.

![Cart Display](./images/cart.gif)

## Checkout

Clicking checkout will direct a user to fill out a shipping form and payment information. They will also be provided with a summary of their order including:

- name of items
- quanitity of items
- shipping price
- tax price
- total price

![Checkout Form](./images/checkout.gif)

## Confirmation

Users will see a confirmation receipt with the details they entered and an overview of their order.

![Confirmation Receipt](./images/confirmation.gif)
