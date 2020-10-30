# About the application

Online test application is aiming to digitise a product which is an online quiz system capable of conducting a quiz online for the user. The application is segregated into three main modules: 

### Quiz module: 
The user is first shown different options for the available quizzes to attempt. The quizzes are of different domains and each has a set number of questions. Upon clicking on any particular quiz, the user is displayed a question on that domain which he needs to answer.  

### Result: 
The application in addition to conducting the quiz, also gives a score to the user according to the answers received to the questions. Each question has only one single answer. The score computed is out of the total questions in that domain (currently 5 questions per domain). 

### Review and Assessment: 
On the main assessment page of the application there is a question wise analysis of the quiz. Each question is marked correct or wrong based on the answers received by the user. If the question is answered wrong, then the right answer is marked in green and the user's wrong answer in red.


# Some key concepts used in the Application

- React states and classful components
- React Props and functional components
- JSON server for API endpoints (mock backend development)
- React component lifecycle methods
- Bootstrap and CSS for styling
- ES6 JavaScript features
- React Router
- Concurrently for automating the npm start command

#

# How to run the app (automated via concurrenty module)
### Step 1:  
If using HTTPS, run the following command on the terminal to clone the Online Test App made with React and JSON server, https://github.com/siddharth-basu98/OnlineQuizApplication.com.git, otherwise if using SSH, git@github.com:siddharth-basu98/OnlineQuizApplication.com.git


### Step 2: (Activating APIs through JSON Server)
Using any IDE of choice, open the cloned project in the workspace. Run the command “npm install” to install all the modules and dependencies of the application. Following which the Json server and React development server can both be started using the simple command “npm run dev”. A screenshot of package.json is shown below as to why this happens. 



#

# How to run the app (without concurrenty module)

### Step 1:  
If using HTTPS, run the following command on the terminal to clone the Online Test App made with React and JSON server, https://github.com/siddharth-basu98/OnlineQuizApplication.com.git, otherwise if using SSH, git@github.com:siddharth-basu98/OnlineQuizApplication.com.git

### Step 2: (Activating APIs through JSON Server)
Using any IDE of choice, open the cloned project in the workspace. Run the command “npm install” to install all the modules and dependencies of the application. After doing that run “cd backend_json_server”  and then type in the terminal  “npm json-server --watch db.json”. This starts the backend server which starts listening to port 3000 where the react app sends its request to. You can directly run “npm json-server --watch backend_json_server/db.json” directly. 

### Step 3: (Starting the React Server)
On the root directory of the application, just run the command “npm install” and then“npm start”, it automatically starts the react development server on port 4000 which is written in the start script of the package.json file. 

### Step 4:
Enjoy all the functionalities of the app from here on. 







