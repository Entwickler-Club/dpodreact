import { useEffect, useState } from 'react';
import '../styles/dpodDisplayGeneric.scss';
import ShowcaseReport from '../itemTypes/showcaseReport';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loader from "react-loader-spinner";

interface IComponentDisplayShowcaseReportProps {
	item: ShowcaseReport;
	editable?: boolean;
}

enum ComponentState {
	Loading,
	Viewing,
	Editing,
	Deleting
}

export const ComponentDisplayShowcaseReport = (props: IComponentDisplayShowcaseReportProps) => {
	const [field_id, setField_id] = useState(0);
	const [field_title, setField_title] = useState('');
	const [field_description, setField_description] = useState('');
	const [componentState, setComponentState] = useState(ComponentState.Loading);
	const editable = props.editable === undefined ? false : props.editable;

	useEffect(() => {
		setField_id(props.item.get_id());
		setField_title(props.item.get_title());
		setField_description(props.item.get_description());
		setComponentState(ComponentState.Viewing);
	}, [props.item]);
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
			{componentState === ComponentState.Loading && (
				<Loader
					type="Circles"
					color="#aaa"
					height={70}
					width={70}
				/>
			)}
			{componentState === ComponentState.Viewing && (
				<>
					<div className="field dataType_wholeNumber">
						<label className="fieldLabel">ID</label>
						<div className="fieldData">{field_id}</div>
					</div>
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