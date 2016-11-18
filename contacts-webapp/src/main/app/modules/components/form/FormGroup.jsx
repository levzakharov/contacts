import React from 'react';

const propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    isDisabled: React.PropTypes.bool,
    handleChange: React.PropTypes.func
};

class FormGroup extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event.target.value);
    }

    render() {
        const {id, label, type, placeholder, isDisabled} = this.props;

        return (
            <div className="form-group">
                {label && <label htmlFor={id}>{label}</label>}
                <input onChange={this.handleChange} type={type || 'text'} className="form-control" id={id}
                       placeholder={placeholder} value={this.props.value} disabled={isDisabled}/>
            </div>
        );
    }
}

FormGroup.propTypes = propTypes;

export default FormGroup;