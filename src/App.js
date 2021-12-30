import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
	const [markdown, setMarkdown] = useState('# Markdown');
	const textAreaRef = useRef('');
	return (
		<main>
			<section className='markdown'>
				<textarea
					ref={textAreaRef}
					name='markdown'
					id='markdown'
					defaultValue={markdown}
					cols='30'
					rows='10'
					onChange={() => setMarkdown(textAreaRef.current.value)}></textarea>
				<article className='result'>
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</article>
			</section>
		</main>
	);
}

export default App;
