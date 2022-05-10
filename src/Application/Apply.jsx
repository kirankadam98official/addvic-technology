import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import React from "react";
import "./Apply.css"
import axios from "axios";

const Apply =()=>{


    const navigate =useNavigate();

    const [firstName,setFirstName] =useState("kiran");
    const [middleName,setMiddleName] =useState("kadam");
    const [lastName,setLastName] =useState("kadam");
    const [email,setEmail] =useState("kirankadam6965@gmail.com");
    const [mobileNo,setMobileNo] =useState("9923746965");
    const [dateOfBirth,setDateOfBirth] =useState("06/04/98");
    const [gender,setGender] =useState("male");
    const [instituteName,setInstituteName] =useState("NMCEO");
    const [qualification,setQualification] =useState("B.tech in mechanical engineering ");
    const [yearOfPassing,setYearOfPassing] =useState(2021);
    const [createPassword,setCreatePassword] =useState("1234");
    const [reEnterPassword,setReEnterPassword] =useState("1234");
    const [address,setAddress] =useState("A/P sangli");
    const [state,setState] =useState("maharashtra");
    const [securityQuestion,setSecurityQuestion] =useState("what is your age ");
    const [securityQuestionAnswer,setSecurityQuestionAnswer] =useState("24");


   





    // console.log(firstName)

    const submitFormHandler=(e)=>{
 
        // e.preventDefault();
        // alert("  Registered successfully")

        const  data = {
            firstName,
            middleName,
           lastName ,
            email,
            mobileNo,
           dateOfBirth,
           gender,
           instituteName,
           qualification,
           yearOfPassing,
           createPassword,
           reEnterPassword,
           address,
          state,
          securityQuestion,
           securityQuestionAnswer,
    
    
       }
    console.log(data)



    axios.post("http://localhost:1500/users" ,data)
    .then(res=>{
        alert("Form Submitted!")
        window.location.reload();
        navigate("/");
    })
    .catch(err=> alert(err))


      

    }

    
    return(
        <>
 <div>
  <form id="maincontainer" onSubmit={submitFormHandler}>
     
<ul>
    <div >
    <li>
 
    <label> First Name : </label> 
 <select required>
      <option>--</option>
      <option>Mr</option>
       <option>Mrs</option>
      <option>Miss</option>
 </select>
     <input type="text"  placeholder="Enter First Name " required onChange={(e)=>{ setFirstName(e.target.value)}} />
  
    <label> Middle Name : </label> <input type="text" placeholder="Enter Middle Name " required onChange={(e)=>{ setMiddleName(e.target.value)}}/>
    <label> Last Name : </label> <input type="text" placeholder="Enter Last Name " required onChange={(e)=>{ setLastName(e.target.value)}}/>
    </li>

    <li>
    <label> Email : </label> <input type="email" placeholder="Enter Email " required onChange={(e)=>{ setEmail(e.target.value)}}/>
    </li>

    <li>
    <label> Mobile No : </label> <input type="text" placeholder="Enter Mobile Number " required onChange={(e)=>{ setMobileNo(e.target.value)}}/>

    </li>
    <li>
    <label> Date Of Birth : </label> <input type="date" placeholder=" " required onChange={(e)=>{ setDateOfBirth(e.target.value)}}/>
    </li>
    <li>
        <label > Gender :</label>
        <select required onChange={(e)=>{ setGender(e.target.value)}}>
      <option>--</option>
      <option>Male</option>
       <option>Female</option>
      <option>Others</option>
 </select>
        {/* Gender :
        <br />
    <input type="radio" name="gender" id="m" value="Male" required/>
        <label for="M"> Male</label><br />
        <input type="radio" name="gender" id="f" value="Female" required/>
        <label for="F"> Female</label><br />
        <input type="radio" name="gender" id="o" value="Others" required/>
        <label for="O"> Others</label> */}
    </li>
    <li>
        <label> Institute Name :</label>
        <input type="text" placeholder="Institute Name " required onChange={(e)=>{ setInstituteName(e.target.value)}}/>
    </li>

    <li>
         <label> Qualification :</label>
         <select required onChange={(e)=>{ setQualification(e.target.value)}}>
      <option>Select Your Highest Qualification</option>
      <option>B.A</option>
       <option>B.com</option>
      <option>B.tech in Mechanical Engineering </option>
      <option> Mechanical Engineering </option>
      <option>B.tech in Computer Engineering</option>
      <option>B.tech in agriculture Technology</option>
      <option>B.tech in civil Engineering</option>
      <option>B.tech in Electronics Engineering</option>
      <option> BSC</option>
      <option>BCA</option>
      <option>pharmacy</option>
      <option>MBA</option>
      <option>MCA</option>
 </select>
    </li>

    <li>
<label> Year Of Passing :</label>
<select required onChange={(e)=>{ setYearOfPassing(e.target.value)}}>
<option>Select Year Of passing</option>
      <option>2022</option>
      <option>2021</option>
       <option>2020</option>
      <option>2019</option>
 </select>
    </li>
    <li>
        <label > Create Password :</label>
        <input type="password"  placeholder="Password" required onChange={(e)=>{ setCreatePassword(e.target.value)}}/>
    </li>
    <li>
        <label >  Re-enter Password :</label>
        <input type="password"  placeholder="Password" required onChange={(e)=>{ setReEnterPassword(e.target.value)}}/>
    </li>
    <li>
        <label > Address :</label>
<textarea name="Address" id="" cols="30" rows="3" onChange={(e)=>{ setAddress(e.target.value)}}></textarea>
    </li>
    
    <li>
        <label> State :</label>
        <select required onChange={(e)=>{ setState(e.target.value)}}> 
                    <option>choose state</option>
                    <option>maharashtra</option>
                    <option>punjab</option>
                    <option>hariyana</option>
                    <option>goa</option>
                    <option>gujrat</option>
                    <option>delhi</option>
                </select>
        </li>
        <li>
                <label for="security question ">security question :</label>
                <select required onChange={(e)=>{ setSecurityQuestion(e.target.value)}}> 
                 <option>choose the security question </option>
                    <option>what is your age </option>
                    <option>what is your state name </option>
                    <option>which is your favourite food </option>
                    <option>who is your best friend </option>
                    <option>what is your school name </option>
                    <option>what is your college name  </option>
                </select>
               </li>
             
             <li>
                 <label > Security question Answer</label>
                 <input type="text" placeholder=" Answer" onChange={(e)=>{ setSecurityQuestionAnswer(e.target.value)}}/>
             </li>
             <div>
                 <button  className="btn btn-success" > Submit</button>
             </div>
            
    </div>
   
</ul>    
  
  </form>

</div>

        </>
    )
}

export default Apply;