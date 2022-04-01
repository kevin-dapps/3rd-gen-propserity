export default function Header() {
  return (
  <footer id="footer" style={{ border: 0 }}>
    <div className="container">
      <div className="footer-widgets-wrap">
        <div className="row col-mb-50">
          <div className="col-lg-12">
            <div className="row col-mb-50">
              <div className="col-md-4">
                <div className="widget clearfix">
                  <img src="images/logo.png" alt="Image" className="footer-logo" style={{ width: "200px" }} />
                </div>
              </div>

              <div className="col-md-4">
                <div className="widget widget_links clearfix">

                  <h4>Information</h4>

                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">

                <div className="widget clearfix">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="copyrights">
      <div className="container">

        <div className="row col-mb-30">

          <div className="col-md-6 text-center text-md-start">
            Copyrights &copy; 2022 All Rights Reserved by 3rd Gen Prosperity LLC.<br />
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="clear"></div>
            <i className="icon-envelope2"></i> <a href="mailto:3rdgenprosperity@gmail.com" target="_blank">3rdgenprosperity@gmail.com</a>
            <span className="middot">·</span>
            <i className="icon-instagram"></i> <a href="https://www.instagram.com/3rdgen_prosperity" target="_blank">3rdgen_prosperity</a>
          </div>

        </div>

      </div>
    </div>
  </footer>
  )
}