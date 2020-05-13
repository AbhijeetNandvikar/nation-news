import React , { Component } from 'react' ;
import {NewsContext} from './NewsComponent'


class NewsRender extends Component {


    render() {	
		const newsList = this.context ;

		console.log('rendered')
		console.log(newsList)

        if(newsList){
			return(
				<div className="newsContainer col-md-6 col-12 m-auto">{newsList[0]}</div>
			)
		}
		else{
			return(
				<div></div>
			)
		}
   
    }
}
NewsRender.contextType = NewsContext;


export default NewsRender ;