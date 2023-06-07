import "./Home.css"
import { Link } from "react-router-dom";
function Home(){

    return(
        <div>


 {/* interaction section */}
 <div className="tour-tabbing-outer">

     <div className="containfield">
         <div className="header"> <Link to="/" ><img class="LOGO" src="https://enord.co/images/logos/LogoDark.png" alt='logo'/></Link> </div>
            <div className="tour-tabbing"> </div>
            
            <div class="grid-col-3-6-3">


<div class="col col-left">
  <ul class="flex-listing">

    <li data-tab="tab1" class="active">

      <a href="http://127.0.0.1:5500/CommunityEnord/QnA.html">
        <img src="./Images/ask-a-question.svg"/> Ask a question
      </a>
    </li>

    <li data-tab="tab2">
      <a href="#">
        <img src="./Images/votes.svg"/> Vote on everything
      </a>
    </li>
    <li data-tab="tab3">
      <a href="#">
        <img src="./Images/answer.svg"/> Answer questions
      </a>
    </li>

  </ul>
</div>



 <div class="col col-center">
  <div id="tab1" class="tab-content current">
   {/* image pending */}
    <h4>Ask a question publicly on 170+ Stack Exchange sites<br/> or  privately using Enord for Teams.</h4>
  </div>

  {/* <div id="tab2" class="tab-content">
    <img src="./Images/illo-feats-vote.svg"/>
    <h4>Upvoting helps exceptional content rise to the top and bring awareness to useful responses.</h4>
  </div>

  <div id="tab3" class="tab-content">
    <img src="./Images/illo-feats-answer.svg"/>
    <h4>Answer a question to share your knowledge with the world or in private with your team.</h4>
  </div>

  <div id="tab4" class="tab-content">
    <img src="./Images/illo-feats-tags.svg"/>
    <h4>Tags help make information searchable and find answers that are important to you.</h4>
  </div>

  <div id="tab5" class="tab-content">
    <img src="./Images/illo-feats-accept.svg"/>
    <h4>Accept the answer which solved your problem to let others benefit from the valuable information.</h4>
  </div>

  <div id="tab6" class="tab-content">
    <img src="./Images/illo-feats-recognize.svg"/>
    <h4>Our reputation system rewards both the new & experienced based on contribution and activity.</h4>
  </div> */}

</div>




  <div class="col col-right">
  <ul class="flex-listing">
    <li data-tab="tab4">
      <a href="http://127.0.0.1:5500/CommunityEnord/tags.html">
        <img src="./Images/tags.svg"/> Tag your question
      </a>
    </li>
    <li data-tab="tab5">
      <a href="#">
        <img src="./Images/accept.svg"/> Accept an answer
      </a>
    </li>
    <li data-tab="tab6">
      <a href="#">
        <img src="./Images/get-recognized.svg"/> Get recognized
      </a>
    </li>
  </ul>
</div>  


</div>

 </div>
                
     </div>

{/* hero and marquee secton started */}

     <div className="hero-marquee-container" >
    
    {/* <!-- hero section  --> */}
    <div class="container" >Enord Community...  <br/><br/>

      {/* <!-- text to be written  --> */}
      <p className=".main-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nulla repudiandae porro, ab assumenda recusandae labore libero animi eveniet adipisci odio laboriosam quaerat ducimus voluptates, nemo quisquam neque aliquid dolores impedit. Aliquid, non, asperiores ullam odio commodi in esse suscipit quam, neque consequatur corporis sit quod modi omnis placeat. Officia corrupti dolorem voluptas nisi consequatur nihil cumque consectetur odio sint, molestias voluptate nostrum. Nemo soluta fugit sint mollitia. Molestiae repudiandae corporis ducimus ipsum iusto assumenda asperiores nisi hic dicta voluptate.</p>

      <svg class="waves" xmlns="https://www.w3.org/2000/svg" viewBox="0 100 1440 220"><path fill="white" fill-opacity="1" d="M0,224L80,240C160,256,320,288,480,266.7C640,245,800,171,960,149.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
    <div class="smallbox"></div>
    <div class="smallbox1"></div>
    <div class="smallboxRight"></div>

    {/* <!-- hero section done --> */}

    
    <div class="break"></div>

     <div class="heroNext">
      <div class="heronextContain contain1">
        <div className="contentImg1 f1">  
        {/* image pending */}
         </div>

        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores sit veritatis aut iste cum saepe aspernatur corporis perferendis nemo iure laudantium quos aliquid, ea nulla eaque ratione assumenda incidunt ex possimus minus consectetur exercitationem rerum? Voluptate accusamus totam quo dolor. Deserunt sint iure tenetur fuga nostrum adipisci quae autem deleniti placeat similique quis, nam totam commodi iste neque quidem voluptate distinctio officiis dicta eum voluptas quos. Laboriosam ea, omnis consequuntur impedit exercitationem architecto veritatis tempore molestias. Inventore perspiciatis consectetur, tempora illum a consequuntur officia, labore delectus dolore necessitatibus quia minus fugiat consequatur velit adipisci ea ex reprehenderit hic. Ex?</div>
      </div>
      <div class="heronextContain contain2">
        <div className="contentImg2 f1">
            {/* image pending */}
        </div>

        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores sit veritatis aut iste cum saepe aspernatur corporis perferendis nemo iure laudantium quos aliquid, ea nulla eaque ratione assumenda incidunt ex possimus minus consectetur exercitationem rerum? Voluptate accusamus totam quo dolor. Deserunt sint iure tenetur fuga nostrum adipisci quae autem deleniti placeat similique quis, nam totam commodi iste neque quidem voluptate distinctio officiis dicta eum voluptas quos. Laboriosam ea, omnis consequuntur impedit exercitationem architecto veritatis tempore molestias. Inventore perspiciatis consectetur, tempora illum a consequuntur officia, labore delectus dolore necessitatibus quia minus fugiat consequatur velit adipisci ea ex reprehenderit hic. Ex?</div>
      </div>

    </div> 


    {/* <!-- marqueee         --> */}

    <marquee direction="left"   scrollamount="15">
      <div class="imgContain">
        <div>
          <img   className="img-width" src="./Images/Meity Startup Hub.png" alt="###" srcset=""/>
        </div>
        <div>
          <img  className="img-width" src="./Images/Nvidia.png"  alt="###" srcset=""/>
        </div>
        <div>
          <img src="./Images/IIT mandi Catalyst.png"  alt="###" srcset="" className="img-width" />
        </div>
        <div>
          <img src="./Images/SolidWorks-Logo.png" alt="###" srcset="" className="img-width" />
        </div>
        <div>
          <img src="./Images/iiit incubation.png"  alt="###" srcset="" className="img-width" />
        </div>
        <div>
          <img src="./Images/IIm Kozhikode Livo.png" alt="###" srcset="" className="img-width" />
        </div>
        <div>
          <img src="./Images/iitmandi-ihub.png"  alt="###" srcset="" className="img-width" />
        </div>
        <div>
          <img src="./Images/itic.png"  alt="###" srcset="" className="img-width" />
        </div>
        <div>
          <img src="./Images/aumirah_logofull.png"  alt="###" srcset="" className="img-width"/>
        </div>
      </div>
    </marquee>

  </div>



  <footer>
    <div class="footerMain" >

      <div class="foot">
        <center>
          <div>
            <img  className="footer-logo" src="./Images/LogoDark.png" width="200px" height="50px"  alt="enord" srcset=""/>
            
            {/* <!-- links to social media accounts --> */}
            
              <div>
                  <div className="icons">
                      <a href="https://www.instagram.com/enord_co/" target="_blank">
                          <img className="instacontactIcons" src="./Images/instagram.png" alt="" srcset=""/>
                      </a>
                      <a className="contactIcons" href="https://www.facebook.com/profile.php?id=100085493635630" target="_blank">
                          <img className="facecontactIcons" src="./Images/facebook.png" alt="" srcset=""/>
                      </a>
                      <a className="contactIcons" href="https://github.com/enord-website" target="_blank"><img className="gitcontactIcons" src="./Images/github.webp" alt="" srcset=""/></a>
                      <a className="contactIcons" href="https://www.linkedin.com/company/enordco/mycompany/" target="_blank">
                          <img className="linkedcontactIcons" src="./Images/linkedin.png" alt="" srcset=""/>
                      </a>
                      <a className="contactIcons" href="##" target="_blank"><img className="twittercontactIcons" src="./Images/twitter1.png" alt="" srcset=""/></a>
                  </div>
              </div>
          </div>
        </center>




        
      </div>

      <div className="foot">
        <p>Navigation</p>  
        <br/>
        <a href="http://127.0.0.1:5500/CommunityEnord/index.html" className="navfootlinks" >Home</a> <br/>
        <a href="#" class="navfootlinks">About</a><br/>
        <a href="#" class="navfootlinks">Product</a>
      </div>

      <div class="foot">
        <p> Let's Connect</p> <br/>
        <p>Mail to: <a href="mailto:info@enord.co" className="footContact">info@enord.co</a></p>
        <p>Mail to: <a href="mailto:hr@enord.co" className="footContact">hr@enord.co</a></p> <br/><br/>
        <p> Contact:</p>
        <p><a href="tel:+919818447424" className="footContact">+91 9818447424</a></p>
      </div>

      <div className="foot">
        <p> Address: </p><br/>
        <p> ------ Head Office ------ </p><br/>
        Cabin no- 523, 5th floor <br/>
        Innovation & Incubation Centre, <br/>  
        IIIT-Delhi, Delhi-110020 <br/> <br/> <br/>
        
        <p>------ Office(IIT-Mandi) ------</p> <br/>
        Catalyst, IIT-Mandi <br/>
        Mandi - 175005 <br/>
        Himachal Pradesh <br/> <br/> <br/>

      </div>


      <div className="foot">
        <p>Domains: </p> <br/>
        <a href="#" className="navfootlinks">Drone's</a><br/>
        <a href="#" className="navfootlinks">API</a><b/>
        <a href="#" className="navfootlinks">AI</a><br/>
        <a href="#" className="navfootlinks">ROS</a><br/>
        <a href="#" className="navfootlinks">Programming</a><br/>
        <a href="#" className="navfootlinks">Data Analyst</a><br/>
        <a href="#" className="navfootlinks">UI / UX</a><br/>
        <a href="#" className="navfootlinks">Hardware and Electronics</a><br/>
        <a href="#" className="navfootlinks">Simulations</a><br/>
        <a href="#" className="navfootlinks">Research</a><br/>
        <a href="#" className="navfootlinks">Autonomy</a><br/>

      </div> 

      </div> 

    </footer>




</div>
    )
}

export default Home;