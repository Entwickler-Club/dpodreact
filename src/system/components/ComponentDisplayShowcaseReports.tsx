import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';
import ComponentDisplayShowcaseReport from './ComponenDisplayShowcaseReport';

interface IComponentDisplayShowcaseReportsProps {
    items: ShowcaseReports;
}

export const ComponentDisplayShowcaseReports = (props: IComponentDisplayShowcaseReportsProps) => {
    const showcaseReports = props.items;
    const showcaseReportsItemsArray = showcaseReports.getItems<ShowcaseReport>();
    const item: ShowcaseReport = new ShowcaseReport(); //showcaseReportsItemsArray[0];
    const tests = showcaseReportsItemsArray.map(m => m.get_title());
    return (
        <>
            {showcaseReportsItemsArray.map((showcaseReport: ShowcaseReport) => {
                return (
                    <ComponentDisplayShowcaseReport item={showcaseReport} />
                )
            })}
        </>
    )
}

export default ComponentDisplayShowcaseReports;
