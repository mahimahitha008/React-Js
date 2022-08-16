let CompB =(tree)=>{
    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(tree)}</pre>
        <pre>{JSON.stringify(tree.Plant_Name)}</pre>
        <pre>{JSON.stringify(tree.Scientific_Name)}</pre>
        <pre>{JSON.stringify(tree.Age)}</pre>
        
    </div>
}
export default CompB;