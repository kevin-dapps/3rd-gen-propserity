import Layout from '../components/layout'
import Company from '../components/company'

export default function About() {
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
          <h1>About Us</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">About</a></li>
          </ol>
        </div>
      </section>

      <section id="content">
        <div class="content-wrap pt-0">
          <div class="section border-top-0 mt-0">
            <Company showTitle={false} />

            <div class="container clearfix mt-5">
              <div class="row col-mb-50">
                <div class="order-last order-lg-first col-md-5 d-flex align-items-center" ><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <img src="/images/landing/corporate.jpg" width="752" height="376" class="chartjs-render-monitor" style={{borderRadius: 10 }} />
                </div>
                <div class="col-md-7 text-center">
                  <div class="heading-block topmargin-sm">
                    <h2>What is Corporate Housing?</h2>
                  </div>

                  <p class="text-md-start">Corporate housing is a term in the relocation industry that implies renting a furnished apartment, condo, or home on a temporary basis to individuals, military personnel, intern groups, or corporations as an alternative to a traditional hotel or an extended hotel stay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}