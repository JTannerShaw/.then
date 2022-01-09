<h1 align='center' style='font-weight: bold'> .then() </h1>
<div>
<p align='center'>.then is an App for developers to go to for asking questions on coding problems. It is inspired by <a style='font-weight: bold'href='https://www.quora.com'>Quora</a>
<br>
</br>
</p>

</div>

<h1 align='center' style='font-weight: bold'> Index </h1>
<br>
<div align='center' style='font-weight: bold'>
 <a href='https://github.com/JTannerShaw/.then/wiki/Feature-List-(MVP)'>Feature List</a> - <a href='https://github.com/JTannerShaw/.then/wiki/DB-Schema'>DB Schema</a> - <a href='https://github.com/JTannerShaw/.then/wiki/API-Routes'>API Documentation</a> - <a href='https://github.com/JTannerShaw/.then/wiki/Frontend-Routes'> Frontend Routes </a>
<br>
</br>
</div>
<div align='center'>
<h1 align='center' style='font-weight: bold'>Technologies Used </h1>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>
</div>
<br>
</br>
<h1 align='center' style='font-weight: bold'> Getting Started </h1>

1. Clone this repo

    * ```git clone git@github.com:JTannerShaw/.then.git```

2. Install Frontend and Backend dependencies

    * ```cd frontend > npm install```
    * ```cd backend > npm install```

3. Create a .env file base on the .env.example given

4. Setup your username and database based on what you setup in your .env

5. Migrate and Seed models

    * ```npx dotenv sequelize db:migrate```
    * ```npx dotenv sequelize db:seed:all```

6. You can start the app using

    * ```npm start```

7. You can use the Demo user or create an account.


<h1 align='center' style='font-weight: bold'> Live </h1>

### Features

Logged in users can:

 - Add/Edit/Delete Questions
 - Add/Edit/Delete Answers
 - Add/Edit/Delete Comments
 - Search functionality for Questions/Answers/Comments
