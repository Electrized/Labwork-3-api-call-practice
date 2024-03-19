import { IonAlert } from "@ionic/react"

export enum SearchType {
    all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode',
}



export interface DetailsResult {
    Title: string
    Year: string
    Poster: string
    imdbID: string
    Director: string
    Actors: string
    Website: string
}

export interface SearchResult {
    Title: String
    Year: string
    Poster: string
    imdbID: string
    Type: string
}


export interface searchError {
    Response: string
    Error: string
}


export const useApi = () => {
    let url = 'https://www.omdbapi.com/'
    let apiKey = '45627002'



    const searchData = async (title: string, type: SearchType): Promise<SearchResult[] | searchError[]> => {
        const result = await fetch(
        `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apiKey}`,
        
    )
    return result.json() } 


const getDetails = async (id: string): Promise<DetailsResult> =>{
    const result = await fetch(`${url}?i=${id}&plot=full&apikey=${apiKey}`)
    
    return result.json()
}
    return {
        searchData,
        getDetails,
    }
}



export default useApi