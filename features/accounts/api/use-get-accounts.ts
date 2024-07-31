import {useQuery} from "@tanstack/react-query"
import {client} from "@/lib/hono"

export const UseGetAccounts=()=>
{
    const query=useQuery({
        queryKey:["accounts"],
        queryFn:async()=>{
            const response =await client.api.accounts.$get();

            if(!response.ok)
            {
                throw new Error("Error in fetching accounts");
                console.log("Error in fetching accounts")
            }

            const {data}=await response.json();
            return data;

        }
    });
    return query;
}