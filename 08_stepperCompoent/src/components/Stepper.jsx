import PropTypes from 'prop-types';
import {useState} from 'react'

function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(0)
  const handelContinue = () => {
    if(currentStep < steps.length-1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handelBack = () => {
    if(currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }
  return (
    <div className="stepper">
      <div>
        {
          steps.map(({label,content},index) => {
            return (
                <div key={label} className='stepper-Container'>
                  <div className={`step-number ${index <= currentStep ? 'active' : ''}`}>
                    {index + 1}
                    {
                      index < steps.length-1 && 
                      <div className={`step-line ${index < currentStep ? 'active' : ''}`}>{/* line */}</div>
                    }
                    
                  </div>
                  <div className='step-label'>
                    {label}
                  </div>
                </div>
            )
          })
        }
      </div>

      <div className='stepper-content'>
          {steps[currentStep].content}
      </div>

      <div className='stepper-control'>
          <button onClick={handelBack}>Back</button>
          <button onClick={handelContinue}>Continue</button>
      </div>
    </div>

  );
}

Stepper.propTypes = {
  steps: PropTypes.array.isRequired
};

export default Stepper;
