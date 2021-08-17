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
        console.log('controller is processing222');
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
}

export default Controller;