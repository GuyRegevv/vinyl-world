import Intro from './components/containers/Main/Intro/Intro';
import TypicalMarketplaces from './components/containers/Main/TypicalMarketplaces/TypicalMarketplaces';
import DoingIt from './components/containers/Main/DoingIt/DoingIt';
import DoingItCarousel from './components/containers/Main/DoingItCarousel/DoingItCarousel';
import Seller from './components/containers/Main/Seller/Seller';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/custom.scss';

const App = () => {
	return (
		<>
			<header>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#000000" />

				<meta property="og:title" content="Vinyl World" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/meta-image.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="685" />
				<meta property="og:image:height" content="685" />
				<meta property="og:image:alt" content="Vinyl World" />
				<meta property="og:url" content="https://vinylworld.com/" />

				<meta
					name="description"
					content="We're about to change how you discover and buy records online. Vinyl World is a soon to be Marketplace, aiming to deliver the best user experience for both record lovers and collectors."
				/>

				<title>Vinyl World</title>

				<link rel="canonical" href="https://www.vinylworld.com/" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
			</header>
			<Header />
			<main>
				<Intro />
				<TypicalMarketplaces />
				<DoingIt />
				<DoingItCarousel />
				<Seller />
			</main>
			<Footer />
		</>
	);
};

export default App;
