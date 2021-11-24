import React, {Component} from 'react';
class Form extends Component{
    constructor(){
        super();
        this.state = {
          title: '',
          responsible: '',
          description:'',
          priority:''
        };
        this.handleInput = this.handleInput.bind(this);
      }   
      
      handleInput(e){
        const{ value, name} = e.target;
        this.setState({
            [name]: value
        })
      }
      
      render() {
            return (
                <div className="card">
                    <form className="card-body" onSubmit={this.handle.Submit}>
                        <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="title" className="form-control" placeholder="Title"/>
                        </div>
                    <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="responsible" className="form-control" placeholder="Responsible"/>
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInput} 
                        type="text" 
                        name="description" 
                        className="form-control" 
                        placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <select onChange={this.handleInput} name="priority" className="form-control">
                        <option> low </option>
                        <option> medium </option>
                        <option> high </option>
                       </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" placeholder="Enviar" value="submit"/> 
                    </div>
                    
                    </form>
                </div>
                )
        }
}
export default Form;