import React from 'react';
import { ShowcaseProvider } from './context/ShowcaseContext.jsx';
import Site from './system/components/Site';

function App() {
	return (
		<ShowcaseProvider>
			<div className='App'>
				<Site />
			</div>
		</ShowcaseProvider>
	);
}

export default App;
