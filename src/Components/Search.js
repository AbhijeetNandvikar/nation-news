import React,{ Component } from 'react' ;


class Search extends Component{
    render(){
        return(
            <div className="search container col-12 col-md-6">
				<div className="row justify-content-center mt-2">
					<div className="col-8">
						<input type="text" class="form-control" placeholder="What you looking?" />
					</div>

					<div className="col-4 pl-0">
						<button type="submit" class="btn btn-block btn-primary">{`Search`}</button>
					</div>
				</div>

				<div className="row justify-content-center mt-2">
					<div className="col-4">
					<button className="btn btn-block btn-primary" disabled>{`Categories`}</button>
					</div>
					<div className="col-8 pl-0">
						<div class="form-group  p-0">
							<select id="inputState" class="form-control">
								<option selected>Choose...</option>
								<option>...</option>
							</select>
						</div>
					</div>
				</div>
	        </div>
        )
    }
}
export default Search ;