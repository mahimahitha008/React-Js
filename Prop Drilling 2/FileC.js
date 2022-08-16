import FileD from "./FileD";
function FileC(prop){
    let product="Oppo"
    let model="Reno 5 pro"
    let price=75999
    return <div>
        <h1>File C</h1>
        <pre>{JSON.stringify(prop)}</pre>
        <pre>Item:{prop.Item}</pre>
        <pre>Flavour:{prop.Flavour}</pre>
        <pre>Cost:{prop.Cost}</pre>
        <FileD Product={product} Model={model} Price={price}/>
    </div>
}
export default FileC