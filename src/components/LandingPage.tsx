import './LandingPage.css'
import testimonial1 from '../assets/landingPageImages/testimonial-1.png';
import testimonial2 from '../assets/landingPageImages/testimonial-2.png';
import menuIcon from '../assets/landingPageImages/menu-icon.svg';
import closeIcon from '../assets/landingPageImages/close-icon.svg';
import heroImage from '../assets/landingPageImages/hero-image.png';
import startIcon from '../assets/landingPageImages/start-icon.svg';
import course1 from '../assets/react.svg';
import course2 from '../assets/landingPageImages/courses2.jpg';
import facebook from '../assets/landingPageImages/facebook-logo.svg';
import instagram from '../assets/landingPageImages/instagram-logo.svg';
import googlePlayStore from '../assets/landingPageImages/google-play-icon.svg';

const LandingPage = () => {
  
  return (
    <div>
  <header>
    <div className="wrapper">
      <nav>
        <div className="logo">CodeWithMe</div>

        <ul>
          <li>
            <a href="#">Overview</a>
          </li>

          <li>
            <a href="#">Curriculum</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#" className="btn dark">Enroll Now</a>
          </li>
        </ul>
      </nav>

      <nav className="mobile-nav">
        <div className="logo">CodeWithMe</div>
        <div className="menu-icon">
          <img src={menuIcon} alt="menu" />
        </div>
      </nav>

      <div className="mobile-menu-container">
        <div className="close-icon">
          <img src={closeIcon} alt="close menu" />
        </div>

        <ul>
          <li>
            <a href="#">Overview</a>
          </li>

          <li>
            <a href="#">Curriculum</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#" className="btn dark">Enroll Now</a>
          </li>
        </ul>
      </div>

      <div className="hero-section">
        <div className="left">
          <h1>
            Zero → Hero:
            <br />
            Frontend to DevOps
          </h1>

          <p>
            A practical, project-driven pathway that takes you from basics to
            job-ready — frontend development, deployment automation, cloud
            workflows and DevOps practices. Built for school students,
            career-switchers, IT pros and non-technical learners.
          </p>

          <a href="#" className="btn light enrol-icon">Get Started</a>
        </div>

        <div className="right">
          <img src={heroImage} alt="course hero" />
        </div>

        <div className="achievement-cards">
          <div className="achievement-card students-enrolled">
            <div className="content">
              <div>
                <h3>10K+</h3>
              </div>
              <p>Learners Trained</p>
            </div>

            <div className="bg"></div>
          </div>

          <div className="achievement-card overall-rating">
            <div className="content">
              <div>
                <h3>4.8</h3>
                <img src={startIcon} alt="rating star" />
              </div>
              <p>Average Rating</p>
            </div>

            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div className="wrapper">
    <section className="testimonials-section">
      <div className="left">
        <div className="testimonial-card">
          <div className="content">
            "This course turned my curiosity into a career. The hands-on
            projects and mentor feedback were game changers."
          </div>

          <div className="info">
            <h4>Priti K.</h4>
            <p className="company">Frontend Developer</p>
          </div>

          <img src={testimonial1} alt="Jane Cooper" />
        </div>

        <div className="testimonial-card">
          <div className="content">
            "A perfect path for non-tech learners — clear, friendly, and
            practical."
          </div>

          <div className="info">
            <h4>Saurav S.</h4>
            <p className="company">Junior DevOps Engineer</p>
          </div>

          <img src={testimonial2} alt="Jacob Jones" />
        </div>
      </div>

      <div className="right">
        <h2>Why learners love this program</h2>

        <div className="features">
          <p>
            Learn by building: real projects that showcase frontend apps,
            CI/CD pipelines, containerization, and cloud deployments.
          </p>

          <p>
            Beginner-friendly tracks and step-by-step mentoring — suitable for
            students, working professionals, and people from non-IT backgrounds.
          </p>
        </div>

        <a href="#" className="btn light desktop-btn">Explore Curriculum</a>
      </div>

      <a href="#" className="btn light mobile-btn">Explore Curriculum</a>
    </section>
  </div>

  <section className="courses-section">
    <div className="wrapper">
      <h2 className="light">Core Tracks</h2>

      <div className="course-cards">
        <div className="course-card">
          <img src={course1} alt="Frontend track" />

          <div className="info">
            <h3>Frontend: HTML → React</h3>
            <div className="duration">80 Hrs</div>
          </div>
        </div>

        <div className="course-card">
          <img src={course2} alt="DevOps track" />

          <div className="info">
            <h3>DevOps: CI/CD & Cloud Basics</h3>
            <div className="duration">100 Hrs</div>
          </div>
        </div>
      </div>

      <a href="#" className="btn light">View All Tracks</a>
    </div>
  </section>

  <div className="wrapper">
    <section className="app-section">
      <h2>Get our Companion App</h2>
      <p>Practice on the go — quizzes, notes, and labs on your phone.</p>

      <div className="app-buttons">
        

        <div className="app-btn">
          <img src={googlePlayStore} alt="google play" />
          <span>Google Play</span>
        </div>
      </div>
    </section>
  </div>

  <footer>
    <div className="wrapper">
      <div className="links-container">
        <div className="links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h3>Resources</h3>

          <ul>
            <li>
              <a href="#">Login</a>
            </li>

            <li>
              <a href="#">Downloads</a>
            </li>

            <li>
              <a href="#">All Courses</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h3>Contact</h3>

          <ul>
            <li>contact@codewithme.example</li>
          </ul>

          <div className="social">
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="facebook" />
            </a>

            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </div>

          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Email Address" aria-label="Subscribe email" />
            <button className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <p className="copyright">This website is developed by Pankaj K. © 2025</p>
    </div>
  </footer>

  <script src="main.js"></script>
</div>

  );
};

export default LandingPage;
