import React,{ useState, useContext } from 'react' ;
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {NewsContext} from './NewsComponent'



const Search = (props) =>{
			const {
			  className
			} = props;
		  
			const [modal, setModal] = useState(false);
			const toggle = () => setModal(!modal);
			const searchNews  = useContext(NewsContext)[1]
			const searchHeadlines = useContext(NewsContext)[2]
			let searchQ = ''
			let newsQ = ''
        return(
			<div>
			 <Button className='sButton'  color='dark' onClick={toggle}><i className="fa fa-search"></i></Button>
				<Modal isOpen={modal} toggle={toggle} className={className}>
					<ModalHeader toggle={toggle}>What are you looking for?</ModalHeader>
					<ModalBody>
					<form>
					<div className="search container col-12">
						<div className="row justify-content-center mt-2">
							<div className="col-8">
								<input type="text" className="form-control" placeholder="Search by keyword" onChange={(e) => {searchQ = e.target.value
								console.log(e.target.value)
								}}/>
							</div>

							<div className="col-4 pl-0">
								<button type="submit" className="btn btn-block btn-primary" onClick={ (e) => {
									e.preventDefault()
									searchNews(searchQ) ;
								}
								}
								>{`Search`}</button>
							</div>
						</div>

						<div className="row align-items-center justify-content-center mt-2">
							<div className="col-4 ">
							<div><h5>Categories:</h5></div>
							</div>
							<div className="col-8 pl-0">
								<div className="form-group  p-0">
									<select id="inputState" className="form-control" onChange={ e => {
										newsQ = e.target.selectedOptions[0].value
										console.log(newsQ)
										// searchNews(newsQ)
										searchHeadlines(newsQ) ;
									}}>
										<option value={"corona"} selected>Choose...</option>
										<option value="corona" >COVID-19</option>
										<option value="">Top Headlines</option>
										<option value="business">Economics</option>
										<option value="entertainment">Entertainment</option>
										<option value="sports">Sports</option>
										<option value="lifestyle">Lifestyle</option>
										<option value="education">Education</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
						</div>
					</div>
					</form>
					
					</ModalBody>
					<ModalFooter>
          				<Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
				</Modal>
				</div>
        
        )
    
}
export default Search ;