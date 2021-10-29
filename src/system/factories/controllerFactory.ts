import Controller from '../controllers/controller';
// DYNAMIC_CODE_AREA: loadClasses
import ControllerShowcaseJsonReadWrite from '../controllers/controllerShowcaseJsonReadWrite'; // ::showcaseJsonReadWrite
import ControllerShowcaseSqliteReader from '../controllers/controllerShowcaseSqliteReader'; // ::showcaseSqliteReader
import ControllerDeletePage from '../controllers/controllerDeletePage';// ::deletePage
import ControllerCreatePage from '../controllers/controllerCreatePage';// ::createPage
import ControllerShowcaseNewsApi from '../controllers/controllerShowcaseNewsApi';// ::showcaseNewsApi
import ControllerManageShowcaseReports from '../controllers/controllerManageShowcaseReports';// ::manageShowcaseReports
import ControllerShowcaseFetchTryCatch from '../controllers/controllerShowcaseFetchTryCatch';// ::showcaseFetchTryCatch
import ControllerCurriculumFlashcardParser from '../controllers/controllerCurriculumFlashcardParser';// ::curriculumFlashcardParser

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
case 'controllerShowcaseNewsApi':// ::showcaseNewsApi
return new ControllerShowcaseNewsApi(request, response);
case 'controllerManageShowcaseReports':// ::manageShowcaseReports
return new ControllerManageShowcaseReports(request, response);
case 'controllerShowcaseFetchTryCatch':// ::showcaseFetchTryCatch
return new ControllerShowcaseFetchTryCatch(request, response);
case 'controllerCurriculumFlashcardParser':// ::curriculumFlashcardParser
return new ControllerCurriculumFlashcardParser(request, response);
		case 'controllerShowcaseSqliteReader': //:showcaseSqliteReader
			return new ControllerShowcaseSqliteReader(request, response);
	}
}