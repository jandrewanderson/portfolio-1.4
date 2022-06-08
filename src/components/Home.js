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
                        
                        <p>I learned everything that was needed to be a financial advisor and obtained the necessary licenses to be able to legally work in the field. The exams took several months of intense studying and practice, due to the level of expertise and legal compliance required in the industry. After a few years in this career, I became very successful, but was not receiving fulfillment. After reflecting on my life goals, I realized that being a financial advisor was not going to be the path of accomplishing those goals. Coding has always been a personal passion of mine. I decided it was time to follow my passion. SMU coding bootcamp has allowed this career change to be possible. It has taught me an abundance of useful skills that I will be able to apply in the work force. I am looking forward to graduating and seeking employment as a web developer.</p>
                        <p>At the top of this page I have included a couple of things that I have developed. The top one was a group project. This project we were tasked with creating an app that utilized a free API and tools that we have learned in javascript up to this point in class. We decided to poke fun a little it at our teacher Gary. After that I am displaying a coding quiz. This quiz utilized tools in javascript to deliver a quiz. This quiz contains questions about basic coding topics. Lastly I am displaying an app that will give you the weather forecast for any city in the world. The user simply needs to type in the city, and they will receive information on the weather for the day as well as weather for the following five days.</p>
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
