import Controller from '../controllers/controller';
//DYNAMIC_CODE_AREA:loadClasses
import ControllerShowcaseJsonReadWrite from '../controllers/controllerShowcaseJsonReadWrite';

exports.instantiate = function (controllerIdCode: string, request: any, response: any) {
	switch (controllerIdCode) {
		case 'controller':
			return new Controller(request, response);
		//DYNAMIC_CODE_AREA:switchBlock,2
		case 'controllerShowcaseFormAndAjaxControls': //:pageShowcaseFormAndAjaxControls
			return new ControllerShowcaseJsonReadWrite(request, response);
    }
}