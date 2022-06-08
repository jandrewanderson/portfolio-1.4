

function Home() {
  return (
    <>
    <div id="viewport">
            
            <header>
                <div class="header-format">
                    <h1>Joseph Andrew Anderson</h1>
                    <h2>Portfolio Page</h2>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#box1">About Me</a>
                        </li>
                        <li>
                            <a href="#flex-container-child" class="hover">
                                <div>See My Work</div>
                                <div class="hide">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="#netflix">Netflix</a> 
                                            </li>
                                            <li>
                                                <a href="#facebook">Facebook</a> 
                                            </li>
                                            <li>
                                                <a href="#tiktok">Tik Tok</a> 
                                            </li>
                                            <li>
                                                <a href="#hbomax">HBO Max</a> 
                                            </li>
                                            <li>
                                                <a href="#disney">Disney +</a> 
                                            </li>
                                            <li>
                                                <a href="#espn">ESPN +</a> 
                                            </li>
                                            <li>
                                                <a href="#hulu">Hulu</a> 
                                            </li>
                                            <li>
                                                <a href="#xbox">Xbox</a> 
                                            </li>
                                            <li>
                                                <a href="#playstation">Playstation</a> 
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                
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
                    
                    <img class="headshot" src="./assets/images/IMG_3182.jpg" alt="Professional picture of myself."/>
                    
                    <div class="about-me">

                        <h2 id="box1">About Me</h2>
                        
                        <p>I learned everything that was needed to be a financial advisor and obtained the necessary licenses to be able to legally work in the field. The exams took several months of intense studying and practice, due to the level of expertise and legal compliance required in the industry. After a few years in this career, I became very successful, but was not receiving fulfillment. After reflecting on my life goals, I realized that being a financial advisor was not going to be the path of accomplishing those goals. Coding has always been a personal passion of mine. I decided it was time to follow my passion. SMU coding bootcamp has allowed this career change to be possible. It has taught me an abundance of useful skills that I will be able to apply in the work force. I am looking forward to graduating and seeking employment as a web developer.</p>
                        <p>At the top of this page I have included a couple of things that I have developed. The top one was a group project. This project we were tasked with creating an app that utilized a free API and tools that we have learned in javascript up to this point in class. We decided to poke fun a little it at our teacher Gary. After that I am displaying a coding quiz. This quiz utilized tools in javascript to deliver a quiz. This quiz contains questions about basic coding topics. Lastly I am displaying an app that will give you the weather forecast for any city in the world. The user simply needs to type in the city, and they will receive information on the weather for the day as well as weather for the following five days.</p>
                    </div>

                    <div class="about-me">
                        <h2 id="box1">Fun Details</h2>
                        <p>Normally this section would be to explain about who I am in a professional setting, and this page would demonstrate the web pages that I have created. As I am just getting started, unfotunatley, I have yet to create many pages that I could showcase on a professional level. For the time being, in addition to displaying a couple of projects that I have worked on, I will provide links to some of my favorite social media sites as well as my favorite streaming services. I really enjoy sports, TV, movies, and silly videos that people have created on the internet. Again, later I will include more pertinent details about my professional goals, skills, and accomplishments. I also intend to showcase my web development abilities. For now, you get to see some things that I like to do. The following is still just filler text. Thank you for visiting my portfolio page to be.</p>
                    </div>
                    
                </section>

                <div class="flex-container-child" id="flex-container-child">

                    <section class="box box8" id="nerds-meet-nerds">
                        <h2>Nerds Meet Nerds</h2>
                        <a href="https://nerds-meet-nerds.herokuapp.com/" target="_blank">
                            <img src="./assets/images/landing-page.jpg" alt="Image of Gary's Bad Jokes Creator App"/>
                        </a>
                    </section>
                    
                    <section class="box box9" id="gary-bad-jokes">
                        <h2>Gary's Bad Jokes</h2>
                        <a href="https://usernameisstephen.github.io/Gary-Bad-Jokes-Creator/" target="_blank">
                            <img src="./assets/images/garys-bad-jokes.png" alt="Image of Gary's Bad Jokes Creator App"/>
                        </a>
                    </section>

                    <section class="box box10" id="weather">
                        <h2>Weather App</h2>
                        <a href="https://jandrewanderson.github.io/server-side-apis-weather-dashboard/" target="_blank">
                            <img src="./assets/images/after-weather.png" alt="Image of my weather app"/>
                        </a>
                    </section>

                    <section class="box box2" id="netflix">
                        <h2>Netflix</h2>
                        <a href="https://www.netflix.com/login" target="_blank">
                            <img src="http://cdn.shopify.com/s/files/1/1192/7620/articles/Netflix_steps_into_the_eCommerce_world_by_launching_its_own_online_store_1.png?v=1623426529" alt="Image of the Netflix logo"/>
                        </a>
                        
                    </section>

                    <section class="box box3" id="facebook">
                        <h2>Facebook</h2>
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="https://i2-prod.mirror.co.uk/incoming/article676858.ece/ALTERNATES/s1200/Topic%20-%20Facebook" alt="Image of the Facebook logo"/>
                        </a>
                        
                    </section>

                    <section class="box box4" id="tiktok">
                        <h2>Tik Tok</h2>
                        <a href="https://www.tiktok.com/login" target="_blank">
                            <img src="https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share_img.png" alt="Image of the Tik Tok logo"/>
                        </a>
                        
                    </section>

                    <section class="box box5" id="hbomax">
                        <h2>HBO Max</h2>
                        <a href="https://www.hbomax.com/tv-sign-in" target="_blank">
                            <img src="https://variety.com/wp-content/uploads/2020/04/hbo-max.png" alt="Image of the HBO Max logo"/>
                        </a>
                            
                    </section>

                    <section class="box box6" id="disney">
                        <h2>Disney +</h2>
                        <a href="https://www.disneyplus.com/login" target="_blank">
                            <img src="https://static-assets.bamgrid.com/product/disneyplus/images/share-default.14fadd993578b9916f855cebafb71e62.png" alt="Image of the Disney + logo"/>
                        </a>
                    </section>

                    <section class="box box7" id="espn">
                        <h2>ESPN +</h2>
                        <a href="https://plus.espn.com/buy-now" target="_blank">
                            <img src="https://cnbl-cdn.bamgrid.com/assets/cbc11829f838ae44fe3587937d2df820ffc979f39b04af49ae34ae5413c9a710/original" alt="Image of the ESPN + logo"/>
                        </a>
                    </section>

                    <section class="box box7" id="hulu">
                        <h2>Hulu</h2>
                        <a href="https://auth.hulu.com/web/login" target="_blank">
                            <img src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" alt="Image of the Hulu logo"/>
                        </a>
                    </section>

                    <section class="box box7" id="xbox">
                        <h2>Xbox</h2>
                        <a href="https://www.xbox.com/en-US/live" target="_blank">
                            <img src="https://c4.wallpaperflare.com/wallpaper/1019/525/246/xbox-one-wallpaper-preview.jpg" alt="Image of the Xbox logo"/>
                        </a>
                    </section>

                    <section class="box box7" id="playstation">
                        <h2>Playstation</h2>
                        <a href="https://www.playstation.com/en-us/playstation-network/" target="_blank">
                            <img src="https://www.gamespot.com/a/uploads/original/123/1239113/3548097-0927229540-35212.png" alt="Image of the ESPN + logo"/>
                        </a>
                    </section>
                </div>  
            </div>

            <footer>
                <h2>Contact Me</h2>
                <div class="footer" id="footer">
                    <p>Phone Number: 555-555-5555</p>
                    <p>Email: <a href="https://gmail.com" target="_blank">myemail@gmail.com</a></p>
                    <p>Github: <a href="https://github.com/jandrewanderson" target="_blank">https://github.com/jandrewanderson</a></p>
                    <p>LinkdIn: <a href="https://www.linkedin.com/in/j-andrew-anderson-34300a110/" target="_blank">www.linkedin.com/j-andrew-anderson</a></p>
                    <p><a href="https://docs.google.com/document/d/1hkAd4oypgtDKEg0aBD18uXMrJePmBESA/edit?usp=sharing&ouid=112179615365238054942&rtpof=true&sd=true" target="_blank">Résumé</a>
                    </p>
                </div>
            </footer>
        </div>
    </>
  );
}

export default Home;
