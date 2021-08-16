class Controller {

    protected request: any;
    protected response: any;
    // protected actionMethodName: string;

    constructor(request: any, response: any) {
        this.request = request;
        this.response = response;
        //this.actionMethodName = 'action_' + this.action;
    }

    process() {
        console.log('controller is processing');
    }
}

export default Controller;