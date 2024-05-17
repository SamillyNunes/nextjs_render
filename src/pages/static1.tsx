import { useEffect, useState } from "react";

export default function Static1(){

    // const [num, setNum] = useState(0);

    // // Ao usar essa estrategia abaixo, deixa de ser um conteudo estatico e passa a ser um SSR, pois precisa ser 
    // // re-renderizado ou nao 
    // useEffect(()=>{
    //     setNum(Math.random());
    // }, []);

    return (
        <div>
            <h1> Estático #01 </h1>
            {/* <span> {num} </span> */}
        </div>
    );
}