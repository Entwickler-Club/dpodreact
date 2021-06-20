import { createContext, useState } from 'react';

const ShowcaseContext = createContext();

export const ShowcaseProvider = ({ children }) => {
	const [isShowcase, setIsShowcase] = useState(true);

	return (
		<ShowcaseContext.Provider value={{ isShowcase, setIsShowcase }}>
			{children}
		</ShowcaseContext.Provider>
	);
};

export default ShowcaseContext;
