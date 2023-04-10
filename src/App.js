import React from 'react';
import './App.css';
import photo from "./new.jpg";
function Portfolio() {
  return (
    <div>
      <section className="hero">
        <div className="container text-center">
          <h1 className="mb-3">Welcome to my portfolio</h1>
          <p className="lead mb-5">Hi there! Welcome to my portfolio. I'm <b>Arshath Ahamed</b>, a passionate web developer currently pursuing my Bachelor's degree in Computer Science and Engineering. My interest lies in creating functional and aesthetically pleasing websites that offer a seamless user experience.</p>
          <a href="#" className="btn btn-primary">View Projects</a>
        </div>
      </section>

      <header className=" p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className='d-flex'>
                
                <div className="col-md-12 text-center">
                  <h2>About Me</h2>
                  <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }} className="w-100">
                    I'm Arshath Ahamed, an engineering student with a passion for web development and problem solving. With expertise in HTML5, CSS, Bootstrap, ReactJS, and NodeJS, I'm constantly seeking new ways to enhance the user experience and build intuitive interfaces that are both aesthetically pleasing and highly functional. As a skilled problem solver with a background in competitive programming (Python, C++, Java), I thrive on tackling complex challenges and finding innovative solutions. My interests in UI/UX keep me engaged and always eager to learn. If you're looking for a talented web developer with a keen eye for design and a dedication to excellence, let's connect and explore how we can work together to achieve your goals!
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      <section className='p-5'>
      <div className="col-md-8 container ms-5 ps-4">
        <h2>Projects</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <a href="#">Project 1</a>
          </li>
          <li className="list-group-item">
            <a href="#">Project 2</a>
          </li>
          <li className="list-group-item">
            <a href="#">Project 3</a>
          </li>
        </ul>
      </div>
      </section>

      <footer class="bg-light p-3 ps-4">
  <div class="container my-3">
    <div class="row">
      <div class="col-md-8">
        <h2>Contact Me</h2>
        <p>You can <a href="mailto:ahamedarshath35@gmail.com">contact me</a> at ahamedarshath35@gmail.com or on mobile - <span style={{fontWeight: 'bold', color:'#1a8cff'}}>+91 9080814759</span>.</p>

        <p>© 2023 Arshath Ahamed</p>
      </div>
      <div class="col-md-4">
        <h2>Connect with Me</h2>
        <ul class="list-unstyled">
          <li><a href="https://www.linkedin.com/in/arshath-ahamed-187a60176/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/arshath-ahamed" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/ArshathAhamed6" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>



    </div>
  );
}

export default Portfolio;