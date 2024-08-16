

const DropDown =({onMouse, text}) => {
  return (
    <p     onMouseDown ={onMouse}className="" style={{cursor:"pointer", borderRadius:"3rem", borderBlockColor:""}}>{text}</p>
    
  )
}

export default DropDown