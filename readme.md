# API Blog
## Description
A node & express API to manage estate data.

## Dependences
- node 16.18.0
- npm v8.19.2
- mongodb v6.0.2

## Install project
1. Clone repository
```
git clone git@github.com:RgmDev/unir-node-mongodb-act8.git estate
```

2. Install dependencies
```
cd estate
npm install
```

4. Create .env file
Copy __.env.example__ to __.env__ and set up database variables
```
MONGO_URL="mongodb://localhost:27017/databaseName"
```

5. Run the project
```
npm run dev
```

6. Access to [localhost:3000](http://localhost:3000)

[Optional]

7. Import postman collection and environment

In Postman click on __Import__ 

Select __postman/Estates.postman_collection.json__ and __postman/Estates.postman_environment.json__ files

Click __Import__ button

## Author
Rubén González Martín