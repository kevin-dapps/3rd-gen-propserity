import Layout from '../components/layout'
import Company from '../components/company'

export default function About() {
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
          <h1 className="text-white">About Us</h1>
        </div>
      </section>

      <section id="content">
        <div className="content-wrap pt-0">
          <div className="section border-top-0 mt-0">
            <Company showTitle={false} />

            <div className="container clearfix mt-5">
              <div className="row col-mb-50">
                <div className="order-last order-lg-first col-md-5 d-flex align-items-center" ><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                  <img src="/images/landing/corporate.jpg" width="752" height="376" className="chartjs-render-monitor" style={{borderRadius: 10 }} />
                </div>
                <div className="col-md-7 text-center">
                  <div className="heading-block topmargin-sm">
                    <h2>What is Corporate Housing?</h2>
                  </div>

                  <p className="text-md-start">Corporate housing is a term in the relocation industry that implies renting a furnished apartment, condo, or home on a temporary basis to individuals, military personnel, intern groups, or corporations as an alternative to a traditional hotel or an extended hotel stay.</p>
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