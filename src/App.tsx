import { ThemeProvider } from 'styled-components';
import { Container, GlobalStyles, theme } from './styles';
import { Header, Card, Footer } from './components';
import { content } from './content';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				{content.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
