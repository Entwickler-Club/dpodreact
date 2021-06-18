import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<div className='button'>
					<button onClick={incrementCounHandler} disabled={count === 50}>
						Click + 1
					</button>
					<button onClick={decrementCounHandler} disabled={count === 0}>
						Click - 1
					</button>
					<button onClick={resetCounHandler}>Click 0</button>
				</div>

				<p>Datapod for React | What's up guys? - counting {count}</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
