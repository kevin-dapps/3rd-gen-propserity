export default function Company({showTitle = true}){
  return (
    <div className="container clearfix">
      <div className="row col-mb-50">
        <div className="col-md-7 text-center">

          { 
            showTitle && 
            <div className="heading-block topmargin-sm">
              <h2>About Us</h2>
            </div>
          } 

          <p className="text-md-start">Our company provides corporate housing for professionals and their families who come into the area for various work-related activities. 
          We operate in strategic areas where there is a high demand for corporate housing as a result of temporary work assignments, conferences or company paid vacations. Because our clients are traveling professionals, we uphold the highest standards by providing an appealing property with stylish decor, furnishes, and amenities.</p>
        </div>
        <div className="col-md-5 d-flex align-items-center" ><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
          <img src="/images/landing/about.jpg" width="752" height="376" className="chartjs-render-monitor" style={{borderRadius: 10 }} />
        </div>
      </div>
    </div>
  )
}