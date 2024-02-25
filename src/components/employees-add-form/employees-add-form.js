import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            classNames: "form-control new-post-label"
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    onSubmit = (e) => {
        
        const name = this.state.name;
        const salary = this.state.salary;

        if (name.length<=3 || salary.length<=1) {
            e.preventDefault();
            this.setState({
                classNames: this.state.classNames+' invalid'
            })
        } else {
            e.preventDefault();
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                classNames: "form-control new-post-label"
            })
        }
    }

    render() {

        const {name, salary,classNames} = this.state;

        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit = {this.onSubmit}>
                <input type="text"
                    className={classNames}
                    placeholder="Как его зовут?" 
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className={classNames}
                    placeholder="З/П в $?" 
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange} />

                <button type="submit"
                        className="btn btn-outline-light"
                        onsubmit="return false;">Добавить</button>
            </form>
        </div>
        )
    }
}

export default EmployeesAddForm;