# Amazon-Clone
This is a simple Amazon-clone react web app built with Firebase as a backend with Cloud Functions and Stripe API that include user authentication, payment processing via Stripe, storing order data into the Firestore cloud storage functionalities.

The deployment page without the backend (the page does not handle processing): https://challenge-f565e.web.app/.

__To test the functionality of handling processing orders__: follow the instruction below to experience the full app.

# Installation
Clone and install for the frontend section:
```
git clone https://github.com/hoang-ph/amazon-clone.git
cd amazon-clone
npm install
npm start
```
The website is served at localhost:3000 similar to the deployment web app as mentioned above.

Install the backend section:
```
cd functions
npm install
firebase serve
```
The firebase would simulate the backend server on the cloud and the processing functionaility of the app should be usable.

# Landing page
![](https://github.com/hoang-ph/amazon-clone/blob/main/images/home.PNG)

# Checkout page
The checkout page 
![](https://github.com/hoang-ph/amazon-clone/blob/main/images/checkout.PNG)

# Order history page
![](https://github.com/hoang-ph/amazon-clone/blob/main/images/orders.PNG)
