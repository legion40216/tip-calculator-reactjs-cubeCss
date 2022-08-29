import { useState } from 'react'

const Tipbutton = ({ handleDiscount, handleCustomValue, customValue}) => {
  const [custom , customState] = useState(false) 
   const [checked, checkedState] =useState(null)
 
   
   const handleCustom = () =>{
   customState(prevState =>(!prevState))
  
  }
  const handleChecked = (e) =>{
    console.log(e.target.checked)
    checkedState()
  }

  
    return ( 

        <div className="btn_options">
        <p className="[ font-size-300 text-neutral-500 fw-extra-bold margin-b-1 ]">Select Tip %</p>
        <div className="[ btns ][ jc-space-between gap ]">
          <div className='radiobtn'>
          <input type="radio" value={5} name="discount" onClick={(e)=>{handleChecked(e)}} checked={checked} id="five"onChange={(e)=>{handleDiscount(e)}} />
          <label htmlFor="five">5%</label>
          </div>
          <div className='radiobtn'>
          <input type="radio" value={10} name="discount" onClick={(e)=>{handleChecked(e)}} checked={checked} id="ten" onChange={(e)=>{handleDiscount(e)}} />
          <label htmlFor="ten">10%</label>
            </div>
            <div className='radiobtn'>
            <input type="radio" value={15} name="discount" onClick={(e)=>{handleChecked(e)}} checked={checked} id="fifteen" onChange={(e)=>{handleDiscount(e)}} />
            <label htmlFor="fifteen">15%</label>
            </div>
            <div className='radiobtn'>
            <input type="radio" value={25} name="discount" onClick={(e)=>{handleChecked(e)}} checked={checked} id="twentyfive" onChange={(e)=>{handleDiscount(e)}} />
            <label htmlFor="twentyfive" >25%</label>
            </div>
            <div className='radiobtn'>
            <input type="radio" value={50} name="discount" onClick={(e)=>{handleChecked(e)}} checked={checked} id="fifty"  onChange={(e)=>{handleDiscount(e)}} />
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
                checkedState(false)
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