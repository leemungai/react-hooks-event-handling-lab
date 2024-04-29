// Code Keypad Component Here

function Keypad (){

    function handleEvent(click){
        if(click){
            console.log("Entering password...")
        }
    }

    return (
        <div>
            <input onChange={()=>{console.log("Entering password...")}} type="password" />
        </div>
    )
}

export default Keypad;