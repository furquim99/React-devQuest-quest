import './buttom.css'

const importCV = () =>{
    console.log("A label desse botão é Baixar CV")
    alert('A label desse botão é Baixar CV')
}

const ImprimindoCv = ({label}) =>{
    return <button className='btnCV' onClick={importCV}>{label}</button>
}

export default ImprimindoCv