# Getting Started with Create React App
install git repository from my git profile
run command:
git clone https://github.com/rameshmahato111/foodorder.git

 # To install all the package.json
 run command:
 npm install or npm i

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

## Contact Component, Login Component, Register Component
 1.used formData api or hook to get data from the contact form. and useState() is not required.
 2. used react querty to connect with server api.
 
 # To fetch data from the server
 react query is used.
 1. to install react query run command: npm i react-query

 # react icons for the icons
  install runs the command: npm install react-icons --save 

  # redux and redux toolkit 
  1. to manage the complex state management 
   install run command:  npm install @reduxjs/toolkit

# react-router-dom
there no built in router in react so use react-router-dom
install run command npm i react-router-dom or npm install react-router-dom

# react-helment
to manage the meta data 
install run commnad npm i react-helmet

# react-toastify
to show the pop up notification to the user
install run command: npm i react-toastify

# rechart js
for vizualization
install run command : npm install recharts
# yup and formik
client side validation
install run command: npm i yup, npm i formik or use npm i yup formik

# axios
use to make http request from browser
install run command npm i axios

# prettier 
to format the codes user prettier
install run command npm i prettier
# create .prettierrc file to the manin directory
# .prettierignore for the gitignore


# Login Component and Login button

1. when user is logged in, redirect to user profile and order page
2. user can edit and cancel the order 
3. to mock up link is used redirecting to the user profile page
4. Later can make api request and redirect accordingly.


# Product detail page

1. order now button when click, it check if the user is logged in or not
2. if logged in order modal pop up and can make order accordingly
3. if the user is not logged in it redirect to the login page.
4. for now checking login is commented can uncommnet and check the functionality.

# Menu navbar bar display all the products for now

1. react query is used to fetch data
2. click each product to  view product details and make order.

# dashoboard 

1. we can filter user id and order id
2. fiter by status delivered, pending, cancelled

3. rechart js is used to visualize the data 
4