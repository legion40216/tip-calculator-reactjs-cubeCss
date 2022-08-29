import splitter from "./asset/logo.svg"
import { useState , useEffect } from 'react'
import Tipbutton from "./component/Tipbutton"
import Amount from "./component/Amount"
import Person from "./component/Person"
import Result from './component/Result'
import ResetButton from "./component/ResetButton"

function App() {
const [amount, amountState] = useState("") 
const [person, personState] = useState("") 
const [checkEmpty , checkEmptyState] = useState(true) 
const [errors , errorsState] = useState({amountError:false, personError:false}) 
const [customValue, customvalueState] =useState("") 
const [reset , resetState] = useState(false)
const [disc, discState] = useState("")
const [tipPerson, tipPersonState] = useState("0.00")
const [total, totalState] = useState("0.00")  


const handleCustomValue = (e) =>{
  discState(e.target.value)
  customvalueState(e.target.value)
}

useEffect(()=>{
  if (amount !== "" || person !== "") {

   checkEmptyState(false)
  }
  else{
   checkEmptyState(true)
  }

 if(disc !== "")
 {
  Cal(disc)
  resetState(false)
 }

 },[amount,person,disc])

useEffect(()=>{
if(reset==true)
{
  resetState(false)
}
 },[reset])

const handleReset = () =>{
  customvalueState("")
  amountState("")
  personState("")
  totalState("0.00") 
  tipPersonState("0.00")
  discState("")
  errorsState({amountError:false, personError:false}) 
  resetState(true)
}

const handleAmount = (e) =>{
    amountState(e.target.value)

    }

const handlePerson = (e) =>{
  personState(e.target.value)
  }

 
  const handleDiscount = (e) =>{
    discState(e.target.value)
  }

  
  function Cal(dis)
  {
     
      if(amount == 0 || amount=== ""){

        errorsState(prevState =>({...prevState, amountError:true}))

      }
       else if(person == 0 || person === ""){
        errorsState(prevState =>({...prevState, amountError:false}))
    
        errorsState(prevState =>({...prevState, personError:true}))
       
       }
       else{
        errorsState({amountError:false, personError:false}) 
        let discount=dis/100
        let k = amount/person
        totalState(Math.round(k * 100) / 100) 
        tipPersonState(Math.round(k*discount * 100) / 100)
        
       }
    
  }

  return (
    
    <main>
      <img className="[ margin-auto margin-b-2 ]" src={splitter} alt="" style={{width:"5rem"}} />
      <div className="caluclator [ flex-row ] [ bg-neutral-100 padding-24 br-1 ]">
        <div className="input-box [ flow width-100 ]">
      
         <Amount handleAmount={handleAmount} amount={amount} errors={errors.amountError}></Amount>

         <Tipbutton handleDiscount={handleDiscount} handleCustomValue={handleCustomValue} 
         customValue={customValue} reset={reset}
         ></Tipbutton>
      
         <Person handlePerson={handlePerson} person={person}  errors={errors.personError}></Person>

        </div>


        <div className="result [ bg-neutral-800 padding-24 br-0 ] [ width-100 dflex-column jc-space-between ] ">
         
         <Result tipPerson={tipPerson} total={total}></Result>

         <ResetButton handleReset={handleReset} checkEmpty={checkEmpty} ></ResetButton>
        </div>
      </div>
      </main>
    

 
  );
}

export default App;
