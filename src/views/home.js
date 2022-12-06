import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Presentation Page</title>
        <meta property="og:title" content="Presentation Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-logo"></div>
          <a href="#about-us" className="home-link Anchor">
            About Us
          </a>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img
                alt="image"
                src="/playground_assets/default-img.svg"
                className="home-image"
              />
              <div data-role="CloseMobileMenu" className="home-container01">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container">
                <span className="home-link1 Anchor">features</span>
                <a href="#services" className="home-link2 Anchor">
                  services
                </a>
                <a href="#about-us" className="home-link3 Anchor">
                  About Us
                </a>
                <span className="home-link4 Anchor">contact</span>
              </div>
              <button className="home-cta-btn Anchor button">
                sTART BUILDING
              </button>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon02"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon04"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
          <span className="home-link5">contact</span>
          <div className="home-container02">
            <div className="home-container03">
              <div className="home-cta-container">
                <div data-role="BurgerMenu" className="home-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <span className="home-link6">
              <span className="home-text Anchor">Careers</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/logo%20png-200h.png"
        className="home-image01"
      />
      <div className="home-hero">
        <div className="home-hero-text-container">
          <h1 className="home-heading">
            <span>
              Your partner
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>in talent acquisition</span>
          </h1>
          <span className="home-text005 Section-Text">
            We empower you by enabling frictionless and and simple way to access
            local and global tech talent so that you can focus on your core
            business.
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/1-1500w.png"
          className="home-image02"
        />
      </div>
      <div className="home-container04">
        <h1 className="home-text006">What we do</h1>
        <span className="home-text007">
          <span>
            Our goal is to connect potential employers and employee
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>by cutting</span>
          <br></br>
          <span>
            {' '}
            the hassle out of hiring, onboarding, administration, compliance,
            payrol
          </span>
          <span>l</span>
          <br></br>
          <span> and performance management.</span>
        </span>
        <img
          alt="image"
          src="/playground_assets/1.5-200w.png"
          className="home-image03"
        />
        <img
          alt="image"
          src="/playground_assets/1.4-200h.png"
          className="home-image04"
        />
        <img
          alt="image"
          src="/playground_assets/1.3-200w.png"
          className="home-image05"
        />
        <img
          alt="image"
          src="/playground_assets/1.2-200h.png"
          className="home-image06"
        />
        <span className="home-text015">Global Talent</span>
        <span className="home-text016">
          <span>Managed</span>
          <br></br>
          <span>Services</span>
          <br></br>
        </span>
        <span className="home-text021">
          <span>
            Serverless
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Development</span>
        </span>
        <span className="home-text025">
          <span>DevOps as </span>
          <br></br>
          <span>Service</span>
          <br></br>
        </span>
      </div>
      <div className="home-section-separator"></div>
      <div id="services" className="home-services"></div>
      <div id="about-us" className="home-about-us">
        <div className="home-text-container"></div>
        <button className="home-cta-btn1 button Anchor">START BUILDING</button>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-container05"></div>
      <div className="home-features">
        <h1 className="home-text030">Why Empower Consulting</h1>
        <span className="home-text031">
          <span>
            We are passionate engineers with more than 30+ years of building
          </span>
          <br></br>
          <span>digital-first experiences that have redefined industries!</span>
          <br></br>
          <span>
            We believe our customers will innovate, streamline the process and
            reinvent
          </span>
          <br></br>
          <span>
            Industries. We encourage long-term partnerships to empower our
            custom-
          </span>
          <br></br>
          <span>er&apos;s talent quest with no strings attached.</span>
          <br></br>
        </span>
        <div className="home-container06">
          <div className="home-container07"></div>
          <img
            alt="image"
            src="/playground_assets/4-600h.png"
            className="home-image07"
          />
          <span className="home-text042">
            <span>Elastic Resourcing</span>
            <br></br>
            <br></br>
          </span>
          <span className="home-text046">
            <span>Our global reach enables your</span>
            <br></br>
            <span>business to grow effortlessly with</span>
            <br></br>
            <span>short ramp-up time</span>
            <br></br>
          </span>
          <span className="home-text053">
            <span>Our talent pool enables you to</span>
            <br></br>
            <span>access builders with experience</span>
            <br></br>
            <span>in the latest technology stack</span>
            <br></br>
          </span>
          <span className="home-text060">Accelerated Outcomes</span>
          <span className="home-text061">Strategic Partnerships</span>
          <span className="home-text062">
            <span>Our goal is to empower your</span>
            <br></br>
            <span>business and we take care of</span>
            <br></br>
            <span>background checks and</span>
            <br></br>
            <span>compliance requirements</span>
            <br></br>
          </span>
          <span className="home-text071">
            <span>We&apos;re more than technical experts,</span>
            <br></br>
            <span>We work with you to unlock full</span>
            <br></br>
            <span>value of Cloud, AI/ML and IoT</span>
            <br></br>
          </span>
        </div>
      </div>
      <span className="home-text078">Latest Technology</span>
      <img
        src="/playground_assets/1.1-1500w.png"
        alt="image"
        className="home-image08"
      />
      <div className="home-feature-card">
        <img
          src="/playground_assets/2.1-500h.png"
          alt="image"
          className="home-image09"
        />
        <span className="home-text079">
          <span>Get in touch with</span>
          <br></br>
          <span>Account Manager</span>
          <br></br>
        </span>
        <span className="home-text084">
          <span>Partner on</span>
          <br></br>
          <span>talent services</span>
          <br></br>
        </span>
        <span className="home-text089">
          <span>Deploy talent</span>
          <br></br>
          <span>and Support</span>
          <br></br>
        </span>
        <span className="home-text094">
          <span>Finalize talent</span>
          <br></br>
          <span>requirements</span>
          <br></br>
        </span>
        <span className="home-text099">
          <span>Understand outcomes</span>
          <br></br>
          <span>and strategic priorities</span>
          <br></br>
        </span>
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          className="home-image10"
        />
        <span className="home-text104">Our Talent Process</span>
        <span>Text</span>
      </div>
      <img
        src="/playground_assets/1.6-200h.png"
        alt="image"
        loading="lazy"
        className="home-image11"
      />
      <div className="home-blog">
        <div className="home-container08"></div>
        <img
          src="/playground_assets/1.8-200w.png"
          alt="image"
          className="home-image12"
        />
        <span className="home-text106">Outcome focused</span>
        <span className="home-text107">Long term oriented</span>
        <img
          src="/playground_assets/3-700w.png"
          alt="image"
          className="home-image13"
        />
        <span className="home-text108">
          <span>We obsess over winning customer trust</span>
          <br></br>
          <span>and work proactively to empower your</span>
          <br></br>
          <span>strategic outcomes</span>
          <br></br>
        </span>
        <span className="home-text115">
          <span>We invest in the talent and our customers.</span>
          <br></br>
          <span>
            We facilitate International Visa&apos;s for talent
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>based on client requirements</span>
          <br></br>
        </span>
      </div>
      <img
        src="/playground_assets/1.71-200h.png"
        alt="image"
        className="home-image14"
      />
      <div className="home-testimonial">
        <div className="home-container09">
          <div className="home-feature-card1">
            <span className="home-text122">DevOps as a Service</span>
            <span className="home-text123">What we deliver</span>
            <img
              src="/playground_assets/1.9-200h.png"
              alt="image"
              className="home-image15"
            />
            <span className="home-text124">
              <span>Accelerate your Cloud Journey and optimize costs.</span>
              <br></br>
              <span>We provide end to end consulting services, and staff</span>
              <br></br>
              <span>
                augmentation for project based work, day 2 support,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>application migration.</span>
              <br></br>
            </span>
          </div>
          <h1 className="home-text133">
            <span>Our Dev-Ops as a </span>
            <br></br>
            <span>sevice difference</span>
            <br></br>
          </h1>
          <h1 className="home-text138">
            <span>Our Dev-Ops as a </span>
            <br></br>
            <span>sevice difference</span>
            <br></br>
          </h1>
          <span className="home-text143 list-item">
            <span>Multi Cloud Certified Architects &amp; Engineers</span>
            <br></br>
          </span>
          <span className="home-text146 list-item">
            <span>Outcome driven and strategic perspective</span>
            <br></br>
          </span>
          <span className="home-text149 list-item">
            Proven track record of delivering results
          </span>
          <span className="home-text150 list-item">
            Upskilling - Workshop based training
          </span>
        </div>
      </div>
      <div className="home-feature-card2">
        <h1 className="home-text151">Contact us</h1>
        <span className="home-text152">
          <span>90 Burnhamthorpe Rd W Suite 1400, Mississauga, ON L5B 3C3</span>
          <br></br>
          <br></br>
        </span>
        <span className="home-text156">info@empowerconsulting.io</span>
      </div>
    </div>
  )
}

export default Home
