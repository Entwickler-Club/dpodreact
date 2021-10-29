/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';

class ControllerCurriculumFlashcardParser extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
        this.response.send({
			defaultText: `What is the capital of England?
  London

What is the capital of France?
  Paris`
        });
	}

	action_parseText() {
        this.response.send({
			targetText: 'this is it'
        });
	}

}

export default ControllerCurriculumFlashcardParser;
