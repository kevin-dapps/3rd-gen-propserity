import Layout from '../components/layout'
import Company from '../components/company'
import ContactForm from '../components/contactForm'

export default function Contact() {
  return (
    <>
      <section id="page-title" class="include-header" style={
        {
          backgroundImage: 'linear-gradient(rgba(185, 185, 185, 0.8), rgba(95, 95, 95, 0.5)), url("images/landing/small-header.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          paddingTop: '200px'
        }
      }>

        <div class="container clearfix">
          <h1>Contact Us</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">Contact</a></li>
          </ol>
        </div>
      </section>

      <section id="content">
        <div class="content-wrap pt-0">
        <div class="container">
            <div class="row gutter-40 col-mb-80">
              <div class="postcontent col-lg-9 px-0">
                <ContactForm />
              </div>

              <div class="sidebar col-lg-3 pt-5">

                <div class="widget clearfix" style={{
                    backgroundImage: "url('images/world-map.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "100%"
                    }}>
                  <h4>Headquarters</h4>
                  
                  <div>
                    <strong>Location:</strong> West Palm Beach, FL<br />
                    <strong>Email:</strong> <a href="mailto:support@3rdgenprosperity.com" target="_blank">support@3rdgenprosperity.com</a>
                  </div>
                  
                  <br />

                  <h4>Business Hours</h4>
              
                  <div>
                    <strong>Mon - Fri:</strong> 9am-5pm<br />
                    <strong>Saturday:</strong> 10am-3pm<br />
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
                
                <div class="widget border-0 pt-0">


                  <a href="https://www.instagram.com/3rdgen_prosperity" target="_blank" class="social-icon si-small si-dark si-instagram">
                    <i class="icon-instagram"></i>
                    <i class="icon-instagram"></i>
                  </a>


                  <a href="mailto:support@3rdgenprosperity.com" target="_blank" class="social-icon si-small si-dark si-email">
                    <i class="icon-email"></i>
                    <i class="icon-email"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}