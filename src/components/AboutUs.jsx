import "./AboutUs.css"


const AboutUs =()=>{

    return(
<>
<div>
    <h1><b>About Us :</b> </h1>
    <br />

<div id="container1">
<img width={700} height={400} src="https://i.pinimg.com/originals/33/60/8e/33608e84844852d5f0374082fe6a063e.jpg" alt="" />
<img width={700} height={400} src="https://content3.jdmagicbox.com/comp/def_content/computer-hardware-training-institutes/3-computer-hardware-training-institutes-3-vxpgl.jpg?clr=553311" alt="" className="mb-5"/>
</div>
   
   <div className="container ">
       <h2>About us :</h2>
       <p className="mb-5">The demand for sustainable mobility is growing worldwide. Hence, Vitesco Technologies provides the right drive technologies: clean, smart and electrified. Based in Regensburg, Germany, with about 5000 employees at around 50 locations worldwide, we pursue the objective of playing a leading role in the electrification of vehicles. To achieve this, we follow a clear strategy emphasizing sustainability, we live our brand and our values: Passionate, Partnering and Pioneering. </p>

       <h2> FACTS AND FIGURES</h2>
       <p className="text-danger"><b>THE COMPANY AT A GLANCE </b> </p>

       <div id="container2">

<div class="box1">
<img width={300} height={300} className="mb-5" src="https://cdn-icons-png.flaticon.com/512/2344/2344006.png" alt="" />
<h3><b>  AROUND 50 LOCATIONS</b></h3>
<p>for production and development.</p>
</div>

<div class ="box2">

<img width={300} height={300} className="mb-5" src="https://www.pinclipart.com/picdir/middle/532-5321259_canon-ir-number-of-employees-icon-clipart.png" alt="" />
<h3> <b>ABOUT 5000 EMPLOYEES </b> </h3>
<p>are globally active for the company.</p>

</div>
         <div class ="box3">

         <img width={300} height={300} className="mb-5" src="https://cdn.iconscout.com/icon/free/png-256/company-corporate-growth-performance-chart-graph-success-rate-1-12407.png" alt="" />

         <h3><b>AROUND 1 MILLION SALES </b> </h3>
         <p>achieved in 2021</p>
         </div>
  
       </div>

   </div>
   
       
   

</div>





</>
        
    )
}

export default AboutUs ;