import CompB from './CompB'
let CompA=()=>{
    let product="Dress"
    let color="Pink"
    let brand="H&M"
    let Cost=1999
    return <div>
        <h1>Component A</h1>
        <CompB Product={product} Color={color} Brand={brand} Price={Cost}/>
    </div>
}
export default CompA