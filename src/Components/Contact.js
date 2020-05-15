import React from 'react'

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h1>Get in touch</h1>
        <h6>Contact : <a href="tel:8928323968"> 8928323968</a></h6>
        <h6>Email-Id :
          <a href="mailto: abhijeetvn1234@gmail.com"> abhijeetvn1234</a>
        </h6>
        <div>
          <h3 >Follow me on :</h3>
          <p className="text-white"> <a className="text-dark" href="https://github.com/AbhijeetNandvikar?tab=repositories"><i className="fa fa-github"></i></a>
            <a className="text-dark" href="https://www.instagram.com/abhi.nandvikar/"><i className="fa fa-instagram" ></i></a>
            <a className="text-dark" href="https://twitter.com/AbhijeetNandvi1"><i className="fa fa-twitter" ></i></a>
            <a className="text-dark" href="https://www.facebook.com/abhijeet.nandvikar"><i className="fa fa-facebook" ></i></a>
            <a className="text-dark" href="https://www.linkedin.com/in/abhijeet-nandvikar-724b7818b/"><i className="fa fa-linkedin" ></i></a>


          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
