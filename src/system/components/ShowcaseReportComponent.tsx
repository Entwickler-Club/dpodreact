import ShowcaseReport from '../itemTypes/showcaseReport';

interface IShowcaseReportComponentProps {
	item: ShowcaseReport;	
}
const ShowcaseReportComponent = (props: IShowcaseReportComponentProps) => {
	const showcaseReport = props.item;
	return (
		<div>showcase report component: {showcaseReport.get_systemWhenCreated()}</div>
	)
}

export default ShowcaseReportComponent; 