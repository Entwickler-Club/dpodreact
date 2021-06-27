import { createContext, useState } from 'react';
import {Provider} from "react-redux";
import {store} from '../../src/system/components/store'
const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
	const [isShowing, setIsShowing] = useState(true);

	return (
		<Provider store={store}>
		<ShowContext.Provider value={{ isShowing, setIsShowing }}>
			{children}
			
		</ShowContext.Provider>
		</Provider>
	);
};

export default ShowContext;
