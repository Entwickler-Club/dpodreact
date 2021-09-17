import Controller from '../controllers/controller';
// DYNAMIC_CODE_AREA: loadClasses
import ControllerShowcaseJsonReadWrite from '../controllers/controllerShowcaseJsonReadWrite'; // ::showcaseJsonReadWrite
import ControllerShowcaseSqliteReader from '../controllers/controllerShowcaseSqliteReader'; // ::showcaseSqliteReader
import ControllerDeletePage from '../controllers/controllerDeletePage';// ::deletePage
import ControllerCreatePage from '../controllers/controllerCreatePage';// ::createPage
import ControllerShowcaseNewsApi2 from '../controllers/controllerShowcaseNewsApi2';// ::showcaseNewsApi2

export const instantiate = (controllerIdCode: string, request: any, response: any) => {
	switch (controllerIdCode) {
		case 'controller':
			return new Controller(request, response);
// DYNAMIC_CODE_AREA: switchBlock,2
case 'controllerShowcaseJsonReadWrite': //:showcaseJsonReadWrite// ::
return new ControllerShowcaseJsonReadWrite(request, response);
case 'controllerDeletePage':// ::deletePage
return new ControllerDeletePage(request, response);
case 'controllerCreatePage':// ::createPage
return new ControllerCreatePage(request, response);
case 'controllerShowcaseNewsApi2':// ::showcaseNewsApi2
return new ControllerShowcaseNewsApi2(request, response);
		case 'controllerShowcaseSqliteReader': //:showcaseSqliteReader
			return new ControllerShowcaseSqliteReader(request, response);
	}
}