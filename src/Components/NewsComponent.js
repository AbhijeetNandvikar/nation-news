import React, { Component, createContext } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

export const NewsContext = createContext();

export class NewsComponent extends Component {
    constructor(props) {
        super(props)
        this.newsList = '';
        this.newsrecieved = false;

    }

    componentDidMount() {
        fetch(`https://news-nation-proxy.herokuapp.com/headlines`)
            .then(response => {
                // console.log(response)
                return response.json()
            })
            .then(res => {
                this.newsList = res.articles.slice()
                this.news = this.renderNews(this.newsList)
                // console.log(res)
                this.newsrecieved = true;
                this.forceUpdate()
            })
            .catch(err => {
                console.log(err);
            });

    }

    searchNews = (query) => {
        this.newsrecieved = false;
        this.forceUpdate()
        console.log('executing further')
        fetch(`https://news-nation-proxy.herokuapp.com/?search=${query}`)
            .then(response => response.json())
            .then(res => {
                this.newsList = res.articles.slice()
                this.news = this.renderNews(this.newsList)
                this.newsrecieved = true;

                this.forceUpdate()
            })
            .catch(err => {
                console.log(err);
            });
    }

    searcHeadlines = (query) => {
        this.newsrecieved = false;
        this.forceUpdate()

        fetch(`https://news-nation-proxy.herokuapp.com/?search=${query + ' india'}`)
            .then(response => response.json())
            .then(res => {
                this.newsList = res.articles.slice()
                this.news = this.renderNews(this.newsList)
                this.newsrecieved = true;

                this.forceUpdate()
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderNews = (articles) => {
        if (articles.length === 0) {
            return (
                <h2>Please povide correct search query</h2>
            )
        }
        else {
            const newsarticles = articles.map((article, index) => {
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const pdate = new Date(article.publishedAt)
                // console.log(pdate)
                const ptime = pdate.toLocaleDateString("en-US", options)
                const content = article.content ? article.content.split('[') : ""
                // console.log(content)

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

    }


    render() {
        console.log('rendered news component')
        return (
            this.newsrecieved ?
                <NewsContext.Provider value={[this.news, this.searchNews, this.searcHeadlines, this.newsrecieved]}>
                    {this.props.children}
                </NewsContext.Provider>
                :
                <div></div>

        );
    }
}


