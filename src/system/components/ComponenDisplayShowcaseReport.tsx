import '../styles/dpodDisplayGeneric.scss';
import ShowcaseReport from '../itemTypes/showcaseReport';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface IComponentDisplayShowcaseReportProps {
	item: ShowcaseReport;
	editable?: boolean;
}

export const ComponentDisplayShowcaseReport = (props: IComponentDisplayShowcaseReportProps) => {
	const showcaseReport = props.item;
	const editable = props.editable === undefined ? false : props.editable;
	
	return (
		<div className="item showcaseReportItem">
			{editable && (
				<div className="buttonPanel">
					<button><GrEdit /></button>
					<button><RiDeleteBin6Line /></button>
				</div>
			)}
			<div className="field dataType_line">
				<label className="fieldLabel">Title</label>
				<div className="fieldData">{showcaseReport.get_title()}</div>
			</div>
			<div className="field dataType_line">
				<label className="fieldLabel">Description</label>
				<div className="fieldData">{showcaseReport.get_description()}</div>
			</div>
		</div>
	)
}

export default ComponentDisplayShowcaseReport;