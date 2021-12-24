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