/**
 *   Component Banner
 **/
import React, { useState, useEffect } from "react";
import { instance } from "utils/axios";
import { request } from "utils/request";

import "./Banner.scss";

export const Banner = (props) => {
	const [movie, setMovie] = useState([]);

	const { fetchNetflixOriginals } = request;

	useEffect(() => {
		(async () => {
			const request = await instance.get(fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Recortamos el la descripcion de la pelicula en el header
	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<div className="banner__buttons">
					<button className="banner__button">Pay</button>
					<button className="banner__button">My list</button>
				</div>

				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>

			<div className="banner__fadeBottom"></div>
		</header>
	);
};
