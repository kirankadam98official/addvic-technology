import "./ContactUs.css"

const ContactUs =()=>{

    return(
 <>
 <img width={1400} src="https://addvic.com/Images/ContactBanner.png" alt="" className="mb-5" />

 <h1 className="text-center text-success mb-5">We want to hear from you...</h1>

 <div id="container1" className="container">
     <form > 
         <div>

         <li >
         <label>Enter Full Name :</label> 
         <input className="row" type="text" />
         </li>
       
         <li>
         <label>Enter Email ID :</label> 
         <input className="row"  type="email"/>
         
         </li>
         <li>
             <label> Enter Mobile Number :</label>
             <input className="row" type="text"  />
         </li>
         <li>
             <label> Message ( Optional) :</label>
             <textarea className="row" name="" id="" cols="27" rows="2"></textarea>
         </li>
         <li>
             <button className="btn text-white">submit</button>
         </li>

         </div>
      
     
        
     </form>
     <div>
            <iframe width={650} height={400} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.184222118324!2d73.82069061431658!3d18.47531278743535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2955ea110cba3%3A0x3b73169462a0b11a!2sAddvic%20Technology%20(OPC)%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1643719125225!5m2!1sen!2sin" alt="" className="mb-5" />
        </div>
 </div>


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
export default ContactUs;