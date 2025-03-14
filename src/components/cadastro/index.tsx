import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cadastro(){
    let navigate = useNavigate();
    const url = "http://localhost:8080/produtos";

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async (event : any ) => {
        event.preventDefault();

        if (!name ||!price ||!quantity ||!imageUrl) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        const data = { name, price, quantity, imageUrl };
        
        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            alert("Cadastro realizado com sucesso!");
            return navigate("/");
        } catch (error) {
            console.error("Erro ao realizar cadastro:", error);
        }
    }

    return(
        <div>
            <h1>Página de Cadastro</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nome" required 
                    value={name} onChange={ e => setName(e.target.value)} />

                <input type="text" placeholder="preco" required 
                    value={price} onChange={ e => setPrice(e.target.value)} />
                    
                <input type="text" placeholder="quantidade" required 
                    value={quantity} onChange={ e => setQuantity(e.target.value)} />

                <input type="text" placeholder="image url" required 
                    value={imageUrl} onChange={ e => setImageUrl(e.target.value)} />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}