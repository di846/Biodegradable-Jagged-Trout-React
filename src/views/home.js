import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Steps2 from '../components/steps2'
import Pricing14 from '../components/pricing14'
import Testimonial17 from '../components/testimonial17'
import Team7 from '../components/team7'
import Contact3 from '../components/contact3'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Biodegradable Jagged Trout</title>
        <meta property="og:title" content="Biodegradable Jagged Trout" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">HOME</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">THE TEAM</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">OUR PRODUCT</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#team-contacts</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Mission &amp; Vision</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Solutions &amp; Benefits</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Team &amp; Contacts</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        logoSrc="/logo-earai-1500h.png"
        link1Url="#Hero17"
        link3Url="#Steps2"
        page1Description={
          <Fragment>
            <span className="home-text110">
              Learn more about EarAI and our services.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Discover our mission and vision for the future.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Explore the solutions we offer and the benefits they bring.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Meet our talented team and find our contact information.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Buy Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              <span>
                The innovative AI-powered solution for instant multilingual
                communication—anytime, anywhere.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text120">EarAI - Beyond Words</span>
          </Fragment>
        }
        hero17Id="Hero17"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text121">The Problem</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text122">The Solution</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text123">
              Language barriers create communication gaps, slow down
              decision-making, and limit accessibility to essential services.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text124">
              EarAI’s bone-conduction earbuds provide real-time AI-driven
              translations, ensuring seamless conversations across multiple
              languages.
            </span>
          </Fragment>
        }
      ></Features24>
      <Steps2
        steps2Id="Steps2"
        step1Title={
          <Fragment>
            <span className="home-text125">AI-Powered Instant Translation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text126">User-Friendly Design</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text127">Bone Conduction Technology</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text128">Always Available</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text129">
              Speak and understand effortlessly in multiple languages.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text130">
              Intuitive, plug-and-play setup with no technical expertise
              required.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text131">
              Crystal-clear sound while keeping your ears free.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text132">
              24/7 AI-assisted support for smooth communication.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Pricing14
        text={
          <Fragment>
            <span className="home-text133">and €18/month </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text134">Essential</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text135">Pro</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text136">Enterprise</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text137">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text138">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text139">Enterprise plan</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              {' '}
              Choose the Plan That Fits Your Needs
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">€59</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">€99</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">€249</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$199/month</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text147">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text148">$299/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text149">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text150">$699/month</span>
          </Fragment>
        }
        pricing14Id="Pricing14"
        plan1Action1={
          <Fragment>
            <span className="home-text151">Get Started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text152">$1999/year</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text153">Get Started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text154">$2999/year</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text155">Get Started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text156">$6999/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text157">1 bone-conduction earbud</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text158">Supports 3 languages</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text159">1 year of software updates</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text160">2 bone-conduction earbud</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text161">Supports up to 10 languages</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text162">Auto language recognition</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text163">2 years of software updates</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text164">
              5 couple of bone-conduction earbud
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text165">€40 for each additional earbud</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text166">Continuous software updates</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text167">Early access to new features</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text168">Training courses</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text169">Feature 11 of Essential plan</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text170">Feature 21 of Essential plan</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text171">Feature 31 of Essential plan</span>
          </Fragment>
        }
        plan1Feature32={
          <Fragment>
            <span className="home-text172">Email client support</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text173">Feature 11 of Pro plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text174">Feature 21 of Pro plan</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text175">Feature 31 of Pro plan</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature42={
          <Fragment>
            <span className="home-text177">Priority assistance</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature22={
          <Fragment>
            <span className="home-text180">Premium assistance 24/7</span>
          </Fragment>
        }
        plan3Feature23={
          <Fragment>
            <span className="home-text181">Supports 30+ languages</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text185">
              EarAI has revolutionized the way we approach AI solutions. Their
              innovative approach has truly set them apart in the industry.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text186">
              Working with EarAI has been a game-changer for our business. Their
              expertise and dedication have exceeded our expectations.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text187">
              I can&apos;t recommend EarAI enough. Their solutions have
              streamlined our processes and improved efficiency across the
              board.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text188">
              EarAI&apos;s team is not only talented but also incredibly
              responsive. They truly care about delivering top-notch service.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text189">
              Read what our clients have to say about their experience with
              EarAI.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text190">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text191">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text192">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text193">David Lee</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text194">Sarah Johnson</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">CEO, Tech Co.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text196">CTO, Data Corp.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text197">
              Head of Operations, Innovate LLC
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">
              Marketing Director, Connect Inc.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Team7
        member1={
          <Fragment>
            <span className="home-text199">Full name</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="home-text200">Full name</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="home-text201">Full name</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text202">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Our Team</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="home-text204">Job title</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="home-text205">Job title</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="home-text206">Job title</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="home-text207">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
      ></Team7>
      <Contact3
        email1={
          <Fragment>
            <span className="home-text210">contact@earai.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text211">+1-123-456-7890</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text212">
              123 AI Street, Tech Valley, USA
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text213">
              We are always here to help you. Reach out to us for any inquiries
              or assistance.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text214">
              Feel free to send us an email or give us a call. Our team will get
              back to you as soon as possible.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text215">
              For any feedback or questions regarding our services, please
              don&apos;t hesitate to contact us.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="home-text216">
              Connect with us on social media for the latest updates and news
              about our AI solutions.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="home-text217">
              We look forward to hearing from you!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text218">Contact Us</span>
          </Fragment>
        }
      ></Contact3>
      <Footer4
        termsLink={
          <Fragment>
            <span className="home-text219">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
