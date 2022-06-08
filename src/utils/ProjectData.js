const nmn = require('./assets/images/landing-page.jpg')
const gary = require('./assets/images/garys-bad-jokes.png')
const weather = require('./assets/images/after-weather.png')



const projectInfo = [
    {
        name: "Nerds Meet Nerds",
        href: "https://nerds-meet-nerds.herokuapp.com/",
        img: nmn,
        alt: "Image of Gary's Bad Jokes Creator App",
        description: "Dating app for nerds. This platform allows nerds of all types to connect with other nerds on a romantic level. Our main feature is the use of socket.io for our chatroom."
    },
    {
        name: "Gary's Bad Jokes",
        href: "https://usernameisstephen.github.io/Gary-Bad-Jokes-Creator/",
        img: gary,
        alt: "Image of Gary's Bad Jokes Creator App",
        description: "This is a fun project that was completed for a group project. Our group wanted to poke fun at our teacher and make a website that made it appear that he was telling dumb jokes. We utilized a third party api to generate the jokes. I had about 3 weeks coding experience when this was built."
    },
    {
        name: "Weather App",
        href: "https://jandrewanderson.github.io/server-side-apis-weather-dashboard/",
        img: weather,
        alt: "Image of my weather app",
        description: "This is a website that allows you to check the weather in any city across the globe. This project utilizes a third party api to get the data for the weather. I had been coding for about 5 weeks when I built this."
    },
    {
        name: "Game Parrot",
        href: "https://game-parrot.herokuapp.com/",
        img: "https://raw.githubusercontent.com/game-parrot/game-parrot/develop/client/src/assets/game-parrot.herokuapp.com.png",
        alt: "Image of Game Parrot",
        description: "This app allows users to connect with other users and play classic games live. We used iFrames to bring in a separate chatroom built with socket.io as well as a web page that contained the games."
    },
    {
        name: "Game Parrot Chatroom",
        href: "https://game-parrot-chatroom.herokuapp.com/",
        img: "https://cdn.discordapp.com/attachments/967611990094782527/984189779732213760/game-parrot-chatroom.herokuapp.com_.png",
        alt: "Image of Game Parrot Chatroom",
        description: "This is a basic chatroom built specifically for the Game Parrot app."
    },
    {
        name: "S.N.A (Backend)",
        href: "https://github.com/jandrewanderson/social-network-api",
        img: "https://github.com/jandrewanderson/social-network-api/raw/main/assets/user-gif.gif",
        alt: "Gif of Social Network API Project",
        description: "This project was built specifically for the backend. I used Insomnia to display the different sections being able to interact with each other using the MongoDB database. I built this with around 9 weeks coding experience when I built this."
    },
    {
        name: "Tech Blog",
        href: "https://the-tech-blog-jaanderson.herokuapp.com/",
        img: "https://github.com/jandrewanderson/tech-blog/raw/main/assets/images/the-tech-blog.png",
        alt: "Image of my tech blog",
        description: "This app is a blog specifically made for anyone in the tech industry to write about anything they are working on. This project allows users to see other peoples posts and interact with them. I had been coding for around 10 weeks when I built this."
    },
    {
        name: "T.P.G (Backend)",
        href: "https://github.com/jandrewanderson/team-profile-generator",
        img: "https://cdn.discordapp.com/attachments/967611990094782527/984192450501439558/10-object-oriented-programming-homework-demo.png",
        alt: "Image of my tech blog",
        description: "Team profile generator is a command-line project using node.js. Users will follow the prompts and fill in any relevant data for the team that they want to create a basic webpage for. I built this after 9.5 weeks of coding experience."
    },
    {
        name: "Code Quiz",
        href: "https://jandrewanderson.github.io/web-api-code-quiz/",
        img: "https://cdn.discordapp.com/attachments/967611990094782527/984199912159850536/jandrewanderson.github.io_web-api-code-quiz__1.png",
        alt: "Image of my tech blog",
        description: "This website has a coding related quiz built into it. It uses some of the fundamental elements of Javascript. This was one of my earlier projects. I had been coding for only 2 weeks at this point."
    },
    
]

module.exports = projectInfo