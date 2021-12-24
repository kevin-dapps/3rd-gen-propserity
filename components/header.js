
export default function Header() {
  return (
  <header id="header" class="full-header transparent-header dark">
    <div id="header-wrap" class="border-0">
      <div class="container">
        <div class="header-row">

          <div id="logo" class="border-0">
            <a href="/" class="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="Canvas Logo" /></a>
            <a href="/" class="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo" /></a>
          </div>

          <div id="primary-menu-trigger">
            <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
          </div>

          <nav class="primary-menu">

            <ul class="menu-container border-0">
              <li class="menu-item">
                <a class="menu-link" href="/"><div>Home</div></a>
              </li>
              <li class="menu-item">
                <a class="menu-link" href="about"><div>About</div></a>
              </li>
              <li class="menu-item">
                <a class="menu-link" href="contact"><div>Contact</div></a>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </div>
    <div class="header-wrap-clone"></div>
  </header>
  )
}