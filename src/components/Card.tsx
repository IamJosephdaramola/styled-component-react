import type { Content } from '../content';
import { StyledCard } from '../styles';

export default function Card({ id, title, body, image }: Content) {
	const layout = id % 2 === 0 ? 'row-reverse' : 'row';

	return (
		<StyledCard layout={layout}>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={`./images/${image}`} alt={title} />
			</div>
		</StyledCard>
	);
}
