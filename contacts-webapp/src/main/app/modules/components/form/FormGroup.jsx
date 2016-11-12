import React from 'react';

const propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string
};

class FormGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {id, label, type, placeholder} = this.props;

        return (
            <div className="form-group">
                {label && <label htmlFor={id}>{label}</label>}
                <input onChange={this.handleChange} type={type || 'text'} className="form-control" id={id} placeholder={placeholder}/>
            </div>
        );
    }
}

FormGroup.propTypes = propTypes;

export default FormGroup;