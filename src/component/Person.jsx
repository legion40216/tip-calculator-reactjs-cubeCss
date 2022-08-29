import dolloricon from "../asset/icon-dollar.svg"

const Person = ({handlePerson,person,errors}) => {
    return ( 
        <div>
    
    <div className="[ dflex jc-space-between ]">
         <label htmlFor="person" 
          className="[ font-size-300 text-neutral-500 fw-extra-bold margin-b-1 ] [ display-inline ] ">Number of  people</label>
          {errors && <span className="[ error ] [ font-size-300 fw-extra-bold ]">Can't be zero</span> }
    </div>
    <div className=
          {`[ input-container ${ errors ? `input-container-error` : "" } ] 
          [ bg-neutral-200 ] 
          [ align-item-center dflex jc-space-between ] `}  >
          <img src={dolloricon} alt="" style={{width:"13px",height:"14px"}} />
        <input type="number" 
        id="person"
        value={person}
        onChange={(e)=>{handlePerson(e)}}
        placeholder="0"
        />
          </div>
        </div>
     );
}
 
export default Person;