export function getStaticPaths(){
    return {
        fallback: false, //false: retorna 404 quando nao encontrar o id que esta nos params abaixo
        // quanto mais paths existir, mais paginas estaticas sera gerado:
        paths: [
            { params: {id: '1'} },
            { params: {id: '2'} },
            { params: {id: '3'} },
        ],
    }
}

export async function getStaticProps(context:any){
    const idParam = context.params.id;
    const resp = await fetch(`http://localhost:3000/api/students/${idParam}`);
    const student = await resp.json();

    return {
        props:{
            student,
        }
    }
}

export default function StudentById(props: any){
    const { student } = props;

    return (
        <div>
            <h1> Detalhes do Aluno </h1>
            <h2> Detalhes </h2>
            <ul>
                <li> {student.id} </li>
                <li> {student.name} </li>
                <li> {student.email} </li>
            </ul>
        </div>
    );
}