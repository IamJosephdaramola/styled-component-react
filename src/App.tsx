import { ThemeProvider } from 'styled-components';
import { theme } from './theme.styled';
import GlobalStyles from './styles/GlobalStyles';
import { Container } from './styles/Container.styled';
import { Header } from './components';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					<h1>hello world</h1>
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
