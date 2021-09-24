import ShowcaseReport from '../itemTypes/showcaseReport';

// === SINGULAR: MAIN COMPONENT ======================================

interface IShowcaseReportMainComponentProps {
	item: ShowcaseReport;
	kind: ShowcaseReportMainComponentKind;
}

export enum ShowcaseReportMainComponentKind {
	display,
	displayAndEdit,
	list
}

export const ShowcaseReportMainComponent = (props: IShowcaseReportMainComponentProps) => {
	const showcaseReport = props.item;
	const kind = props.kind
	return (
		<div>Display: {showcaseReport.get_title()} {kind === ShowcaseReportMainComponentKind.displayAndEdit && <span>[EDIT]</span>}</div>
	)
}

// === SINGULAR: LIST COMPONENT ======================================

interface IShowcaseReportListComponentProps {
	item: ShowcaseReport;
}

export const ShowcaseReportListComponent = (props: IShowcaseReportListComponentProps) => {
	const showcaseReport = props.item;
	return (
		<div>List: {showcaseReport.get_title()}</div>
	)
}