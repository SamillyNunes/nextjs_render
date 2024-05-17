export async function getServerSideProps(){
    const resp = await fetch("http://localhost:3000/api/products");
    const products = await resp.json();

    return {
        props: {
            products,
        }
    };
}

export default function Dynamic2(props: any){

    function renderProducts(){
        return props.products.map( (p:any) => (
            <li key={p.id} > {p.id} | {p.name} tem o preço de {p.price} </li>
        ) );
    }

    return (
        <div>
            <h1> Dynamic #02 </h1>
            <ul>
                {renderProducts()}
            </ul>
        </div>
    );
}