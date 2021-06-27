import {articles_url, keyword, _api_key} from '../config/rest_config';

export async function getArticles(keyword='bitcoin') {
    try{
        let articles = await fetch(`${articles_url}?q=${keyword}`,{
            headers: {
                'X-API-KEY': _api_key
            }
        });
        
        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error){
        throw error;
    }
}