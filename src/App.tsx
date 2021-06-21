import React from 'react';
import { ShowProvider } from './context/ShowContext.jsx';
import Site from './system/components/Site';

function App() {
	return (
		<ShowProvider>
			<div className='App'>
				<Site />
			</div>
		</ShowProvider>
	);
}

export default App;
