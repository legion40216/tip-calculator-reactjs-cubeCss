const ResetButton = ({handleReset, checkEmpty}) => {
    return ( 
      
        <button className="[ width-100 bg-primary-100 ]" 
        data-type={checkEmpty?"invalid":"reset"}
        disabled={checkEmpty}
        onClick={handleReset}> RESET</button>
             
     );
}
 
export default ResetButton;