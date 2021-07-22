import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/util.module.css';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					안녕하세요. 저는 Xtring(Hwang Hyun)입니다. 현재 네오플랫에서
					Software Engineer로 일하고 있어요! Front-end 개발을
					좋아합니다. 잘부탁드립니다~!
				</p>
				<p>
					(This is a sample webite - you'll be building a site like
					this
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>)
				</p>
			</section>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
