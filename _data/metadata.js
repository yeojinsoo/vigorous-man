const url = process.env.URL ?? "https://vigorous-man.com";
const title = "박력분 블로그";

module.exports = {
    en: {
        url,
        title,
        description: "TODO",
        feed: {
            subtitle: "TODO",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "TODO",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: "github",
            link: "https://github.com/yeojinsoo/vigorous-man",
        },
        author: {
            url,
            name: "박력분",
            email: "yeojinsoo@kakao.com",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Blog posts list",
        },
        about: {
            title: `About | ${title}`,
        },
    },
};
