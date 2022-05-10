import "./Home.css";

const Home =()=>{

    return(
        <>
        <img width={1550} height={650} src="https://previews.123rf.com/images/varijanta/varijanta1603/varijanta160300108/54405564-flat-line-design-website-banner-of-about-us-company-information-business-solutions-and-services-mode.jpg" alt="remote" />

        <br />
        <h1 className="text-center text-success ">We Work for the Best </h1>
        <h6>To ensure your company has a reachable online presence – an e-commerce website can work wonders and make that wonder into a reality, we are there to serve you right. We are a result-driven agency serving educational, corporate, travel, industry, real estate, etc. ranging from B2B, B2C, or a hybrid model.</h6>
        <h6 className="text-center"> We aim to create websites that help you maximize your business revenue through online sales of products and services.</h6>
<div className="text-center">
<a href="/apply " className="btn btn-primary text-white "> <i>Apply Now </i></a>
</div>
<hr/>
<h1 className="text-success text-center"> What We Offer?</h1>
<div id="boxcontainer1"> 
<div id ="s1">
    <img width={200} height={150} src="https://thumbs.dreamstime.com/z/outline-services-vector-icon-isolated-black-simple-line-element-illustration-technology-concept-editable-stroke-white-144319632.jpg" alt="remote" />
    <h4>IT Services</h4>
    <p> Ex.: Web Design & Development</p>
</div>

<div id ="s2">
    <img width={200} height={150}  src="https://redialsolutions.com/wp-content/uploads/2019/11/digital-marketing1.png " alt="remote" />
    <h4>Digital Marketing Services</h4>
    <p> Ex.: SEO, Social Media Marketing</p>
</div>
<div id ="s3">
    <img width={200} height={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsf8mqU-PMagPalFbH0h0_Rwi1d9rf826GA&usqp=CAU " alt="remote" />
    <h4>Graphics Design & Video Editing</h4>
    <p> Ex.: Photoshop, Illustrator, CoralDraw</p>
</div>
</div>
<hr />

<div id="s4">
<h6 className="text-center"> For Further Queries Call Us Now </h6>
<h2 className="text-primary"> <i> +91 7758 941 912</i></h2>
</div ><hr />

  <div id ="boxcontainer2">
    
    <div class="box1">
 <ol>
     <li>
     <li className="text-danger"><b>Important Links  </b> </li>

     </li>

    <li>
        <a href="/">Home</a>
    </li>
    <li> 
        <a href="/about us"> About Us</a>
    </li>
    <li>
        <a href="/services"> Services</a>
    </li>
    <li>
        <a href=" contact us"> Contact Us</a>
    </li>
</ol>
    </div>

    <div class="box2">
<ol>
<li className="text-danger"><b>Social Media Links </b> </li>

<li>
        <img width={30} height={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/480px-Instagram-Icon.png" alt="" /> <a href="https://www.instagram.com/addvic_codeboat/"> Instagram</a>
 </li>

    
    <li>
        <img width={30} height={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png" alt="" /> <a href="https://www.facebook.com/addvicodeboat/">facebook</a>
    </li>

    <li> 
        
        <img width={30} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" /> <a href="https://www.youtube.com/channel/UCzhjMYXmiCJ2JpcD2mAevBQ/about">Youtube</a>
    </li>

    <li> 
        
        <img width={30} height={20} src=" https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /> <a href="https://www.linkedin.com/company/addvic/?originalSubdomain=in">LinkedIn</a>
    </li>
</ol>
    </div>

    <div class="box3">
<ol>
<li className="text-danger"><b>Our Privacy Policy is Here </b>  :</li>
<li>
<a href="/">Privacy policy</a>
</li>
<li>
<li className="text-danger"> <b> Our Terms and Conditions : </b></li>
<a href="/"> Terms & Conditions</a>
</li>
</ol>
    </div>

    <div class="box4">
        
            <li className="text-danger"> <b> Phone :</b></li>
        
                <li> <b>+91 7758 941 912 </b> </li>

                <li> <b>Email : </b></li>
        <li>
              <a href="/"> info@addvic.com</a>
        </li>
               
            
    </div>

</div>
        
        </>
    )
}
export default Home;