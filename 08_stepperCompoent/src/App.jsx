import Stepper from './components/Stepper'
import './App.css'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import AccountInfo from './components/AccountInfo/AccountInfo'
import Payment from './components/Payment/Payment'
import Confirmation from './components/Confirmation/Confirmation'
import Review from './components/Review/Review'

function App() {

  const steps = [
    {
      label: 'Personal Info',
      content : <PersonalInfo />
    },
    {
      label : 'Account Info',
      content : <AccountInfo />
    },
    {
      label : 'Payment',
      content : <Payment />
    },
    {
      label : 'Confirmation',
      content : <Confirmation />
    },
    {
      label : 'Review',
      content : <Review />
    }
  ]
  return (
    <>
      <Stepper steps={steps} />
    </>
  )
}

export default App
