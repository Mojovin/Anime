export async function AnimeCatalog(){
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime`)
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        return data.data
        
    } catch (error) {
        alert(error)
        return [];
    }
}