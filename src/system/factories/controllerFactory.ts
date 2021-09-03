import Controller from '../controllers/controller';
// DYNAMIC_CODE_AREA: loadClasses
import ControllerShowcaseJsonReadWrite from '../controllers/controllerShowcaseJsonReadWrite'; // ::showcaseJsonReadWrite
import ControllerShowcaseSqliteReader from '../controllers/controllerShowcaseSqliteReader'; // ::showcaseSqliteReader
import ControllerTest777 from '../controllers/controllerTest777';// ::test777

export const instantiate = (controllerIdCode: string, request: any, response: any) => {
	switch (controllerIdCode) {
		case 'controller':
			return new Controller(request, response);
// DYNAMIC_CODE_AREA: switchBlock,2
case 'controllerShowcaseJsonReadWrite': //:showcaseJsonReadWrite// ::
return new ControllerShowcaseJsonReadWrite(request, response);
case 'controllerTest777':// ::test777
return new ControllerTest777(request, response);
		case 'controllerShowcaseSqliteReader': //:showcaseSqliteReader
			return new ControllerShowcaseSqliteReader(request, response);
	}
}