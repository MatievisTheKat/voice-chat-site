import React from "react";
import { Helmet } from "react-helmet";

interface State {}
interface Props {
	description: string;
	lang: string;
	meta: any[];
	title: string;
}

export default class SEO extends React.Component<Props, State> {
	static defaultProps = {
		lang: "en",
		meta: [],
		description: "Talk to another human being on matievisthekat.dev",
	};

	public render() {
		const { lang, title, description, meta } = this.props;
		const defaultTitle = "meet.matievisthekat.dev";
		const author = "@matievisthekat";

		return (
			<Helmet
				htmlAttributes={{
					lang,
				}}
				title={title}
				titleTemplate={defaultTitle ? `%s ‹ ${defaultTitle}` : undefined}
				meta={[
					{
						name: "description",
						content: description,
					},
					{
						property: "og:title",
						content: title,
					},
					{
						property: "og:description",
						content: description,
					},
					{
						property: "og:type",
						content: "website",
					},
					{
						name: "twitter:card",
						content: "summary",
					},
					{
						name: "twitter:creator",
						content: author,
					},
					{
						name: "twitter:title",
						content: title,
					},
					{
						name: "twitter:description",
						content: description,
					},
				].concat(meta)}
			/>
		);
	}
}
