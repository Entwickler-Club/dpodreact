class Controller {

    protected request: any;
    protected response: any;
    protected actionMethodName: string;
    protected action: string;
    protected requestData: any;

    constructor(request: any, response: any) {
        this.request = request;
        this.response = response;
        this.requestData = this.request.body;
        this.action = this.requestData.action;
        this.actionMethodName = 'action_' + this.action;
    }

    process() {
        (this as any)[this.actionMethodName]();
        console.log(this.actionMethodName);
        // app.post('/controllerShowcaseJsonReadWrite', (req: any, res: any) => {
        // 	const {action} = req.body;
        // 	fs.readFile('./src/system/data/json/itemType_pageItems.json', 'utf-8', (err: any, rawData: any) => {
        // 		const data = JSON.parse(rawData);
        // 		res.send({
        // 			records: data
        // 		});
        // 	});
        // });
    }

    action_loadPageData() {
        console.log('in loadPageData');
    }
}

export default Controller;