export default function Header() {
  return (
  <footer id="footer" class="dark">
    <div class="container">
      <div class="footer-widgets-wrap">
        <div class="row col-mb-50">
          <div class="col-lg-12">
            <div class="row col-mb-50">
              <div class="col-md-4">
                <div class="widget clearfix">
                  <img src="images/logo.png" alt="Image" class="footer-logo" style={{ width: "200px" }} />
                </div>
              </div>

              <div class="col-md-4">
                <div class="widget widget_links clearfix">

                  <h4>Information</h4>

                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4">

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="copyrights">
      <div class="container">

        <div class="row col-mb-30">

          <div class="col-md-6 text-center text-md-start">
            Copyrights &copy; 2022 All Rights Reserved by 3rd Gen Prosperity LLC.<br />
          </div>

          <div class="col-md-6 text-center text-md-end">
            <div class="clear"></div>
            <i class="icon-envelope2"></i> <a href="mailto:support@3rdgenprosperity.com" class="text-white">support@3rdgenprosperity.com</a>
          </div>

        </div>

      </div>
    </div>
  </footer>
  )
}