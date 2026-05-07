import { Routes, Route } from 'react-router-dom';

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col bg-black text-white/95 items-center justify-center text-2xl font-bold text-center">
			<img
				className="size-40 animate-pulse"
				src="https://res.cloudinary.com/dltj8bim0/image/upload/v1761060580/logo_kukwt0.png"
				alt="Doctor SaaS Logo"
			/>
			<h1 className="mt-8 text-5xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
				Doctor SaaS
			</h1>
			<p className="mt-4 text-xl text-gray-400 font-medium tracking-wide">
				The future of healthcare management.
			</p>
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* Add more routes here as you build them */}
		</Routes>
	);
};

export default App;
