import axios from "axios";

const URL = "https://llegoshopback.herokuapp.com/gestion/perfil_cliente"

const perfil_cliente = async (value) => {   
       
    try {
        const headers ={
            "Content-Type": "application/json",
            "Authorization": `Bearer ${value}`     
        }

        let {data} = await axios.get(URL, {headers})
        // console.log(data)
        return data
        
    }catch (error){
        throw error
    }
}

export{
    perfil_cliente
}