import { useState, useEffect } from 'react'

const Tipbutton = ({ reset, handleDiscount, handleCustomValue, customValue}) => {
  const [custom , customState] = useState(false) 
   const [checked, checkedState] =useState(null)
   const { useCallback } = require("react");
   
   useEffect(()=>{
   
   checkedState(null)
   customState(false)

   },[reset])

   const handleCustom = () =>{
   customState(prevState =>(!prevState))
  }

  const getRadioProps = useCallback((id, value) => {
    return {
      id,
      value,
      type: "radio",
      name: "discount",
      checked: checked === value, // this will toggle the checked state
      onChange: () => checkedState(value),
      onClick: (e) => handleDiscount(e), 
    };
  }, [checked]);

  
    return ( 

        <div className="btn_options">
        <p className="[ font-size-300 text-neutral-500 fw-extra-bold margin-b-1 ]">Select Tip %</p>
        <div className="[ btns ][ jc-space-between gap ]">
        <div className='radiobtn'>
          <input {...getRadioProps("five", 5)} />
          <label htmlFor="five">5%</label>
          </div>
          <div className='radiobtn'>
          <input {...getRadioProps("ten", 10)} />
          <label htmlFor="ten">10%</label>
            </div>
            <div className='radiobtn'>
            <input {...getRadioProps("fifteen", 15)} />
            <label htmlFor="fifteen">15%</label>
            </div>
            <div className='radiobtn'>
            <input {...getRadioProps("twentyfive", 25)} />
            <label htmlFor="twentyfive" >25%</label>
            </div>
            <div className='radiobtn'>
            <input {...getRadioProps("fifty", 50)} />
            <label htmlFor="fifty">50%</label>
            </div>

          {
            custom && 
            <div className=" [ input-container ] [ bg-neutral-200 ]">
              <input  type="number" 
               placeholder='0' 
               autoFocus
               value={customValue}
               onChange={(e)=>{handleCustomValue(e)}}
               onFocus ={()=>{
                checkedState(null)
               }}
               onBlur={()=>{ 
                if(customValue === ""){
                  customState(false)
                }}}
                 />
              </div>
          }

           {
            !custom && <button className="[ bg-neutral-200  text-neutral-800 ]"
            onClick={handleCustom}
            >Custom</button>
          }
          
          
        </div>
        </div>

     );
}
 
export default Tipbutton;