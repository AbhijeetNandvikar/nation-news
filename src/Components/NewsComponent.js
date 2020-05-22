import React, { Component, createContext } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
export const NewsContext = createContext();

export class NewsComponent extends Component {
    constructor(props) {
        super(props)
        this.newsList = '';
        fetch(`https://news-nation.netlify.app/news`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(res => {
                this.newsList = res.articles.slice()
                this.news = this.renderNews(this.newsList)
                console.log(res)

                this.forceUpdate()
            })
            .catch(err => {
                console.log(err);
            });


    }
    searchNews = (query) => {
        fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=e37f8ac9358c4dbd900f1a0ba2694e50`)
            .then(response => response.json())
            .then(res => {
                this.newsList = res.articles.slice()
                this.news = this.renderNews(this.newsList)
                this.forceUpdate()
            })
            .catch(err => {
                console.log(err);
            });
    }

    searcHeadlines = (query) => {
        fetch(`https://newsapi.org/v2/everything?q=${query + ` india`}&apiKey=e37f8ac9358c4dbd900f1a0ba2694e50`)
            .then(response => response.json())
            .then(res => {
                this.newsList = res.articles.slice()
                this.news = this.renderNews(this.newsList)
                this.forceUpdate()
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderNews = (articles) => {
        const newsarticles = articles.map((article, index) => {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const pdate = new Date(article.publishedAt)
            console.log(pdate)
            const ptime = pdate.toLocaleDateString("en-US", options)
            const content = article.content ? article.content.split('[') : ""
            console.log(content)

            return (

                <Card className="mt-2 card text-left" key={index} >
                    <CardImg top width="100%" src={article.urlToImage} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><strong>{article.title}</strong></CardTitle>
                        <CardSubtitle><small>{ptime}</small></CardSubtitle>
                        <CardText>{content ? content[0] : article.content}</CardText>
                        <a href={article.url} className="badge badge-success">{`Read full article`}</a>
                    </CardBody>
                </Card>


            )
        })
        return newsarticles;
    }

    render() {
        console.log('rendered')
        return (
            <NewsContext.Provider value={[this.news, this.searchNews, this.searcHeadlines]}>
                {this.props.children}
            </NewsContext.Provider>

        );
    }
}


