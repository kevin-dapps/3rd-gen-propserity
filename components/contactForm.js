export default function ContactForm(){
  return (
    <div class="form-widget" data-loader="button" data-alert-type="inline">

      <form class="mb-0" name="contact" action="/success" method="POST" data-netlify="true" novalidate="novalidate">
        <div class="form-process"></div>

        <div class="row form-section p-4 bg-white">
          <h3 class="mb-0">FREE PROPERTY ANALYSIS</h3>
          <span class="text-muted small mb-3">Let our experts help make <b>YOU</b> money from your property.</span>

          <div class="col-lg-6 col-12 form-group">
            <input type="text" name="landing-enquiry-name" id="landing-enquiry-name" class="form-control required" placeholder="Name" />
          </div>
          <div class="col-lg-6 col-12 form-group">
            <input type="tel" name="landing-enquiry-phone" id="landing-enquiry-phone" class="form-control required" placeholder="Phone" maxlength="12" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          </div>

          <div class="col-12 form-group">
            <input type="email" name="landing-enquiry-email" id="landing-enquiry-email" class="form-control required" placeholder="Email" />
          </div>

          <div class="col-12 form-group">
            <input type="text" name="landing-enquiry-address" id="landing-enquiry-address" class="form-control required" placeholder="Property Address" />
          </div>

          <div class="col-12 form-group">
            <textarea name="landing-enquiry-description" id="landing-enquiry-description" class="form-control" placeholder="Message" style={{minHeight: 100, maxHeight: 200}}></textarea>
          </div>
          
          <div class="col-12 d-none">
            <input type="text" id="landing-enquiry-botcheck" name="landing-enquiry-botcheck" />
          </div>
          <div class="col-12">
            <button type="submit" name="landing-enquiry-submit" class="button button-large m-0 w-100">Submit</button>
          </div>

          <input type="hidden" name="prefix" value="landing-enquiry-" />
        </div>
      </form>
    </div>
  )
}