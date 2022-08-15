import CompB from './CompB'
let one=()=>{
    let id=101
    let name="Mahitha"
    let Salary=450000
    return <div>
        <h1>Component A</h1>
        <CompB emp_Id={id} emp_Name={name} emp_Salary={Salary}/>
    </div>
}
export default one;