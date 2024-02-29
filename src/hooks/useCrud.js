import  Axios  from "axios";
import { useState } from "react"; 
const useCrud = (urlBase) => {
    const [apiData, setApiData] = useState();

    // read
    const getApi = (path) =>{
        Axios.get(`${urlBase}${path}/`)
             .then(res => setApiData(res.data))
             .catch(err => console.log(err));
    }
    //create
    const postApi = (path , data) => {
        Axios.post(`${urlBase}${path}/`, data)
                .then(res => {
                    setApiData([...apiData, res.data]);
                    console.log(res.data);
                })
                .catch(err => console.log(err));
    }
    //delete
    const deleteApi = (path, id) =>{
        Axios.delete(`${urlBase}${path}/${id}/`)
                .then(() => 
                    {
                        setApiData(apiData.filter(element => element.id!==id));
                        console.log("Borrado con Exito");
                    })
                .catch(err => console.log(err))
    }

    // update
    const updateApi = (path, id, data) => {
        Axios.patch(`${urlBase}${path}/${id}/`, data)
                .then(res => 
                    {
                        setApiData(apiData.map(element => element.id===id? res.data : element));
                        console.log(res.data);
                    })
                .catch(err => console.log(err));
    }

    return [apiData, getApi, postApi,deleteApi, updateApi];
}

export default useCrud;