import Layout from '../components/layout'
import Company from '../components/company'
import ContactForm from '../components/contactForm'

export default function Contact() {
  return (
    <>
      <section id="page-title" className="include-header" style={
        {
          backgroundImage: 'linear-gradient(rgba(185, 185, 185, 0.8), rgba(95, 95, 95, 0.5)), url("images/landing/small-header.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          paddingTop: '200px'
        }
      }>

        <div className="container center clearfix">
          <h1 className="text-white">Contact Us</h1>
        </div>
      </section>

      <section id="content">
        <div className="content-wrap pt-0">
        <div className="container">
            <div className="row gutter-40 col-mb-80">
              <div className="postcontent col-lg-9 px-0">
                <ContactForm />
              </div>

              <div className="sidebar col-lg-3 pt-5">

                <div className="widget clearfix" style={{
                    backgroundImage: "url('images/world-map.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "100%"
                    }}>
                  <h4>Headquarters</h4>
                  
                  <div>
                    <strong>Location:</strong> West Palm Beach, FL<br />
                    <strong>Email:</strong> <a href="mailto:3rdgenprosperity@gmail.com" target="_blank">3rdgenprosperity@gmail.com</a>
                  </div>
                  
                  <br />

                  <h4>Business Hours</h4>
              
                  <div>
                    <strong>Mon - Fri:</strong> 9am-5pm<br />
                    <strong>Saturday:</strong> 10am-3pm<br />
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
                
                <div className="widget border-0 pt-0">


                  <a href="https://www.instagram.com/3rdgen_prosperity" target="_blank" className="social-icon si-medium si-colored si-instagram">
                    <i className="icon-instagram"></i>
                    <i className="icon-instagram"></i>
                  </a>


                  <a href="mailto:3rdgenprosperity@gmail.com" target="_blank" className="social-icon si-medium si-colored si-google">
                    <i className="icon-email"></i>
                    <i className="icon-email"></i>
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