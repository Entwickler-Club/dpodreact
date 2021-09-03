import Controller from '../controllers/controller';
// DYNAMIC_CODE_AREA: loadClasses
import ControllerShowcaseJsonReadWrite from '../controllers/controllerShowcaseJsonReadWrite'; // ::showcaseJsonReadWrite
import ControllerShowcaseSqliteReader from '../controllers/controllerShowcaseSqliteReader'; // ::showcaseSqliteReader
import ControllerTestPage444 from '../controllers/controllerTestPage444';// ::testPage444
import ControllerTestPage555 from '../controllers/controllerTestPage555';// ::testPage555
import ControllerTestPage666 from '../controllers/controllerTestPage666';// ::testPage666

export const instantiate = (controllerIdCode: string, request: any, response: any) => {
	switch (controllerIdCode) {
		case 'controller':
			return new Controller(request, response);
		// DYNAMIC_CODE_AREA: switchBlock,2
		case 'controllerShowcaseJsonReadWrite': //:showcaseJsonReadWrite// ::
			return new ControllerShowcaseJsonReadWrite(request, response);
		case 'controllerTestPage444':// ::testPage444
			return new ControllerTestPage444(request, response);
		case 'controllerTestPage555':// ::testPage555
			return new ControllerTestPage555(request, response);
		case 'controllerTestPage666':// ::testPage666
			return new ControllerTestPage666(request, response);
		case 'controllerShowcaseSqliteReader': //:showcaseSqliteReader
			return new ControllerShowcaseSqliteReader(request, response);
	}
}