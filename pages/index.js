import Layout from '../components/layout'
import Slider from '../components/slider'
import Company from '../components/company'

export default function Home() {
  return (
    <>
      <Slider />
      <section id="content">
          <div class="content-wrap pt-0">
            <div class="section border-top-0 mt-0">
              <Company />
            </div>

            <div class="heading-block center">
              <h2>Why choose us?</h2>
              <span>Here are a few of the things we take care of.</span>
            </div>

            <div class="container clearfix">
              <div class="row col-mb-50">
                <div class="col-sm-12 col-lg-4">
                  <div class="feature-box fbox-border fbox-effect">
                    <div class="fbox-icon">
                      <a href="#"><i class="icon-money i-alt"></i></a>
                    </div>
                    <div class="fbox-content">
                      <h3>Bills</h3>
                      <p>We pay rent early and pay for all utilities, including landscaping & pest control services.</p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-4">
                  <div class="feature-box fbox-border fbox-effect">
                    <div class="fbox-icon">
                      <a href="#"><i class="icon-toolbox i-alt"></i></a>
                    </div>
                    <div class="fbox-content">
                      <h3>Maintenance</h3>
                      <p>We will take care of all minor maintenance & repairs throughout the entire lease term.</p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-4">
                  <div class="feature-box fbox-border fbox-effect">
                    <div class="fbox-icon">
                      <a href="#"><i class="icon-hands-wash i-alt"></i></a>
                    </div>
                    <div class="fbox-content">
                      <h3>Cleaning</h3>
                      <p>Property will always be in pristine condition as it gets deep cleaned for every guest.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="promo topmargin-lg promo-border bottommargin-lg promo-full py-5 px-2">
              <div class="container clearfix">
                <div class="row align-items-center">
                  <div class="col-12 col-lg">
                    <h3>Own a <span>Vacation</span> property?</h3>
                    <span>We offer full service vacation rental management to help you maximize your revenue while creating a wonderful space to create lifelong memories to all your guests and a hands-off experience to you. </span>
                  </div>
                  <div class="col-12 col-lg-auto mt-4 mt-lg-0">
                    <a href="contact" class="button button-large button-circle m-0">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="container clearfix">  
              <div class="row col-mb-50">   
                <div class="col-md-5 d-flex align-items-center" ><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <img src="images/landing/why_us.jpg" class="chartjs-render-monitor" style={{borderRadius: 10 }} />
                </div>

                <div class="col-md-7">
                  <div class="fancy-title title-bottom-border">
                    <h3>What are your benefits as a Host?</h3>
                  </div>            

                  <ul class="iconlist iconlist-color mb-0">
                      <li><i class="icon-ok"></i> Passive income property with a complete hands off experience.</li>
                      <li><i class="icon-ok"></i> Increase the profitability of your property while giving you flexibility and security.</li>
                      <li><i class="icon-ok"></i> We offer $1 million in host protection insurance from Airbnb.</li>
                      <li><i class="icon-ok"></i> As Airbnb & Vacation Rental experts we optimize your listing and pricing, generating between 10% – 40% more in revenue and occupancy.</li>
                  </ul>
                </div>
              </div>  
            </div>  
          </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}