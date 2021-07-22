// lib 디렉터리에서는 external API 엔드포인트 또는 파일 시스템에서 데이터를 가져오는 function()를 만든다.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// ANCHOR 외부 데이터 가져오기
// export async function getSortedPostsData() {
// 	// Instead of the file system,
// 	// fetch post data from an external API endpoint
// 	const res = await fetch('..');
// 	return res.json();
// }

export function getSortedPostsData() {
	// Get flle names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		};
	});

	// Sort posts by date
	return allPostsData.sort(({ date: a }, { date: b }) => {
		if (a < b) {
			return 1;
		} else if (a > b) {
			return -1;
		} else {
			return 0;
		}
	});
}
