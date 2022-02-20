import ContactForm from './contactForm'
export default function Slider({}){
  const backgroundUrl = '/images/landing/landing2.jpg'
  
  return (
    <section id="slider" className="slider-element slider-parallax include-header min-vh-100" style={
        { 
          backgroundImage: `linear-gradient(rgba(185, 185, 185, 0.1), rgba(95, 95, 95, 0.85)), url("${backgroundUrl}")`,
          backgroundPosition: '0% 0%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginTop: '0px !important'
        }
      }>
      <div className="slider-inner">

        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6 col-sm-7 col-10">
            <div className="vertical-middle slider-element-fade">
              <div className="container dark">

                <div className="heading-block no-after mb-0">
                  <h1 className="text-center text-lg-start" style={{fontSize: 40}}>
                    World Class Property Management
                  </h1>
                  <span className="d-none d-md-block">Learn how you can turn your property into a successful business.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-7 col-10">

            <ContactForm />
          </div>
        </div>
  
      </div>
    </section>
  )
}