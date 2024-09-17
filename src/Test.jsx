function Test () {
   let a = 40;
    return (
        <>
        {(()=>{
            if(a>=80 && a <= 100){
                return <h1>Good</h1>
            }else{
                return <h1>bad</h1>
            }
        })()}
        </>
    )
}

export default Test;