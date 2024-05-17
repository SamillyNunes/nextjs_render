// A priori chamara esse metodo uma unica vez, no momento do build (ah nao ser que tenha timing etc)
// Considere verificar esse comportamento em modo producao!
export function getStaticProps(){
    return {
        revalidate: 7,
        props: {
            number: Math.random(),
        }
    }

}

export default function Static3(props: any){
    return (
        <div>
            <h1> Estático #03 </h1>
            <h2> {props.number} </h2>
        </div>
    );
}