import React from "react";
import { Nabvar } from "components/Navbar";
import { Banner } from "components/Banner";
import { RowMovies } from "components/Row";
import { request } from "utils/request";

import "./App.scss";

function App() {
	const {
		fetchTrending,
		fetchNetflixOriginals,
		fetchActionMovies,
		fetchComedyMovies,
		fetchHorrorMovies,
		fetchRomanceMovies,
		fetchDocumentaries,
	} = request;

	return (
		<div className="App">
			<Nabvar />
			<Banner />
			<RowMovies
				title="Netflix Originals"
				fetchUrl={fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<RowMovies title="Trending Now" fetchUrl={fetchTrending} />
			<RowMovies title="Actions Movies" fetchUrl={fetchActionMovies} />
			<RowMovies title="Comedy Movies" fetchUrl={fetchComedyMovies} />
			<RowMovies title="Horror Movies" fetchUrl={fetchHorrorMovies} />
			<RowMovies title="Romance Movies" fetchUrl={fetchRomanceMovies} />
			<RowMovies title="Documentaris Movies" fetchUrl={fetchDocumentaries} />
		</div>
	);
}

export default App;
