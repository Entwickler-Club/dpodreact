import Controller from '../controllers/controller';
//DYNAMIC_CODE_AREA:loadClasses
import ControllerShowcaseJsonReadWrite from '../controllers/controllerShowcaseJsonReadWrite'; // ::showcaseJsonReadWrite
import ControllerShowcaseSqliteReader from '../controllers/controllerShowcaseSqliteReader'; // ::showcaseSqliteReader

export const instantiate = (controllerIdCode: string, request: any, response: any) => {
	switch (controllerIdCode) {
		case 'controller':
			return new Controller(request, response);
		//DYNAMIC_CODE_AREA:switchBlock,2
		case 'controllerShowcaseJsonReadWrite': //:pageShowcaseJsonReadWrite
			return new ControllerShowcaseJsonReadWrite(request, response);
		case 'controllerShowcaseSqliteReader': //:pageShowcaseSqliteReader
			return new ControllerShowcaseSqliteReader(request, response);
    }
}