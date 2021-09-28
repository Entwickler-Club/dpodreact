import { IShowcaseReport } from '../dataLayer/interfaces';
import ShowcaseReports from '../itemTypes/showcaseReports';

interface IComponentDisplayShowcaseReportsProps {
    items: ShowcaseReports;
}

export const ComponentDisplayShowcaseReport = (props: IComponentDisplayShowcaseReportsProps) => {
    const showcaseReports = props.items;

    return (
        <>
        <div>test</div>
            {/* {showcaseReports.getItems<ShowcaseReports>().map((showcaseReport: IShowcaseReport, index: number) => {
                return (
                    <div>nnn</div>
                )
            })} */}
        </>
    )
}

export default ComponentDisplayShowcaseReport;
