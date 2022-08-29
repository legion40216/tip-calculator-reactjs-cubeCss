import personicon from "../asset/icon-person.svg"

const Amount = ({handleAmount, amount, errors}) => {
  
    return ( 
        <div>
        <div className="[ dflex jc-space-between ]">
        <label htmlFor="bill" 
          className="[ font-size-300 text-neutral-500 fw-extra-bold margin-b-1 ] [ display-inline ]">
           Bill
          </label>
          {errors && <span className="[ error ] [ font-size-300 fw-extra-bold ]">Can't be zero</span> }
          
        </div>
          <div className=
          {`[ input-container ${ errors ? `input-container-error` : "" } ] 
          [ bg-neutral-200 ] 
          [ align-item-center dflex jc-space-between ] `}  >
          <img src={personicon} alt="" style={{width:"13px",height:"14px"}} />
        <input 
        type="number"  
        id="bill" 
        value={amount}
        onChange={(e)=>{handleAmount(e)}}
        placeholder="0"
        />
          </div>
        </div> 
     );
}
 
export default Amount;