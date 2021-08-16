class Controller {

    protected request: any;
    protected response: any;

	constructor(request: any, response: any) {
		this.request = request;
		this.response = response;
    }
}

export default Controller;