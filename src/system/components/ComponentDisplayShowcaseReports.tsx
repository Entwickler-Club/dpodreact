import { IShowcaseReport } from '../dataLayer/interfaces';
import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';

interface IComponentDisplayShowcaseReportsProps {
    items: ShowcaseReports;
}

export const ComponentDisplayShowcaseReport = (props: IComponentDisplayShowcaseReportsProps) => {
    const showcaseReports = props.items;
    showcaseReports.debug();
    const showcaseReportsItemsArray = showcaseReports.getItems<ShowcaseReport[]>();

    return (
        <>
        <div>test: {showcaseReportsItemsArray.length}</div>
            {/* {showcaseReportsItemsArray.map((showcaseReport: ShowcaseReport, index: number) => {
                return (
                    <div>nnn</div>
                )
            })} */}
        </>
    )
}

export default ComponentDisplayShowcaseReport;
