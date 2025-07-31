import axios from 'axios';

export interface HttpAdapter {
    get<T>(url: string):Promise<T>
}

export class PokeApiFetchAdapter implements HttpAdapter {

    public async get<T>( url: string): Promise<T> {
        const resp = await fetch(url)
        const data: T = await resp.json()
        console.log('Con Fetch')
        return data
    }
}

export class PokeApiAdapter  implements HttpAdapter {
    private readonly axios = axios

    public async get<T>( url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        console.log('Con Axios')
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