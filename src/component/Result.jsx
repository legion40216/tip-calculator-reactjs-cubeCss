

const Result = ({tipPerson, total}) => {
    return ( 

        <div className="[ dflex-column gap-2  ] ">
        <div  className=" [ dflex jc-space-between align-item-center ] ">
          <div className=" [ line-height ] ">
            <p className="[ font-size-300 text-neutral-100 ]">Tip Amount</p>
            <span className="[ font-size-200  text-neutral-400 ]">/ person</span>
          </div>
          <p className="[ font-size-700 fw-extra-bold text-primary-100 ]">
            ${tipPerson}
          </p>
        </div>
        <div  className="[ dflex jc-space-between align-item-center ] ">
          <div className=" [ line-height ] ">
            <p className="[ font-size-300 text-neutral-100 ]" >Total</p>
            <span className="[ font-size-200 text-neutral-400 ]">/ person</span>
          </div>
          <p className="[ font-size-700 fw-extra-bold text-primary-100 ]">
            ${total}
          </p>
        </div>
        </div>


     );
}
 
export default Result;