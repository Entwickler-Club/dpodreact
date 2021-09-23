import useToggle from '../effects/useToggle';
import '../styles/page_showcaseUseToggle.scss';

function PageShowcaseUseToggle() {
	const [isOnline, toggleIsOnline] = useToggle(false);

	return (
		<div className="page page_showcaseUseToggle">
			<h2 className="title">Showcase: useToggle()</h2>
			<p className="description">This shows how to use the custom effect useToggle()</p>
			<div className="showArea">Online: <span className="theValue">{isOnline.toString()}</span></div>
			<div className="buttonArea">
				<button onClick={() => toggleIsOnline()}>Toggle</button>
				<button onClick={() => toggleIsOnline(true)}>Make True</button>
				<button onClick={() => toggleIsOnline(false)}>Make False</button>
			</div>
		</div>
	)
}

export default PageShowcaseUseToggle;