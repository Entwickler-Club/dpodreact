import { useEffect, useState } from 'react';
import '../styles/dpodDisplayGeneric.scss';
import ShowcaseReport from '../itemTypes/showcaseReport';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImDatabase } from 'react-icons/im';
import Loader from "react-loader-spinner";
import FadeIn from 'react-fade-in';

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
	const [field_systemWhenCreated, setField_systemWhenCreated] = useState('');
	const [showSystemInformation, setShowSystemInformation] = useState(false);
	const [componentState, setComponentState] = useState(ComponentState.Loading);
	const editable = props.editable === undefined ? true : props.editable;

	useEffect(() => {
		setTimeout(() => {
			setField_id(props.item.get_id());
			setField_title(props.item.get_title());
			setField_description(props.item.get_description());
			setField_systemWhenCreated(props.item.get_systemWhenCreated());
			setComponentState(ComponentState.Viewing);
		}, 0);
	}, [props.item]);

	const toggleEditState = () => {
		if (componentState !== ComponentState.Editing) {
			setComponentState(ComponentState.Editing)
		} else {
			setComponentState(ComponentState.Viewing)
		}
	}

	return (
		<FadeIn>
			<div className="item showcaseReportItem">
				<div className="header">
					<h3>Showcase Report</h3>
					{editable && (
						<div className="buttonPanel">
							<button onClick={() => setShowSystemInformation(!showSystemInformation)}><ImDatabase /></button>
							<button onClick={() => toggleEditState()}><GrEdit /></button>
							<button><RiDeleteBin6Line /></button>
						</div>
					)}
				</div>
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
						{showSystemInformation && (
							<div className="field dataType_wholeNumber systemInformation">
								<label className="fieldLabel">ID</label>
								<div className="fieldData">{field_id}</div>
							</div>
						)}
						<div className="field dataType_line">
							<label className="fieldLabel">Title</label>
							<div className="fieldData">{field_title}</div>
						</div>
						<div className="field dataType_line">
							<label className="fieldLabel">Description</label>
							<div className="fieldData">{field_description}</div>
						</div>
						{showSystemInformation && (
							<div className="field dataType_wholeNumber systemInformation">
								<label className="fieldLabel">System When Created</label>
								<div className="fieldData">{field_systemWhenCreated}</div>
							</div>
						)}
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
		</FadeIn>
	)
}

export default ComponentDisplayShowcaseReport;