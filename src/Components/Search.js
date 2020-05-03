import React , { Component } from 'react' ;
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
class Search extends Component {
	constructor(props){
		super(props)
		this.newsList = '' ;
		this.news = false ;
		fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=72a914f9816040a68ad3920fdf9512e7")
		.then(response => response.json()
		).then(res => {
			this.newsList = res.articles.slice()
			console.log(this.newsList)
			this.news = this.renderNews(this.newsList)
			this.forceUpdate()
		})
		.catch(err => {
			console.log(err);
		});
	}

	renderNews = (articles) =>{
		const newsarticles = articles.map( (article, index) => {
			console.log(article.urlToImage)
			return (
					<Card className="m-2 card" key={index} >
						<CardImg top width="100%" src={article.urlToImage} alt="Card image cap" />
						<CardBody>
						<CardTitle><strong>{article.title}</strong></CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>{article.content}</CardText>
						<Button>Button</Button>
						</CardBody>
					</Card>
				
 
			)
		})
		return newsarticles ;
	}
    render() {		
        if(this.news){
			console.log(this.news)
			return(
				<div className="newsContainer col-md-6 col-12 m-auto">{this.news}</div>
			)
		}
		else{
			return(
				<div></div>
			)
		}
   
    }
}

export default Search ;