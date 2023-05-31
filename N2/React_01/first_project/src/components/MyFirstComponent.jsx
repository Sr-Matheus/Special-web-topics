import MySecondComp from "./MySecondCom"


function MyFirstComponent() 
{
    return(
        <>
            <h3>Component Test</h3>
            <p>Lorem Ipsun</p>
            <MySecondComp name = "Matheus" ></MySecondComp>
        </>
    )    
}

export default MyFirstComponent