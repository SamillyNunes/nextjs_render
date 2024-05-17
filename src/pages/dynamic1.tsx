export function getServerSideProps(){
    console.log('[Server] Gerando os props para o componente...');
    return {
        props: {
            number: Math.random(),    
        }
    }
}

export default function Dynamic1(props: any){
    console.log('[Cliente] Gerando o componente...');
    return (
        <div>
            <h1> Dinâmico #01 </h1>
            <span> {props.number} </span>
        </div>
    );
}