export enum SearchType {
    all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode',
}

export interface DetailsResult {
    Genre: string
    Title: String
    Year: string
    Poster: string
    Plot: string
    imdbRating: string
    Director: String
    Actors: string
    Website: string
}

export const useApi = () => {
    let url = 'https://www.omdbapi.com/'
    let apiKey = '45627002'


const searchData = async (title: string, type: SearchType): Promise<any> => {
    const result = await fetch(
        `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apiKey}`,

    )
    return result.json()
}


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