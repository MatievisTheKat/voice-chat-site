import React, { Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";
import { Switch, Route, withRouter } from "react-router-dom";

import Header from "./components/header/Header";
import LoadingFallback from "./components/LoadingFallback";

const Index = React.lazy(() => import("./pages/index"));
const About = React.lazy(() => import("./pages/about"));
const NotFound = React.lazy(() => import("./pages/404"));

const ConnectivityListener = React.lazy(() => import("./components/ConnectivityListener"));

const App: React.FC = () => {
	const toSlug = (str: string) => str.trim().replace(/\//gi, "-").toLowerCase();
	const currentTab = toSlug(window.location.pathname.slice(1));

	return (
		<ToastProvider autoDismiss={true} autoDismissTimeout={10000} placement="top-right">
			<div className="flex flex-col h-screen justify-between">
				<Header tab={currentTab || ""} />
				<main className="mb-auto lg:mx-48 mt-10 text-center text-gray-600 place-content-center">
					<Switch>
						<Route path="/" exact>
							<Suspense fallback={<LoadingFallback />}>
								<Index />
							</Suspense>
						</Route>
						<Route path="/about" exact>
							<Suspense fallback={<LoadingFallback />}>
								<About />
							</Suspense>
						</Route>
						<Route>
							<Suspense fallback={<LoadingFallback />}>
								<NotFound />
							</Suspense>
						</Route>
					</Switch>
				</main>
			</div>

			<Suspense fallback={null}>
				<ConnectivityListener />
			</Suspense>
		</ToastProvider>
	);
};

export default withRouter(App);
