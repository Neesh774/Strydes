import strydeslogo from './strydeslogo.png';
import whyUsOne from './why-us-1.jpg';
import whyUsTwo from './why-us-2.jpg';
import whyUsThree from './why-us-3.jpg';
import heroBG from './hero-bg.svg';
import about from './about-img.jpg';

import ScriptTag from 'react-script-tag';

import { useEffect } from 'react';

import './App.css';



function App() {

  return (
    <div className="App">

      <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

        <title>Strydes</title>
        <meta content="" name="description"/>
        <meta content="" name="keywords"/>

        <link href="favicon.ico" rel="image/x-icon"/>
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i" rel="stylesheet"/>

        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>

        <script src="./main.js"></script>

      </head>

      <body>

      <header id="header">
        <div className="container-fluid">

          <div className="logo">
            <h1>
              <img href="index.html" src={strydeslogo}/>
              <a href="index.html">Strydes</a>
            </h1>
          </div>

          <button type="button" class="nav-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-list bx bx-menu" viewBox="4 3 10 10">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          <nav class="nav-menu">
            <ul>
              <li className="active"><a href="#header" className="scrollto">Home</a></li>
              <li><a href="#about" className="scrollto">About Us</a></li>
              <li><a href="#why-us" className="scrollto">Why Us</a></li>
              <li><a href="" className="button">Log in</a></li>
              <li><a href="#contact" className="scrollto">Contact Us</a></li>
            </ul>
          </nav>

        </div>
      </header>

      
      <section id="hero">
        <div className="hero-container">
          <h1>Welcome to Strydes</h1>
          <h2>Let us know if you want to be notified for future updates!</h2>

          <form action="forms/notify.php" method="post" role="form" className="php-email-form">
            <div className="row no-gutters">
              <div className="col-md-6 form-group pr-md-1">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="col-md-6 form-group pl-md-1">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
            </div>

            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your notification request was sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Notify me!</button></div>
          </form>
        </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <img src={about} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h3 className = "text-center">Hundreds of developers </h3>
                <ul>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                  </svg> Hundreds of forums and developers available to help you.</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                      <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                  </svg> Start a blueprint and find others to work with you.</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                  </svg> Join anyone, and help yourself to the vast resources Strydes has to offer.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section id="why-us" className="why-us section-bg">
          <div className="container">

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img src={whyUsOne} className="card-img-top" alt="..."/>
                  <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-book icon" viewBox="-2 0 20 20">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                  </svg>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Mission</a></h5>
                    <p className="card-text">We want to connect developers all over the world, allowing them to find help on a project they're currently working on, and even allow others to join their projects.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img src={whyUsTwo} className="card-img-top" alt="..."/>
                  <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-calendar-date icon" viewBox="-2 0 20 20">
                    <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Plan</a></h5>
                    <p className="card-text">Strydes will have two functions, a forum base where others can create and answer questions, and a Blueprint database, where you can create and join Blueprints, which are any computer science project you're currently working on. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img src={whyUsThree} className="card-img-top" alt="..."/>
                  <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-eye-fill icon" viewBox="-2 0 20 20">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Vision</a></h5>
                    <p className="card-text">We envision a future where aspiring developers around the world can connect and collaborate on exciting projects. </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

         <section className="faq">
          <div className="container">
            <div className="section-title">

              <h2>Frequenty Asked Questions</h2>
            </div>

            <ul className="faq-list">

              <li>
                <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bx bx-down-arrow-alt icon-show"></i><i className="bx bx-x icon-close"></i></a>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>

            </ul>

          </div>
        </section>

       
        <section id="contact" className="contact section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Contact Us</h2>
            </div>

            <div className="row justify-content-center">

              <div className="col-lg-3 col-md-5 mb-5 mb-md-0">
                <div className="info">
                  <div className="address">
                    <i className="bx bx-map"></i>
                    <p>A108 Adam Street<br/>New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bx bx-envelope"></i>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bx bx-phone-call"></i>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>

              </div>

              <div className="col-lg-5 col-md-7">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group mt-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>


      <footer id="footer">
        <div className="container">
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/" style={{color: '#2f1708'}}>BootstrapMade</a>
          </div>
        </div>
      </footer>


      

      </body>
    </div>
  );
}

export default App;
