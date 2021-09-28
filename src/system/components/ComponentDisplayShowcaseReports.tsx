import { IShowcaseReport } from '../dataLayer/interfaces';
import ShowcaseReports from '../itemTypes/showcaseReports';
import ShowcaseReport from '../itemTypes/showcaseReport';

interface IComponentDisplayShowcaseReportsProps {
    items: ShowcaseReports;
}

export const ComponentDisplayShowcaseReport = (props: IComponentDisplayShowcaseReportsProps) => {
    const showcaseReports = props.items;
    const showcaseReportsItemsArray = showcaseReports.getItems<ShowcaseReport>();
    const item: ShowcaseReport = new ShowcaseReport(); //showcaseReportsItemsArray[0];
    const tests = showcaseReportsItemsArray.map(m => m.get_title());
    return (
        <>
            <div>test:: {showcaseReportsItemsArray.length}</div>
            {showcaseReportsItemsArray.map((showcaseReport: ShowcaseReport) => {
                return (
                    <div>{showcaseReport.get_title()}</div>
                )
            })}
            {/* <div>{item.get_title()}</div> */}
            {/* {showcaseReportsItemsArray.map((showcaseReport: ShowcaseReport) => {
                return (
                    <div>{showcaseReport.get</div>
                )
            })} */}
            {/* {showcaseReportsItemsArray.map((showcaseReport: ShowcaseReport, index: number) => {
                return (
                    <div>nnn</div>
                )
            })} */}
        </>
    )
}

export default ComponentDisplayShowcaseReport;
