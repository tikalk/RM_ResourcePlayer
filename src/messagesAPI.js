/**
 * Created by aharon on 10/07/2017.
 */



class MessagesAPI {

    constructor() {

    }

    getMessages() {
        window.addEventListener('message', this.currentResourceState, false);
    }

    currentResourceState(event) {
        console.log(event);
    }

    sendCurrentState(currentContext, currentState){
        console.log('sendCurrentState => ', currentState);
        currentContext.postMessage(currentState, '*');
    }

    initialized(currentContext){
        console.log('initialized');
        currentContext.postMessage({
            progress: [
                {
                    state: 1,
                    resource: 3
                }
            ]
        }, '*');
    }


}