import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id: string = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const data = matterResult.data;
    const title: string = data.title;
    const date: string = data.date;

    // Combine the data with the id
    return {
      id,
      // title,
      // date,
      data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1;
    } else if (a.data.date > b.data.date) {
      return -1;
    } else {
      return 0;
    }
  });
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// NOTE TO FIONN:

// Figure out how to define what tyoe ID is here
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const data = matterResult.data;

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml: string = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    data,
  };
}

// export default getAllPostIds;
