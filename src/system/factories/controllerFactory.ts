import Controller from '../controllers/controller';
// DYNAMIC_CODE_AREA: loadClasses
import ControllerShowcaseJsonReadWrite from '../controllers/controllerShowcaseJsonReadWrite'; // ::showcaseJsonReadWrite
import ControllerShowcaseSqliteReader from '../controllers/controllerShowcaseSqliteReader'; // ::showcaseSqliteReader
import ControllerTest111 from '../controllers/controllerTest111';// ::test111
import ControllerTest222 from '../controllers/controllerTest222';// ::test222
import ControllerTest333 from '../controllers/controllerTest333';// ::test333
import ControllerTest444 from '../controllers/controllerTest444';// ::test444

export const instantiate = (controllerIdCode: string, request: any, response: any) => {
	switch (controllerIdCode) {
		case 'controller':
			return new Controller(request, response);
// DYNAMIC_CODE_AREA: switchBlock,2
case 'controllerShowcaseJsonReadWrite': //:showcaseJsonReadWrite// ::
return new ControllerShowcaseJsonReadWrite(request, response);
case 'controllerTest111':// ::test111
return new ControllerTest111(request, response);
case 'controllerTest222':// ::test222
return new ControllerTest222(request, response);
case 'controllerTest333':// ::test333
return new ControllerTest333(request, response);
case 'controllerTest444':// ::test444
return new ControllerTest444(request, response);
		case 'controllerShowcaseSqliteReader': //:showcaseSqliteReader
			return new ControllerShowcaseSqliteReader(request, response);
	}
}