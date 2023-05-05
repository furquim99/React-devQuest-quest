import Texto from "../textos";
const frase = ['Esse texto é branco e tem um fundo verde'];
const maisTextos = () =>{
    return(
        <>
            <div>
            {
                frase.map((frase, index) => {
                    return(
                        <Texto key={index}>
                            <p>{frase}</p>
                        </Texto>
                    )
                })
            }
                <Texto colors='green'>
                    <p>Esse texto é preto e tem um fundo verde</p>
                </Texto>
        </div>
        </>
        
    )
}

export default maisTextos