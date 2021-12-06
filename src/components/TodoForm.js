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
        this.handleSubmit = this.handleSubmit.bind(this);
      }   
      
      handleInput(e){
        const{ value, name} = e.target;
        this.setState({
            [name]: value
        })
      }
      handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending the data...');
      }

      render() {
            return (
                <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="title" className="form-control" placeholder="Title"/>
                        </div>
                    <div className="form-group">
                        <input onChange={this.handleInput} type="text" name="responsible" className="form-control" placeholder="Responsible"/>
                    </div>
                    <div className="form-group">
                        
                        <textarea 
                        onChange={this.handleInput} 
                        placeholder="Description..."
                        name="description" 
                        className="form-control"> </textarea>
                    
                    </div>
                    <div className="form-group">
                        <select onChange={this.handleInput} name="priority" className="form-control">
                        <option> Low </option>
                        <option> Medium </option>
                        <option> High </option>
                       </select>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" name="submit" placeholder="Enviar" value="submit"/> 
                    </div>
                    
                    </form>
                </div>
                )
        }
}
export default Form;