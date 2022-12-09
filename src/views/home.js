import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks2 from '../components/navigation-links2'
import FeatureCard31 from '../components/feature-card31'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vivid Feminine Crane</title>
        <meta property="og:title" content="Vivid Feminine Crane" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <img
          alt="logo"
          src="/playground_assets/logo%20png-1500h.png"
          className="home-image"
        />
        <div className="home-nav">
          <NavigationLinks2 rootClassName="rootClassName17"></NavigationLinks2>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image01"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks2 rootClassName="rootClassName18"></NavigationLinks2>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container02">
          <h1 className="home-text">Your partner in talent acquisition</h1>
          <span className="home-text01">
            <span>
              We empower you by enabling frictionless and simple
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              way to access local and global tech talent so that
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>you can focus on your </span>
            <span>core business.</span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/1-1500h.png"
          className="home-image02"
        />
      </div>
      <div className="home-banner">
        <h1 className="home-text06">What we do</h1>
        <span className="home-text07">
          <span>
            Our goal is to connect potential employers and employee by cutting
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            the hassle out of hiring, onboarding, administration, compliance,
            payroll
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>and performance management.</span>
          <span className="home-text13">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text14">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="home-container03"></div>
        <div className="home-container04">
          <FeatureCard31 rootClassName="rootClassName5"></FeatureCard31>
          <div className="home-feature-card">
            <img
              alt="image"
              src="/playground_assets/1.4-200h.png"
              className="home-image03"
            />
            <h2 className="home-text15">
              <span>
                Managed
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Services</span>
            </h2>
          </div>
          <div className="home-feature-card1">
            <img
              alt="image"
              src="/playground_assets/1.3-200w.png"
              className="home-image04"
            />
            <h2 className="home-text19">
              <span className="home-text20">DevOps as </span>
              <br></br>
              <span>Service</span>
              <br></br>
            </h2>
          </div>
          <div className="home-feature-card2">
            <img
              alt="image"
              src="/playground_assets/1.2-200h.png"
              className="home-image05"
            />
            <h2 className="home-text24">
              <span className="home-text25">Serverless </span>
              <br></br>
              <span>Development</span>
              <br></br>
            </h2>
          </div>
        </div>
      </div>
      <div className="home-features">
        <h1 className="home-text29">Why Empower Consulting</h1>
        <span className="home-text30">
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
            Industries.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            We encourage long-term partnerships to empower our custom-
          </span>
          <br></br>
          <span>er&apos;s talent quest with no strings attached.</span>
        </span>
        <div className="home-separator"></div>
        <div className="home-container05">
          <div className="home-container06">
            <div className="home-feature-card3">
              <div className="home-container07">
                <h2 className="home-text41">Latest Technology</h2>
                <span className="home-text42">
                  <span>
                    Our talent pool enables you to access builders with
                    experience
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>in the latest technology stack</span>
                </span>
              </div>
            </div>
            <div className="home-feature-card4">
              <div className="home-container08">
                <h2 className="home-text46">Elastic Resourcing</h2>
                <span className="home-text47">
                  Our global reach enables yourbusiness to grow effortlessly
                  withshort ramp-up time
                </span>
              </div>
            </div>
            <div className="home-feature-card5">
              <div className="home-container09">
                <h2 className="home-text48">Accelerated Outomes</h2>
                <span className="home-text49">
                  Our goal is to empower your business and we take care of
                  background checks and compliance requirements
                </span>
              </div>
            </div>
            <div className="home-feature-card6">
              <div className="home-container10">
                <h2 className="home-text50">Strategic Partnerships</h2>
                <span className="home-text51">
                  We&apos;re more than technical experts, We work with you to
                  unlock full value of Cloud, AI/ML and IoT
                </span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/4-500h.png"
            className="home-image06"
          />
        </div>
      </div>
      <div className="home-banner1">
        <div className="home-container11"></div>
      </div>
      <div className="home-hero1">
        <img
          alt="image"
          src="/playground_assets/3-1500h.png"
          className="home-image07"
        />
        <div className="home-container12">
          <img
            alt="image"
            src="/playground_assets/1.7-1500h.png"
            className="home-image08"
          />
          <h2 className="home-text52">Outcome focused</h2>
          <span className="home-text53">
            <span>We obsess over winning customer trust</span>
            <br></br>
            <span>and work proactively to empower your</span>
            <br></br>
            <span>strategic outcomes</span>
            <br></br>
            <br></br>
          </span>
          <img
            alt="image"
            src="/playground_assets/1.8-1500h.png"
            className="home-image09"
          />
          <h2 className="home-text61">long term oriented</h2>
          <span className="home-text62">
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
          </span>
        </div>
      </div>
      <div className="home-container13">
        <div className="home-container14">
          <h1 className="home-text68">
            <span>Our Dev-Ops as a </span>
            <br></br>
            <span>service difference</span>
          </h1>
          <ul className="list home-ul">
            <li className="list-item"></li>
            <li className="list-item"></li>
          </ul>
          <li className="list-item home-li1">
            <span className="home-text72">
              Multi Cloud Certified Architects &amp; Engineers
            </span>
          </li>
          <li className="list-item home-li2">
            <span className="home-text73">
              Outcome driven and strategic perspective
            </span>
          </li>
          <li className="list-item home-li3">
            <span className="home-text74">
              Proven track record of delivering results
            </span>
          </li>
          <li className="list-item home-li4">
            <span className="home-text75">
              Upskilling - Workshop based training
            </span>
          </li>
        </div>
        <div className="home-container15">
          <div className="home-container16">
            <div className="home-container17">
              <img
                alt="image"
                src="/playground_assets/1.9-200h.png"
                loading="lazy"
                className="home-image10"
              />
              <span className="home-text76">
                <span className="home-text77">DevOps as a service</span>
                <br className="home-text78"></br>
                <span className="home-text79">What we deliver</span>
              </span>
            </div>
            <span className="home-text80">
              <span className="home-text81">
                Accelerate your Cloud Journey and optimize costs.We provide end
                to end consulting services, and staff augmentation for project
                based work, day 2 support, application migration.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-banner2">
        <h1 className="home-text86">Contact Us</h1>
        <span className="home-text87">
          <span>90 Burnhamthorpe Rd W Suite 1400, Mississauga, ON L5B 3C3</span>
          <br></br>
          <br></br>
          <br></br>
          <span>
            info@empowerconsulting.io
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
      </div>
      <div className="home-pricing"></div>
    </div>
  )
}

export default Home
