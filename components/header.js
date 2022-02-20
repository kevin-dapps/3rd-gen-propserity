
export default function Header() {
  return (
  <header id="header" className="full-header transparent-header border-0 position-absolute" style={{ top: 0 }}>
    <div id="header-wrap" className="border-0">
      <div className="container">
        <div className="header-row">

          <div id="logo" className="border-0 p-1">
            <a href="/" className="standard-logo" data-dark-logo="images/logo.png"><img src="images/logo.png" alt="Logo" /></a>
            <a href="/" className="retina-logo" data-dark-logo="images/logo@2x.png"><img src="images/logo@2x.png" alt="Logo" /></a>
          </div>

          <div id="primary-menu-trigger">
            <svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
          </div>

          <nav className="primary-menu">

            <ul className="menu-container border-0">
              <li className="menu-item">
                <a className="menu-link" href="/"><div>Home</div></a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="about"><div>About</div></a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="contact"><div>Contact</div></a>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </div>
    <div className="header-wrap-clone"></div>
  </header>
  )
}