import * as config from './config';

export const dynamicFileCodeAreaMarker = () => {
	return `// ${config.dynamicFileCodeAreaWordMarker()}:`;
};

export const dynamicFileCodeAreaWordMarker = () => {
	return "DYNAMIC_CODE_AREA";
};

export const dynamicFileCodeChunkMarker = () => {
	return "//:";
};