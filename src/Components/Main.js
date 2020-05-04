import React,{ Component } from 'react' ;
import Search from './Search.js'
import NewsRender from './NewsRender';

class Main extends Component{
    render(){
        return(
            <div className="main container">
                <Search />
                <NewsRender />
            </div>
        )
    }
}
export default Main ;