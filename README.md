<h1 id="title">🎉 Book Search 🎉</h1>


<p>The Book Search application allows users to sign up and login to save books to their account. Built with the MERN technology stack and RESTful API, this application has been refactored to use GraphQL API and an Apollo Server.</p>


<h2>Table of Contents 📚<h2>

* [Installation](#installation)
* [Sign Up](#signup)
* [Login](#login)
* [Saved Books](#saved-books)
* [Built With](#built)
* [Future Updates](#future)
* [Author](#author)
* [Contributions](#contribute)
* [Give Support](#Support)


<h2 id="installation">Installation 👨‍🏭</h2>


<p>For a local installation, simply download the repository to your local computer and run </p>

```sh
npm i
```

<p> in your command line interface (in the root folder) to install all package dependencies. Then </p> 

```sh
npm develop
```

<p> to start a local server and see the application on your local host 3001. </p>


<h2 id="homepage">Application Homepage 🏠</h2> 


<p>To see the application deployed on Heroku simply visit <a href="https://quiet-citadel-84582.herokuapp.com/">https://quiet-citadel-84582.herokuapp.com/</a>. There you will be brought to the Book Search homepage which looks like this:</p>

<p>&nbsp</p>

![Book Search Homepage](/assets/images/homepage.png)

<p>&nbsp</p>

<p>The top navigation bar has a option to take you to the search books landing page, or to login/sign up.</p>


<h2 id="signup">Sign Up ✍️</h2> 

<p>When you click the sign up feature, a modal pop up appears and asks for a username, email and password.</p>

<p>&nbsp</p>

![sign up for Book Search account](/assets/images/signup.png)

<p>&nbsp</p>

<p> The email and password will be used to login to the account later. Using GraphQL and Apollo client, we can pass your sign up information through mutations, to the Mongo database. Your user information is now saved in the Mongo database. You will be automatically logged in and given a JSON web token for authorization purposes.</p>

<p>&nbsp</p>

<h2 id="login">Login 🪵</h2> 

<p>Once you have your information saved in the Mongo database, the login process uses GraphQL and Apollo to query the database for your user information. This will not only log you in, but also will keep track of any books you choose to save.</p>

<p>&nbsp</p>

![Login](/assets/images/login.png)

<p>&nbsp</p>

<p>Once you have logged in you will see that the navigation bar changes to give you the option to not only search for books using google's API, but also to save books, and view them in a separate page.<p>

<p>&nbsp</p>

![Navbar changed in login](/assets/images/logged-in.png)

<p>&nbsp</p>

<p>Now when we search for a book or series of books, like Robert Jordan's Wheel of Time series, we see the books load with a cover image and brief description.</p>

<p>&nbsp</p>

![searching books](/assets/images/searchbooks.png)

<p>&nbsp</p>

<p> There is now a button to save the book as well since we are logged in.</p>

<p>&nbsp</p>

![save a book button](/assets/images/save-book.png)

<p>&nbsp</p>

<h2 id="saved-books">Saved Books 📚</h2> 

<p>Once logged in, if you have saved books, you can view them by selecting the "See Your Books" option in the navigation bar. This will display a different page telling you how many books you have saved and the option to delete them as well.</p>

<p>&nbsp</p>

![user's saved books](/assets/images/savedbooks.png)

<p>&nbsp</p>

<p>The final option is to log out of the application. Hope you enjoy!</p>

<h2 id="built">Built With 🛠️</h2>

<p>For more information about the technologies used in this application please visit the links below.</p>

<p>&nbsp</p>

<ul>
<li><strong><a href="https://www.educative.io/edpresso/what-is-mern-stack?https://www.educative.io/courses/grokking-the-object-oriented-design-interview?aid=5082902844932096&affiliate_id=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=grokking-ci&utm_term=&utm_campaign=Grokking+Coding+Interview+-+USA%2B&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=1871092258&hsa_grp=84009716779&hsa_ad=396821895536&hsa_src=g&hsa_tgt=aud-470210443636:dsa-1287243227899&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw0K-HBhDDARIsAFJ6UGhUpUqQ_6eX7MBM_VTDtly7NISrBFPGkHTUZMByYl1fwXfmHqq-efUaAiS8EALw_wcB">MERN technology stack</a></strong></li>
<li><strong><a href="https://graphql.org/learn/#:~:text=GraphQL%20is%20a%20query%20language,your%20existing%20code%20and%20data.">GraphQL</a></strong></li>
<li><strong><a href="https://www.apollographql.com/docs/">Apollo</a><strong></li>
<li><strong><a href="https://jwt.io/introduction">JSON Web Tokens</a></strong></li>
</ul>

<p>&nbsp</p>

<h2 id="future">Future Updates ⏳</h2>

<ul>
<li>[ ] What additional features would you like to see in the application?</li>
</ul>

<p>&nbsp</p>

<h2 id="author">Author 👋</h2>

**John Patrick Banas**

- [GitHub Profile 🖥️](https://github.com/JohnBanas)
- [Email 📧](mailto:jbanas9124@gmail.com)
- [Portfolio 💼](https://johnbanas.github.io/portfolio/)

<p>&nbsp</p>

<h2 id="contribute">Contributions 💚</h2>

<p>None of this would be possible without the love and support of my wife Sam and our dog Teddy. Thank you to my nephew Mitchell for letting me help him with his homework, and discover that I actually love computer science, I just never knew. The wonderful people at the Vanderbilt Owen School of Engineering Bootcamp. All the Instructors, TA's, Graders, Tutors, and Admin team who made my journey possible. Also to all the coders out there who teach me something new everyday, through Slack, StackOverflow, GitHub, Dev, NashDev, Codecademy, Coursera, CodeNewbie, Udemy, Dataquest, and too many others to name here. I am grateful for the knowledge freely given, and I will freely give knowledge in return. Thank you most of all, to <strong><em>YOU</em></strong> for reading this far! <strong>👏 🤣</strong></p>

<p>&nbsp</p>

<h2 id="support">Give Support 👏</h2>

<p>If you would like to contribute, have any commentary, corrections, or suggestions, please feel free to contact me through my email provided in the Author section. If you like the project, I would appreciate giving a ⭐ in support.</p>

[Back To Top of Page](#title)



