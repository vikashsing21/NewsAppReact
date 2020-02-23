import{article_url,country_code, category ,api_key, pageSize} from '../config/rest';



export async function getArticle(){
    try{
        let articles= await fetch(`${article_url}?country=${country_code}&category=${category}&pageSize=${pageSize}`,{
            headers:{
                'X-API-KEY':api_key
            }
            
        });
            
            var result= await articles.json();
            
       
                articles=null;

            return result.articles;

    }
    catch(errror){
        throw error;
    }
}