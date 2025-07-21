import './aboutUs.css';

export function AboutUs() {

  return (
    <div id="aboutUs" className="aboutUs__container background_clear padding-sections">
      <div className="aboutUs__body max-width">
        <div className="aboutUs__content">

          <div className="aboutUs__description">
            <h3>
              We fill the gaps from where you are now to where you want to be
            </h3>
            <p>VIZAR Business & Talent Solutions is a trusted support partner to financial advisers across Australia. With over a decade of experience in the financial planning industry, we specialise in delivering high-quality paraplanning, compliance, administrative, and strategic advisory services.</p>
            <p>Our team thrives on complex advice and understands the full financial planning process—from data collection to final implementation. We work alongside advisers to save time, improve efficiency, and create space for business growth—all with a personalised, reliable, and flexible approach.</p>
          </div>

          <div className="aboutUs__contact">
            <p><strong>Contact Us</strong></p>
            <p>admin@vizarsolutions.com <br />(+61) 435 009 984</p>
            <p>5 Alma Road <br />Maquarie Park, NSW 2113</p>
          </div>
        
        </div>

      </div>
    </div>
  )
}