import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			body: string;
			header: string;
			footer: string;
		};
	}
}
