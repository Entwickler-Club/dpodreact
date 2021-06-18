import { useState } from 'react';
import '../styles/pageShowcaseCounterUsingState.scss';

function PageShowcaseCounterUsingState() {
	const [count, setCount] = useState(0);

	const incrementCounHandler = () => {
		setCount(prevCount => prevCount + 1);
	};

	const decrementCounHandler = () => {
		setCount(prevCount => prevCount - 1);
	};

	const resetCounHandler = () => {
		setCount(0);
	};

	return (
		<div className="page page_home">
			<h2 className="title">Showcase: Counter Using State</h2>
			<p className="description">This is a simple demonstration how to use state on a React page.</p>
			<div className='button'>
				<p>You can count between 0 and 10:</p>
				<button onClick={decrementCounHandler} disabled={count === 0}>
					Click - 1
				</button>
				<button onClick={resetCounHandler}>Click 0</button>
				<button onClick={incrementCounHandler} disabled={count === 10}>
					Click + 1
				</button>
			</div>

			<p className="theCount">{count}</p>
		</div>
	)
}

export default PageShowcaseCounterUsingState;