This is a MERN project with Firebase

## Getting Started

If you want run this app,  you have two things to do in advence.

First, you need to login to https://cloud.mongodb.com/ and setup your database, which takes some time, and then write your key to the `.env` file under the api folder as follow:

```javascript
MONGO_URL = YOUR_ACCESS_KEY
SECRET_KEY = xxx // you can write anything for crypto.
```

Second, you should login to https://console.firebase.google.com/ and setup your firebase for storage movies and pictures, and write your Firebase config to the `.env` file:

```javascript
PORT = 4000
REACT_APP_FIREBASE_CONFIG = {
	xxx
};
```

If you finish this, you can get start, otherwise you can't run the api/admin successfully.

**First, run the api server:**

```
cd api
npm i
npm start
```

The api server will run at 8001 port.

**Second, run the development server of client:**

```
cd client
npm i
npm start
```

The ws server will run at 3000 port.

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the admin sys.

**Finally, run the development server of admin:**

```
cd admin
npm i
npm start
```

The development server will run at 4000 port.

Open [http://localhost:4000](http://localhost:4000/) with your browser to see the admin sys.

## Usage

### Register/Login

For the first time, you should register and login.

If you success, you will access home page. But you won't see anything in your browser for you have no data in your database. Try to use admin sys to add some content, and refresh the page.

You can logout by clicking "logout" in the right of the topbar.

### Home/Series/Movies Page

In home page, you will get 10 random lists on the bottom whatever the lists' type are "series" or "movie". But you can click the "Series" or "Movies" in the the topbar and you will go to "series" page or "movie" which means you will only get "Series" or "Movies" lists in the bottom.

### Select Genre

You can select the genre of the movies under and near the topbar, which include "comedy"、"crime" and so on. Then you only see the "comedy" or "crime" movies in the bottom.

### Watch a movie

Clicking the movie and you can watch it.

