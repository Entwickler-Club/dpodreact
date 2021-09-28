import ShowcaseReport from '../itemTypes/showcaseReport';

interface IComponentDisplayShowcaseReportProps {
	item: ShowcaseReport;
}

export const ComponentDisplayShowcaseReport = (props: IComponentDisplayShowcaseReportProps) => {
	const showcaseReport = props.item;

	return (
		<div className="item showcaseReportItem">
			<div className="field dataType_line">
				<label className="fieldLabel">Title</label>
				<div className="fieldData">{showcaseReport.get_title()}</div>
				<div className="example">e.g.<code>Enter a title.</code></div>
			</div>
		</div>
	)
}

export default ComponentDisplayShowcaseReport;