#Lessons

1.  Introduction to the course
2.  Install development tools
3.  Create Angular App
    1.  Create project folder
    2.  Install angular/cli
    3.  create app as frontend
4.  Add Header
    1.  Generate Component
    2.  Add html
    3.  Add CSS
5.  List Foods

    1.  Crete Food models
    2.  Create data.ts

        1.  Add Sample foods

    3.  Add images to asset folder
    4.  Create food service
    5.  Create Home component
        1.  Add ts
        2.  Add css
        3.  Add html

6.  Search
    1.  Add method to Food Service
    2.  Add search route
    3.  Show search result in Home component
    4.  generate search component
        1.  Add to Home component
        2.  Add ts
        3.  Add html
        4.  Add css
7.  Tags Bar

    1.  Create Tag Model
    2.  Add Sample tags to data.ts
    3.  Food service
        1.  Add get all Tags method
        2.  Add get all foods by tag method
    4.  Add tags route
    5.  Show tag result in Home component
    6.  Generate Tag component
        1.  Add to Home component
        2.  Add ts
        3.  Add html
        4.  Add css

8.  Food Page
    1.  Add method to food service
    2.  Generate Food page component
        1.  Add Route
        2.  Add ts
        3.  Add html
        4.  Add css
    
9.  Cart Page
    1.  Create cartItem module
    2.  Create cart module
    3.  Generate cart service
    4.  Add to cart button in Food Page
    5.  Generate cart page component
        1.  Add Route
        2.  Add ts
        3.  Add html
        4.  Add css
    
10. Not Found !
    1.  Generate    Component
        1.  Add ts
        2.  Add html
        3.  Add css
        
    2.  Add to pages
        1.  Home Page
        2.  Food Page
        3.  Cart Page
    

11. Connect to backend
    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  create .gitignore
    6.  Copy data.ts to backend/src 
    7.  npm install express cors
    8.  create server.ts
        1.  install @types
        2.  Add APIs
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontejd
    11. Add HttpClient module
    12. Update food service
    
12. login page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts
        3.  Add html
            1.  Import Reactive Form module
        4.  Add css
    2.  Add login API
        1.  Use JSON
        2.  Add JSON web token
        3.  Test Using postman
    3.  Generate User Service
        1.  Generate user model
        2.  Add User subject
        3.  Add login method
            1.  Add user urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toaster
                1.  Import module
                2.  Import BrowserAnimationModule
                3.  Add styles in angular.json
            4.  Add to header
        4.  Add Local Storage methods
        5.  Add Logout method
            1.  Add to Header
    
13. Make Components for login page
    1.  Input container
    2.  Input validation
    3.  Text Input
    4.  Default button
    
14. Connect Login API to MongoDB Atlas
    1.  Moving API into routers
    2.  Create MongoDB Atlas
    3.  Create .env file
    4.  Install
        1.  mongoose
        2.  dotenv
        3.  bcryptjs
        4.  jsonwebtoken
        5.  express-async-handler
    5.  Connect to MongoDB Atlas
    6.  Use MongoDB instead of data.ts in APIs
    
15. Register User
    1.  Add register api
    2.  Add register service method
    3.  Add register link
    4.  Add register Component
    
16. Loading!
    1.  Add Image
    2.  Add component
    3.  Add Service
    4.  Add Interceptor
    
17. Checkout Page
    1.  Create order Model
    2.  Create checkout page component
        1.  Add to Router
    3.  Add user to User service
    4.  Add cart to Cart service
    5.  Create order items list component
    6.  Adding map to the checkout page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add html
            4.  Add css
        4.  Add Auth guard
    
    7.  Save Order
        1.  Add order Model
        2.  Add order status Enum
        3.  Add auth middleware
        4.  Add order router
            1.  Add create API
        5.  Add order Urls to url.ts
        6.  Add order service
            1.  Add order crete method  
        7.  Add Auth interceptor
    
    

    
    
    

