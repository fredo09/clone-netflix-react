/**
 *   Component RowMovies
 **/
import React, { useState, useEffect } from "react";
import { instance } from "utils/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.scss";

export const RowMovies = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const PATH_IMAGES = "https://image.tmdb.org/t/p/original";

	useEffect(() => {
		async function fetchData() {
			const request = await instance.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchUrl]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClickTrailer = (movie) => {
		console.log(movie);
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
					console.log(urlParams.get("v"));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map((movie) => {
					return (
						<img
							onClick={() => handleClickTrailer(movie)}
							className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
							key={movie.id}
							src={`${PATH_IMAGES}${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.poster_path}
						/>
					);
				})}
			</div>
			{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
		</div>
	);
};
