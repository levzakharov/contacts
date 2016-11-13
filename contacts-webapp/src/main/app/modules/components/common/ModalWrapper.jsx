import React from 'react';

const propTypes = {
    isVisible: React.PropTypes.bool.isRequired,
    onOpen: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired
};

class ModalWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.props.onOpen();
    }

    close() {
        this.props.onClose();
    }

    render() {
        const {isVisible, title, children} = this.props;

        return (
            <div>
                {isVisible &&
                <div className="modal fade in" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button onClick={this.close} type="button" className="close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">{title}</h4>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

ModalWrapper.propTypes = propTypes;

export default ModalWrapper;
