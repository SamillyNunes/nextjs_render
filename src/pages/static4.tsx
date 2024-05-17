// Esse arquivo nao funciona nas versoes mais recentes do node/next

// //Essa funcao abaixo so executa do lado do servidor apenas.
// export async function getStaticProps(){
//     console.log("Gerando static props");
//     const resp = await fetch("http://localhost:3000/api/products");
//     const products = await resp.json();

//     return {
//         props: {
//             products,
//         }
//     }

// }

// export default function Static4(props: any){

//     function renderProducts(){
//         return props.products.map( (p: any) => {
//             return <li key={p.id} > {p.name} tem o preço de {p.price} </li>
//         } );
//     }

//     return (
//         <div>
//             <h1> Estático #04 </h1>
//             <ul>
//                 {renderProducts()}
//             </ul>
//         </div>
//     );
// }