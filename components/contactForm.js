import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import styles from './contactForm.module.css'

export default function ContactForm(){
  const [response, setResponse] = useState(null)

  const formik = useFormik({
    initialValues: {
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      clientAddress: '',
      clientAddressType: '',
      clientMessage: ''
    },
    validationSchema: Yup.object({
      clientName: Yup.string().required('*Required'),      
      clientPhone: Yup.string().matches(/^[0-9 ()-.]+$/, 'Invalid character - use only 0-9, space, or "().-"').required('*Required'),
      clientEmail: Yup.string().email('Invalid email address').required('*Required'),
      clientAddress: Yup.string().required('*Required'),
      clientAddressType: Yup.string().min(1).required('*Required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      await handleSubmit(values)
      setSubmitting(false)
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e)
  }

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const handleSubmit = async (formData) => {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData
      })
    }).then(() => {
      document.getElementById("contactForm").reset();

      setResponse({
        message: 'Thank you for submitting your inquiry, we will be reaching out to you within 48hrs'
      })
    }).catch(error => {
      setResponse({
        message: 'Oops! Something went wrong!'
      })
    })
  }

  return (
    <form class="mb-0" id="contactForm" name="contact" method="POST" data-netlify="true" onSubmit={formik.onSubmit}>

      <div class="row form-section p-4 bg-white">
        <h3 class="mb-0">FREE PROPERTY ANALYSIS</h3>
        <span class="text-muted small mb-3">Let our experts help make <b>YOU</b> money from your property.</span>

        <div class="col-lg-6 col-12 form-group">
          <input 
            type="text" 
            name="clientName" 
            id="clientName" 
            placeholder="Name"
            autoComplete="name"
            value={formik.values.clientName}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${formik.touched.clientName && formik.errors.clientName ? styles.error : '' }`} />

          {formik.touched.clientName && formik.errors.clientName ?
            (<div className={styles.errorMessage}>{formik.errors.clientName}</div>) : null}
        </div>

        <div class="col-lg-6 col-12 form-group">
          <input 
            type="tel"
            name="clientPhone"
            id="clientPhone"
            placeholder="Phone"
            autoComplete="phone"
            value={formik.values.clientPhone}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${formik.touched.clientPhone && formik.errors.clientPhone ? styles.error : '' }`} />

          {formik.touched.clientPhone && formik.errors.clientPhone ?
            (<div className={styles.errorMessage}>{formik.errors.clientPhone}</div>) : null}
        </div>

        <div class="col-12 form-group">
          <input 
            type="email"
            name="clientEmail"
            id="clientEmail"
            placeholder="Email"
            autoComplete="email"
            value={formik.values.clientEmail.toLowerCase()}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${formik.touched.clientEmail && formik.errors.clientEmail ? styles.error : '' }`} />
          {formik.touched.clientEmail && formik.errors.clientEmail ?
            (<div className={styles.errorMessage}>{formik.errors.clientEmail}</div>) : null}
        </div>

        <div class="col-12 form-group">
          <input 
            type="text" 
            name="clientAddress" 
            id="clientAddress" 
            placeholder="Property Address"
            autoComplete="address"
            value={formik.values.clientAddress}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${formik.touched.clientAddress && formik.errors.clientAddress ? styles.error : '' }`} />

          {formik.touched.clientAddress && formik.errors.clientAddress ?
            (<div className={styles.errorMessage}>{formik.errors.clientAddress}</div>) : null}
        </div>

        <div class="col-12 form-group">
          <select 
            name="clientAddressType" 
            id="clientAddressType" 
            placeholder="Property Address"
            autoComplete="address"
            value={formik.values.clientAddressType}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className={`form-select ${formik.touched.clientAddressType && formik.errors.clientAddressType ? styles.error : '' }`}>
            <option value="">Choose property type</option>
            <option value="corporate_lease">Corporate Lease</option>
            <option value="vacation_rental_management">Vacation Rental Management</option>
          </select>

          {formik.touched.clientAddressType && formik.errors.clientAddressType ?
            (<div className={styles.errorMessage}>{formik.errors.clientAddressType}</div>) : null}
        </div>

        <div class="col-12 form-group">
          <textarea 
            name="clientMessage" 
            id="clientMessage" 
            class="form-control" 
            placeholder="Message" 
            value={formik.values.clientMessage}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${formik.touched.clientMessage && formik.errors.clientMessage ? styles.error : '' }`}
            style={{minHeight: 100, maxHeight: 200}}></textarea>
          
          {formik.touched.clientMessage && formik.errors.clientMessage ?
            (<div className={styles.errorMessage}>{formik.errors.clientMessage}</div>) : null}
        </div>
        
        <input type="hidden" name="form-name" value="contact" />

        <div class="col-12">
          {response && (
            <div>
              {response.message}
            </div>
          )}
          <button 
            type="submit" 
            className="button button-large m-0 w-100 custom-submit">
            {formik.isSubmitting ?
              <i class="icon-line-loader icon-spin m-0"></i>: (
                "Submit"
              )
            }
          </button>
        </div>
      </div>
    </form>
  )
}