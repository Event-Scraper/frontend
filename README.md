# frontend

## How far did you get?

### I believe I have completed all expectations. I also extended so that the user can see more than one site's events.

## How pleased are you with your solution?

### Considering I have never written a backend that scrapes other sites, I am pretty pleased. This being said, I was unhappy with the limited information that the meetup.com link gave and so I set up my crawler to go to each and every event page and take information from there. This greatly reduced the speed at which my backend could scrape.

## What is the next thing you would do if you had more time?

### I would definitely spend some time researching how to optimize my meetup.com route and then fix it. I would also focus more on the user experience by adding loading spinners to let the user know we are still waiting and nothing has failed yet. I would also scrape some more sites, as this was an extremely fun challenge.

## How do you handle the list as you continue scrolling and it gets super long?

### I actually had to do this for the project I was working on for BaseMap. Basically, you only want to render what the user is able to see keeping everything else in redux and making "requests" to redux as the user scrolls.

## What are common first steps to scaling your server to handle massive request rates?

### 1. Find the Actual Bottleneck using Metrics

### 2. Store results of common operations so you're not repeating work

### 3. Reuse data you've already looked up, even if it's a bit stale

### 4. Avoid doing complex operations in the request-response cycle

### 5. Don't make requests from the client for things it already has

### 6. Caching

### 7. If there was a database, index it.

### 8. Use browser localstorage and check there first

## What are the performance bottlenecks with your current server? How would you address them?

## As stated previously the route I created for meetup.com events is extremely slow. I would probably store the results for the day and then make a new request for each new day as this is how the data is setup on that site. As said before, I would also spend some much needed time research the topic.

# Instructions:

## 1. In terminal clone both repositories to your local machine using

```
Backend:  git clone https://github.com/Event-Scraper/backend.git
Frontend: git clone https://github.com/Event-Scraper/frontend.git
```

## 2. For both repositories, in terminal type:

```
npm i
```

## This will install the necessary npm plugins to run this program

## 3. You will need to create a .env (terminal: touch .env) file for BOTH repositories. They will need to contain the following:

#Frontend

```
NODE_ENV='development'
PORT=8080
API_URL='http://localhost:8000'
```

#Backend

```
PORT=8000
CORS_ORIGINS='http://localhost:8080'
```

## 4. Once this has been completed (and saved), it is now time to start the backend. In terminal, navigate to the folder which contains the backend portion of the project and type:

```
npm run start
```

## You will know when the backend is running when you get the message:

```
scraper:server server on 8000 +0ms
```

## 5. When this has been completed, It is time to run the frontend. In terminal, navigate to the folder which contains the fronend portion of the project and type:

```
npm run watch
```

## You will know when the frontend is running when you see the message:

```
ℹ ｢wdm｣: Compiled successfully.
```

## Don't worry too much if this takes a while as the project needs to build.

## 6. At this point you should be fully up and running

## 7. You can run tests in either frontend or backend by ending your build sessions (^c) and entering the following command in terminal:

```
npm run test
```

## be sure you have the devDependencies installed or the test will not work. You can do this by typing:

```
npm install --only=dev
```

## more can be found about this at https://docs.npmjs.com/cli/install

## Thank you and enjoy!
