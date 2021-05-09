import React from "react";
import picture from "./picture.jpg"

const About = () => (
  <div>
    <h1>About Page</h1>
    <img src={picture} />
    <p>
      My name is Preston Geyer. I am a full stack web developer who is currently learning react.
      I am close to finishing my coding bootcamp and am excited to jump into the field.
      I have skills with HTML,CSS(bootstrap4), javascript, node.js, mysql, mongooosedb. and many other
      coding langues. You can find out more in my resume section. If you want to contact me go ahead and 
      look at the contact tab! If you want to check out past projects I've done feel free to check out the
      works tab. There you will find links to the last 6 projects I've worked on.
    </p>
  </div>
);

export default About;
