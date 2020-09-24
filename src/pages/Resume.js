import React, {useState,useEffect,useRef} from 'react';
import {Link, Route} from 'react-router-dom';
import resume1 from '../img/resume2020img1.jpg';
import resume2 from '../img/resume2020img2.jpg';
import './css/resume.css';

export const Skills = () => {
  const [skills,toggleSkills] = useState(true);
  useEffect(()=>{

      document.querySelector('.skillsList').classList.toggle('closed');
      document.querySelector('.caret').classList.toggle('closed')

  },[skills])
  return (
    <div className="skills block  mx-auto px-32 ">
     <span className="block"> <h1 className="skills   inline    "> Skills </h1> <button classList="clickbutton" onClick={()=>toggleSkills(!skills)}> <div className="caret closed"> {"       "}> </div></button> </span>

     <ul className="skillsList closed  list-disc">
       <li className="" >Javascript(3+ years)</li>
       <li>React Native</li>
       <li> node.js </li>
       <li> C# (2+ years)</li>
       <li> .Net </li>
       <li> SQL/MySQL</li>
       <li> HTML/CSS </li>
       <li> Visual Studio </li>
       <li> Ruby (2+ years) </li>
       <li> Ruby on Rails </li>
       <li> Adobe Illustrator</li>
       <li> Microsoft Office Suite </li>


     </ul>
    </div>
  )
}

export const Experience = () => {
  return (
    <div className="experienceBox block mx-auto px-32">
     <h1 className="experience"> Experience </h1>
     <ul> </ul>
     <div className="eachExperiencebox">
       <p className="date"> AUG 2018 – CURRENT </p>
       <span className="titlecompany"><h3 className="inline">Junior Software Developer /</h3> <h3 className="company inline"> Prosper Technologies LLC </h3></span>
       <p className="jobdo"> My time with the company has been spent in collaborative C# development, developing database visualization systems in C# and the .Net framework.  I am currently tasked with developing a new, company wide API  intended to help our clients in accessing, structuring, and analyzing decades of consumer surveys and research data.  </p>
     </div>
     <div className="eachExperiencebox">
       <p className="date"> APR 2019 – MAY 2019 </p>
       <span className="titlecompany"><h3 className="inline">Intro to Coding Workshop Instructor/</h3> <h3 className="company inline"> The Fuse Factory Electronic and Digital Arts Lab </h3></span>
       <p className="jobdo"> Assistant instructor for a 3 month workshop in which I helped students develop a basic understanding of Java and the fundamentals behind the Processing programming environment with an emphasis on its graphical command set.  </p>
     </div>
     <div className="eachExperiencebox">
       <p className="date"> JAN 2018– MAY 2018 </p>
       <span className="titlecompany"><h3 className="inline">Student Developer  /</h3> <h3 className="company inline"> Tech Talent South </h3></span>
       <p className="jobdo">As a student at Tech Talent South, I continued to expand my skills with both front-end and back-end web development through education in Ruby and Javascript while developing applications using Ruby on Rails, React, Firebase, and Redux.  </p>
     </div>
     <div className="eachExperiencebox">
       <p className="date"> JAN 2017  – MAY 2017 </p>
       <span className="titlecompany"><h3 className="inline">Community Engagement Intern   /</h3> <h3 className="company inline"> Global Gifts Inc </h3></span>
       <p className="jobdo">My primary responsibility was creating eye-catching, thought-provoking material for the company blog and Twitter account. Through this task I learned how to incorporate new and unique content without compromising corporate goals and visions. I successfully doubled the Twitter follower base and increased overall website engagements a thousand-fold.  </p>
     </div>
     <div className="eachExperiencebox">
       <p className="date"> AUG 2016  – AUG 2017 </p>
       <span className="titlecompany"><h3 className="inline">Freelance Journalist and Concert Reviewer    /</h3> <h3 className="company inline"> The Lantern, OSU </h3></span>
       <p className="jobdo">My primary responsibility was creating eye-catching, thought-provoking material for the company blog and Twitter account. Through this task I learned how to incorporate new and unique content without compromising corporate goals and visions. I successfully doubled the Twitter follower base and increased overall website engagements a thousand-fold.  </p>
     </div>

    </div>
  )
}

const Resume = () => {
  const [skills,toggleSkills] = useState(true);
  useEffect(()=>{

      document.querySelector('.skillsList').classList.toggle('closed');
      document.querySelector('.caret').classList.toggle('closed')

  },[skills])
  const [upButton, toggleUpButton] = useState(false)
  useEffect(() => {

  })


  const clickHandler = (e) => {
    let there = e.currentTarget.value;
    let theLink = document.querySelector(`#${there}`);
    theLink.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    if(upButton){

      toggleUpButton(false)
    } else {
      setTimeout(() => {toggleUpButton(true) },500)
    }

  }

    return (
       <div className="relative  pt-8   px-16 text-center block resumeBox" id="upID" >


        <span className="text-center mb-16 ml-16">
           <ul className="inline-block float-left">
                                                          <li><button value="skillsID" onClick={clickHandler}> Skills </button> </li>
                                                          <li><button value="experienceID"  onClick={clickHandler}> Experience </button> </li>
                                                          <li><button value="educationID"  onClick={clickHandler}> Education </button> </li>
                                                          <li><button  className={ `up ${upButton? "visible" : "hidden"}`  } value="upID"  onClick={clickHandler}> ^^ To Top </button> </li>


                                                    </ul>

          <div className="inline-block  relative ml-32 ">
            <h1 className="resume text-6xl h1resume"> Noah Kumar Wotring </h1>
            <h2 className=""> Full-Stack Web Developer </h2>
            </div>
          <p className="inline-block  float-right ">9722 Sibley Cir, Orlando FL 32836 <br />
                                    614-312-0290 <br />
                                    noah13wotring@outlook.com <br />
                                    <a href="www.linkedin.com/in/noahwotring" className="hover:text-blue-800 text-blue-400"> Linked In  <i class="fa fa-linkedin-square" ></i>  </a>
          </p>
        </span>

        <div className="resumeBody w-full">

        <p className="objectiveBox mx-auto mt-16 mb-16 py-4">
          <b >Objective </b>: To create something powerful, something meaningful, and something beautiful. I seek to work with a team of like-minded individuals where I may use my skills as a Full-Stack Developer to help us achieve something greater than ourselves.
         </p>
         <div className="skills block  mx-auto px-32 " id="skillsID" >
          <span className="block"> <h1 className="skills   inline    "> Skills </h1> <button classList="clickbutton" onClick={()=>toggleSkills(!skills)}> <div className="caret closed"> {"       "}> </div></button> </span>

          <ul className="skillsList closed  list-disc" >
            <li className="" >Javascript(3+ years)</li>
            <li>React Native</li>
            <li> node.js </li>
            <li> C# (2+ years)</li>
            <li> .Net </li>
            <li> SQL/MySQL</li>
            <li> HTML/CSS </li>
            <li> Visual Studio </li>
            <li> Ruby (2+ years) </li>
            <li> Ruby on Rails </li>
            <li> Adobe Illustrator</li>
            <li> Microsoft Office Suite </li>
            <li> Amazon Web Servers/AWS </li>


          </ul>
         </div>
         <div className="experienceBox block mx-auto px-32" id="experienceID" >
          <h1 className="experience"> Experience </h1>
          <ul> </ul>
          <div className="eachExperiencebox">
            <p className="date"> AUG 2018 – CURRENT </p>
            <span className="titlecompany"><h3 className="inline">Junior Software Developer /</h3> <h3 className="company inline"> Prosper Technologies LLC </h3></span>
            <p className="jobdo"> My time with the company has been spent in collaborative C# development, developing database visualization systems in C# and the .Net framework.  I am currently tasked with developing a new, company wide API  intended to help our clients in accessing, structuring, and analyzing decades of consumer surveys and research data.  </p>
          </div>
          <div className="eachExperiencebox">
            <p className="date"> APR 2019 – MAY 2019 </p>
            <span className="titlecompany"><h3 className="inline">Intro to Coding Workshop Instructor/</h3> <h3 className="company inline"> The Fuse Factory Electronic and Digital Arts Lab </h3></span>
            <p className="jobdo"> Assistant instructor for a 3 month workshop in which I helped students develop a basic understanding of Java and the fundamentals behind the Processing programming environment with an emphasis on its graphical command set.  </p>
          </div>
          <div className="eachExperiencebox">
            <p className="date"> JAN 2018– MAY 2018 </p>
            <span className="titlecompany"><h3 className="inline">Student Developer  /</h3> <h3 className="company inline"> Tech Talent South </h3></span>
            <p className="jobdo">As a student at Tech Talent South, I continued to expand my skills with both front-end and back-end web development through education in Ruby and Javascript while developing applications using Ruby on Rails, React, Firebase, and Redux.  </p>
          </div>
          <div className="eachExperiencebox">
            <p className="date"> JAN 2017  – MAY 2017 </p>
            <span className="titlecompany"><h3 className="inline">Community Engagement Intern   /</h3> <h3 className="company inline"> Global Gifts Inc </h3></span>
            <p className="jobdo">My primary responsibility was creating eye-catching, thought-provoking material for the company blog and Twitter account. Through this task I learned how to incorporate new and unique content without compromising corporate goals and visions. I successfully doubled the Twitter follower base and increased overall website engagements a thousand-fold.  </p>
          </div>
          <div className="eachExperiencebox">
            <p className="date"> AUG 2016  – AUG 2017 </p>
            <span className="titlecompany"><h3 className="inline">Freelance Journalist and Concert Reviewer    /</h3> <h3 className="company inline"> The Lantern, OSU </h3></span>
            <p className="jobdo">My primary responsibility was creating eye-catching, thought-provoking material for the company blog and Twitter account. Through this task I learned how to incorporate new and unique content without compromising corporate goals and visions. I successfully doubled the Twitter follower base and increased overall website engagements a thousand-fold.  </p>
          </div>

         </div>

         <div className="educationBox  block mx-auto px-32" id="educationID">
          <h1 className="h1Education"> Education </h1>
          <p className="date"> August 2017 </p>
          <span className="titlecompany"><h3 className="inline">B.A. Strategic Communications   /</h3> <h3 className="company inline"> The Ohio State University, Columbus </h3></span>



         </div>



         <br />
         {/*
          <div className="block">
           <img src={resume1} className="w-1/4 block" />
             <img src={resume2} className="w-1/4 block" />
          </div>
          */}
        </div>
      </div>

    )
  }

export default Resume;
