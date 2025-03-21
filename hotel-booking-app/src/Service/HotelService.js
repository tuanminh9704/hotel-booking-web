import { get } from '../utils/request'

export const getHotels = async () =>{
    return await get("hotels");
}