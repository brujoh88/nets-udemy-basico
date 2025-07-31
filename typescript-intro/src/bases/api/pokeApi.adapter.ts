import { type PokeapiResponse } from '../../interfaces/pokeapi-response.interface';
import axios from 'axios';
export class PokerApiAdapter {

    private readonly axios = axios

    public async get( url: string) {
        const { data } = await this.axios.get(url);        
        return data
    }
    
    public async post( url: string, data: any) {
        
        return
    }

    public async patch( url: string, data: any) {
        
        return
    }
    public async delete( url: string) {
        
        return
    }
}