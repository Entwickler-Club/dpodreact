import ShowcaseReport from '../itemTypes/showcaseReport';

interface IShowcaseReportComponentProps {
	item: ShowcaseReport;
	kind: ShowcaseReportKind;
}

export enum ShowcaseReportKind {
	display,
	displayAndEdit,
	list
}

export const ShowcaseReportComponent = (props: IShowcaseReportComponentProps) => {
	const showcaseReport = props.item;
	const kind = props.kind

	switch (kind) {
		case ShowcaseReportKind.list:
			return (
				<div>List: {showcaseReport.get_title()}</div>
			)
		default:
			return (
				<div>Display: {showcaseReport.get_title()} {kind === ShowcaseReportKind.displayAndEdit && <span>[EDIT]</span>}</div>
			)
	}
}