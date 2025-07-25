import './ourServices.css';

export function OurServices() {

  return (
    <div id="ourServices" className="ourServices__container background_dark padding-sections">
      <div className="ourServices__body max-width">
        <div className="ourServices__content">
          <h2>
            Our Services
          </h2>
          <hr />
          <div className="ourServices__service">
            <h4>Administration</h4>
            <div className="ourServices__service-details">
              <p><strong>Data entry:</strong> Fact Find, Manual IPS, Data Mapping</p>
              <p><strong>Implementation:</strong> Document preparation, Client / Provider follow up, Finalisation</p>
              <p><strong>Ad-hoc services:</strong> FDS / ASA, Other admin services</p>
            </div>
          </div>
          <hr />
          <div className="ourServices__service">
            <h4>Advisory</h4>
            <div className="ourServices__service-details">
            <p><strong>Research:</strong> Strategy Validation, Product/Strategy Comparison, Projection/Modelling</p>
            <p><strong>Advice Creation:</strong> Statement of Advice, Record of Advice</p>
            <p><strong>Presentation:</strong> Advice Slides - for better preso experience</p>
            </div>
          </div>
          <hr />
          <div className="ourServices__service">
            <h4>Compliance</h4>
            <div className="ourServices__service-details">
            <p>Review of advice documents.</p>
            <p>Review of files for compliance (file notes, research, supporting documents).</p>
            </div>
          </div>
          <hr />
          <p>Systems we use: Xplan, AdviserLogic, Midwinter</p>

        </div>

      </div>
    </div>
  )
}