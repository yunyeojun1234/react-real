import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
box-sizing:border-box;
padding-bottom: 3rem;
width:768px;
margin:0 auto;
margin-top:2rem;
@media screen and (max-width: 768px){
    width:100%
    padding-left:1rem;
    padding-right: 1rem;

}
`;

/* const sampleArticle = {



    
    title:'제목',
    description:'내용',
    url:'https://google.com',
    urlToImage:'https://via.placeholder.com/160',
};

const NewList = () =>{
    return(
        <NewsListBlock>
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
        </NewsListBlock>
    );

};


export default NewList;ddd */

/* const NewsList = ({category})=>{
    const[articles, setArticles] = useState(null);
    const[loading, setLoading] = useState(false);

    useEffect(()=> {
        //async를 사용하는 함수 따로 선언
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const query = category === 'all' ? '': `&category=${category}`; //eslint-disable-line no-unused-vars
                const response =await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=28d572e6fbb3482da71ff93e5487e9d8`,
                );
                setArticles(response.data.articles);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]); */


    const NewsList = ({category}) => {
        const [loading, response, error] =usePromise(() =>{
        const query = category ==='all'? '':`&category=${category}`;
        return axios.get (
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=28d572e6fbb3482da71ff93e5487e9d8`,

        );
    }, [category]);



    //대기중일때
    if(loading){
        return <NewsListBlock>대기중 ...</NewsListBlock>;
    };
    

    //아직 response 값이 설정되지 않앗을때 
    if (!response){
        return null;
    }

    //에러가 발생했을때
    if (error) {
        return <NewsListBlock>에러 발생</NewsListBlock>;
    }

    //response 값이 유효할때

    const {articles} = response.data;
    return(
        <NewsListBlock>
            {articles.map(article =>(
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );

    //articles 값이 유효할때

    /* return (
        <NewsListBlock>
            {articles.map(article =>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    ); */
};

export default NewsList;