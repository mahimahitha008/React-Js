import FileB from "./FileB";
let FileA=()=>{
    let color="Red"
    let product="Palazo"
    let cost=1999
    return <div>
        <h1>File A</h1>
        <FileB Product_Color={color} Product={product} Price={cost}/>
    </div>
}
export default FileA