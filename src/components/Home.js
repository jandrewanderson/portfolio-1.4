import ProjectData from '../utils/ProjectData';

function Home() {
  return (
    <>
        <div id="viewport">
            
            <header>
                <div class="header-format">
                    <h1>Joseph Andrew Anderson</h1>
                    <h2></h2>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#box1">About Me</a>
                        </li>
                        <li>
                            <a href="#flex-container-child" class="hover">
                                <div>See My Work</div>
                            </a>
                        </li>
                        <li>
                            <a href="#footer">Contact Me</a>
                        </li>
                        
                    </ul>
                </nav>
            </header>

            <div class="flex-container">
            
                <section class="box box1">
                    
                    <img class="headshot" src="https://cdn.discordapp.com/attachments/967611990094782527/983523670595096658/github-professional-photo-cropped.PNG" alt="Professional picture of myself."/>
                    
                    <div class="about-me">

                        <h2 id="box1">About Me</h2>
                        
                        <p>Brand Statment: Web Developer leveraging background as a salesman, banker, and financial advisor to provide a well rounded experience on the web. Recently earned a certificate in full stack development from the Southern Methodist University Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as a hard worker when it comes to projects both in a team environment and individually. Also known as a quick learner and as someone that will continuously work at a problem until it can be resolved. My aim is to use the experience that I have to provide a user with a memorable and valuable experience. I recently worked on a project with four others to build a dating website geared specifically to nerds. On this app, the user is able to create an account, build their profile with images and personal information, connect with other users, and chat live with other users that they have connected with. I used my skills to assist in building the MySql database, the express routes, and the bulk of the front end experience. I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>

                        <p>Project Descriptions:</p>

                        <ul>
                            {ProjectData.map(project => (
                                <li>
                                    <p>{project.name}</p>
                                    <p>{project.description}</p>
                                </li>
                            ))}
                        </ul>

                        <p>Background: I learned everything that was needed to be a financial advisor and obtained the necessary licenses to be able to legally work in the field. The exams took several months of intense studying and practice, due to the level of expertise and legal compliance required in the industry. After a few years in this career, I became very successful, but was not receiving fulfillment. After reflecting on my life goals, I realized that being a financial advisor was not going to be the path of accomplishing those goals. Coding has always been a personal passion of mine. I decided it was time to follow my passion. SMU coding bootcamp has allowed this career change to be possible. It has taught me an abundance of useful skills that I will be able to apply in the work force. I am looking forward to graduating and seeking employment as a web developer.</p>
                    </div>
                    
                </section>

                <div class="flex-container-child" id="flex-container-child">

                    {ProjectData.map(project => (
                        <section class="box box2" id="netflix">
                            <h2>{project.name}</h2>
                            <a href={project.href} target="_blank">
                                <img src={project.img} alt={project.alt}/>
                            </a>
                        </section>
                    ))}
                </div>
            </div> 

            

        </div>

        <div id='footer'>
                <h2>Contact Me</h2>
                <div className="">
                    <p>Phone Number: 801-310-1077</p>
                    <p>Email: <a href="https://gmail.com" target="_blank">jandrewanderson1995@gmail.com</a></p>
                    <p>Github: <a href="https://github.com/jandrewanderson" target="_blank">https://github.com/jandrewanderson</a></p>
                    <p>LinkdIn: <a href="https://www.linkedin.com/in/j-andrew-anderson-34300a110/" target="_blank">www.linkedin.com/j-andrew-anderson</a></p>
                    <p><a href="https://docs.google.com/document/d/1hkAd4oypgtDKEg0aBD18uXMrJePmBESA/edit?usp=sharing%26ouid=112179615365238054942%26rtpof=true%26sd=true" target="_blank">Résumé</a>
                    </p>
                </div>
        </div>
    </>
  );
}

export default Home;
