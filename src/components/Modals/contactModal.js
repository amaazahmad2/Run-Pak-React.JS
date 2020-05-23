import React from 'react';
import './contactModal.css';

class ContactModal extends React.Component {
    render() {
        return (
            <div className="gradient-border" id="modalContainer">
                <div>
                    
                        <h5 class="modalContainerHeading">
                            Mubeen Elaahi:<br></br> 0302-4405000
                            <br></br>
                            <br></br>
                            Muhammad Usman:<br></br> 0324-4471088
                        </h5>
                    
                </div>
            </div>

        );
    }
}
export default ContactModal;