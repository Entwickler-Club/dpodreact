import { useState } from 'react';
import '../styles/dpodDisplayGeneric.scss';
import ShowcaseReport from '../itemTypes/showcaseReport';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface IComponentDisplayShowcaseReportProps {
	item: ShowcaseReport;
	editable?: boolean;
}

enum ComponentState {
	Viewing,
	Editing,
	Deleting
}

export const ComponentDisplayShowcaseReport = (props: IComponentDisplayShowcaseReportProps) => {
	const [field_title, setField_title] = useState(props.item.get_title());
	const [field_description, setField_description] = useState(props.item.get_description());
	const [componentState, setComponentState] = useState(ComponentState.Viewing);
	const editable = props.editable === undefined ? false : props.editable;

	const toggleEditState = () => {
		if (componentState !== ComponentState.Editing) {
			setComponentState(ComponentState.Editing)
		} else {
			setComponentState(ComponentState.Viewing)
		}
	}

	return (
		<div className="item showcaseReportItem">
			{editable && (
				<div className="buttonPanel">
					<button onClick={() => toggleEditState()}><GrEdit /></button>
					<button><RiDeleteBin6Line /></button>
				</div>
			)}
			{componentState === ComponentState.Viewing && (
				<>
					<div className="field dataType_line">
						<label className="fieldLabel">Title</label>
						<div className="fieldData">{field_title}</div>
					</div>
					<div className="field dataType_line">
						<label className="fieldLabel">Description</label>
						<div className="fieldData">{field_description}</div>
					</div>
				</>
			)}
			{componentState === ComponentState.Editing && (
				<>
					<div className="field dataType_line">
						<label className="fieldLabel">Title</label>
						<input type="text" value={field_title} onChange={(e) => setField_title(e.target.value)} />
					</div>
					<div className="field dataType_line">
						<label className="fieldLabel">Description</label>
						<input type="text" value={field_description} onChange={(e) => setField_description(e.target.value)} />
					</div>
				</>
			)}
		</div>
	)
}

export default ComponentDisplayShowcaseReport;