import ContactForm from './contactForm'
export default function Slider({}){
  const backgroundUrl = '/images/landing/landing1.jpg'
  
  return (
    <section id="slider" class="slider-element slider-parallax include-header min-vh-100" style={
        { 
          backgroundImage: `linear-gradient(rgba(185, 185, 185, 0.8), rgba(95, 95, 95, 0.5)), url("${backgroundUrl}")`,
          backgroundPosition: '0% 0%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }
      }>
      <div class="slider-inner">

        <div class="row justify-content-center align-items-center h-100">
          <div class="col-lg-6 col-sm-7 col-10">
            <div class="vertical-middle slider-element-fade">
              <div class="container dark">

                <div class="heading-block no-after">
                  <h1 class="text-center text-lg-start" style={{fontSize: 40}}>
                    World Class Property Management
                  </h1>
                  <span class="d-none d-md-block">Learn how you can turn your property into a successful business.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-7 col-10">

            <ContactForm />
          </div>
        </div>
  
      </div>
    </section>
  )
}