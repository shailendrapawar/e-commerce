import API from "@/shared/api/axios"


export default {

    getCategory: async () => {
        const result = await API.get("/categories")
        console.log(result.data)
        return result.data 
    }

}