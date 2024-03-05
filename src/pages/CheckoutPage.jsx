import React, { useState } from 'react'
import AddressOptions from './checkout/AddressOptions';
import PaymentOptions from './checkout/PaymentOptions';
import PlaceOrder from './checkout/PlaceOrder';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {  
  const steps = [
    {
      element: <AddressOptions />,
      label: 'Shipping Options',
    }, 
    {
      element: <PaymentOptions />,
      label: 'Payment Options',
    },  
    {
      element: <PlaceOrder />,
      label: 'Order Summary',
    }, 
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  return (
    <div className='checkoutpage | container'>
      <div className="checkoutpage__content">
        <nav className="checkoutpage__nav">
            <div className='checkoutpage__nav-list'>
                {steps.map((step, i) => <li key={i} className='checkoutpage__nav-link' onClick={() => setCurrentStep(i)}>
                  <span>0{i+1}</span>
                  <p style={i === currentStep ? {color: 'var(--clr-accent-400)'} : null}>{step.label}</p> 
                </li>)}
            </div>   
        </nav>
        
        <div className="checkoutpage__right">
          <h1 className='checkoutpage__heading | text-heading'>{steps[currentStep].label}</h1>
          <div className="checkoutpage__form">
            {steps[currentStep].element}
            <div className="checkoutpage__buttons">

              {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep-1)} className='btn'>
                Back
              </button>}

              {currentStep < steps.length-1 && <button onClick={() => setCurrentStep(currentStep+1)} className='btn'>
                Next
              </button>}

              {currentStep === steps.length-1 && <button onClick={() => navigate('/checkout/success')} className='btn'>
                Place Order
              </button>}

            </div>
          </div>
            
        </div>
      </div>

    </div>
  )
}

export default CheckoutPage