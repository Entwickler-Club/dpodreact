import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';
import ComponentDisplayShowcaseReport from './ComponentDisplayShowcaseReport';

interface IComponentDisplayShowcaseReportsProps {
    items: ShowcaseReports;
	editable?: boolean;
}

export const ComponentDisplayShowcaseReports = (props: IComponentDisplayShowcaseReportsProps) => {
    const showcaseReports = props.items;
    const showcaseReportsItemsArray = showcaseReports.getItems<ShowcaseReport>();
    // const item: ShowcaseReport = new ShowcaseReport(); //showcaseReportsItemsArray[0];
    // const tests = showcaseReportsItemsArray.map(m => m.get_title());
	const editable = props.editable === undefined ? false : props.editable;

    return (
        <>
            {showcaseReportsItemsArray.map((showcaseReport: ShowcaseReport, index) => {
                return (
                    <ComponentDisplayShowcaseReport key={index} item={showcaseReport} editable={editable} />
                )
            })}
        </>
    )
}

export default ComponentDisplayShowcaseReports;
