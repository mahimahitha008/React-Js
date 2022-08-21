import Output from "./Output";
let Items =()=>{
    let product="Teddy Bear"
    let color="Red"
    let height="6-feet"
    let stock="Available"
    let colors=["Brown","Yellow","Pink"]
    let details={
        Exchange:'Can Be Done',
        Terms:"With in 10 Days"
    }
    return <div>
        <p>Items Page</p>
        <Output Product={product} Color={color} Height={height} Stock={stock} Shades={colors} Details={details}/>
    </div>
}
export default Items