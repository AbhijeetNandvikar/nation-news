import React,{ useState } from 'react' ;
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Search = (props) =>{
			const {
			  buttonLabel,
			  className
			} = props;
		  
			const [modal, setModal] = useState(false);
		  
			const toggle = () => setModal(!modal);
        return(
			<div>
			 <Button className='sButton'  color='dark' onClick={toggle}><i class="fa fa-search"></i></Button>
				<Modal isOpen={modal} toggle={toggle} className={className}>
					<ModalHeader toggle={toggle}>What are you looking for?</ModalHeader>
					<ModalBody>
					<div className="search container col-12 col-md-6">
						<div className="row justify-content-center mt-2">
							<div className="col-8">
								<input type="text" class="form-control" placeholder="Search by keyword" />
							</div>

							<div className="col-4 pl-0">
								<button type="submit" class="btn btn-block btn-primary">{`Search`}</button>
							</div>
						</div>

						<div className="row align-items-center justify-content-center mt-2">
							<div className="col-4 ">
							<div><h5>Categories:</h5></div>
							</div>
							<div className="col-8 pl-0">
								<div class="form-group  p-0">
									<select id="inputState" class="form-control">
										<option selected>Choose...</option>
										<option>COVID-19</option>
										<option>Top Headlines</option>
										<option>Economics</option>
										<option>Politics</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					</ModalBody>
				</Modal>
				</div>
        
        )
    
}
export default Search ;