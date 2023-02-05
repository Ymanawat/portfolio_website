import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Contact from '../components/contact'
import './homepage.css'

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <Helmet>
        <title>Yogendra Manawat</title>
      </Helmet>
      <div className="homepage-portfolio">
        <nav id="Nav" className="homepage-navbar">
          <Link to="/" className="homepage-navlink">
            <img
              alt="BLACKSIGNPNG1113"
              src="/playground_assets/blacksignpng1113-o6g9.svg"
              className="homepage-b-l-a-c-k-s-i-g-n-p-n-g1"
            />
          </Link>
          <nav className="homepage-navbar1">
            <a href="#Work" className="homepage-link button">
              WORK
            </a>
            <a href="#foot" className="homepage-link01 button">
              HIRE ME
            </a>
          </nav>
        </nav>
        <div id="Intro" className="homepage-hero">
          <div className="homepage-intro">
            <span className="homepage-text">Hello!</span>
            <span className="homepage-text01">
              <span>
                I&apos;m Yogendra - A designer focused on UI/UX design,
                Prototyping.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                I design &amp; develop Apps and website and make them easy to
                use.
              </span>
              <br></br>
            </span>
            <div className="homepage-social-icon">
              <a
                href="https://www.behance.net/yogendramanawat"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link02"
              >
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-8ton-200h.png"
                  className="homepage-pasted-image"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yogendra-manawat-16a910200/"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link03"
              >
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-q7wn-200h.png"
                  className="homepage-pasted-image01"
                />
              </a>
              <a
                href="https://github.com/Ymanawat"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link04"
              >
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-q57w-200h.png"
                  className="homepage-pasted-image02"
                />
              </a>
              <a
                href="https://www.instagram.com/YUG_MANOJ/"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link05"
              >
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-a4e-200h.png"
                  className="homepage-pasted-image03"
                />
              </a>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/group%201%20%5B2%5D-600w.png"
            className="homepage-pasted-image04"
          />
        </div>
        <div id="Work" className="homepage-be-frend">
          <div className="homepage-container01">
            <h1 className="homepage-text07">BeFrend</h1>
            <span className="homepage-text08">
              <span>
                A platform to find your college peers based on interests and
                skills.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="homepage-btn-group">
              <a
                href="https://uxfol.io/p/bae8074e/03c996d9"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link06 button"
              >
                View Case Study
              </a>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-bfpo-1500h.png"
            className="homepage-pasted-image05"
          />
        </div>
        <div className="homepage-twins">
          <div className="homepage-container02">
            <h1 className="homepage-text12">Twins</h1>
            <span className="homepage-text13">
              <span>A puzzle game Designed and Developed by me.</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="homepage-btn-group1">
              <a
                href="https://www.behance.net/gallery/129900577/Twins-Game-UI"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link07 button"
              >
                View Full Design
              </a>
            </div>
            <div className="homepage-btn-group2">
              <a
                href="https://yogendram.itch.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link08 button"
              >
                Play
              </a>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/group%2035%20%5B1%5D-1500h.png"
            className="homepage-pasted-image06"
          />
        </div>
        <div className="homepage-ardor">
          <div className="homepage-container03">
            <h1 className="homepage-text17">ARDOR</h1>
            <span className="homepage-text18">
              <span>
                A Project Hosting Website, where university students can host
                their projects and can learn from others
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="homepage-btn-group3">
              <a
                href="https://ymanawat.github.io/Ardor_website/"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link09 button"
              >
                Go to Website
              </a>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/screenshot_20230204_102640-400h.png"
            className="homepage-pasted-image07"
          />
        </div>
        <div className="homepage-be-frend-web">
          <div className="homepage-container04">
            <h1 className="homepage-text22">BeFrend Website</h1>
            <span className="homepage-text23">
              <span>
                A platform to find your college peers based on interests and
                skills.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="homepage-btn-group4">
              <a
                href="https://soniasingh98.github.io/Be-Frend/"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link10 button"
              >
                Go to Website
              </a>
            </div>
            <div className="homepage-btn-group5">
              <a
                href="https://www.behance.net/gallery/147160471/BeFren-Friends-App-UI"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link11 button"
              >
                Mobile App
              </a>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/screenshot_20230204_102331-400h.png"
            className="homepage-pasted-image08"
          />
        </div>
        <div className="homepage-creatives">
          <div className="homepage-container05">
            <h1 className="homepage-text27">Social Media Creatives</h1>
            <span className="homepage-text28">
              <span>
                Creative designes created for awairness and moment marketing
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="homepage-btn-group6">
              <a
                href="https://www.behance.net/gallery/127422099/Social-Media-Creatives"
                target="_blank"
                rel="noreferrer noopener"
                className="homepage-link12 button"
              >
                Explore All Designs
              </a>
            </div>
          </div>
          <div className="homepage-container06">
            <div className="homepage-container07">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-2a1f-300w.png"
                className="homepage-pasted-image09"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-eyd-300w.png"
                className="homepage-pasted-image10"
              />
            </div>
            <div className="homepage-container08">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-ke-300w.png"
                className="homepage-pasted-image11"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-bf8-300w.png"
                className="homepage-pasted-image12"
              />
            </div>
          </div>
        </div>
        <Contact></Contact>
        <footer id="foot" className="homepage-footer">
          <div className="homepage-separator"></div>
          <div className="homepage-container09">
            <span className="homepage-text32">2023</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Homepage
