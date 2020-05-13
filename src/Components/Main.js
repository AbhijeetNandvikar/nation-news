import React,{ Component } from 'react' ;
import Search from './Search.js'
import NewsRender from './NewsRender';
import {NewsComponent} from './NewsComponent'

class Main extends Component{
    render(){
        return(
            <div className="main container">
                        <NewsComponent>
                        <Search />
                        <NewsRender />
                        </NewsComponent>

                
            </div>
        )
    }
}
export default Main ;