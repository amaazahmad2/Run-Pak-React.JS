import React from 'react';
import './subscriptionModal.css';

class SubscriptionModal extends React.Component {
    render() {
        return (
            <div className="gradient-border" id="modalContainer">
                <div>
                    <form>
                        <h5 class="modalContainerHeading">
                            Are you a sportsperson?
                            <br></br>
                            Wanna hear the latest news in the sports world? 
                            <br></br> 
                            Wait no more and subscribe
                        </h5>
                        <input type="text" placeholder="Name" id="fname" name="fname" />
                        <input type="text" placeholder="Email" id="em" name="em" />
                        <input type="submit" placeholder="Subscribe" />
                    </form>
                </div>
            </div>

        );
    }
}
export default SubscriptionModal;