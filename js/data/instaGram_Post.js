const instaPostsData = [
    {
        "href": "https://www.instagram.com/",
        "src": "https://img.freepik.com/free-photo/close-up-portrait-thoughtful-men-s-face_171337-9724.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1712102400&semt=ais",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://down-sg.img.susercontent.com/file/1d8b2326f9f3e03c1a35f6ea3c571e46",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://img.freepik.com/free-photo/close-up-photo-adorable-pale-girl-yellow-sunglasses_197531-7302.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700352000&semt=ais",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://www.instaloverz.com/wp-content/uploads/2017/04/1.-Men-Wearing-Glass.jpg",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://img.ltwebstatic.com/images3_pi/2022/07/18/1658144983271d118222a4c6f50d1ceabf8c035749_thumbnail_405x552.jpg",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://img.freepik.com/free-photo/joyful-pretty-brunette-caucasian-girl-sun-glasses-stucks-out-tongue-gestures-horns-hand-sign-purple_141793-69377.jpg",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://www.warbyparker.com/learn/wp-content/uploads/2023/05/prescription-sunglasses.jpg",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://media.istockphoto.com/id/891540456/photo/unhappy-young-woman.jpg?s=612x612&w=0&k=20&c=_w82hlvFn_MtjwRgvPLyiaH-jtRSl-pH5sMyUwipZZg=",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://img.freepik.com/free-photo/pleased-young-handsome-caucasian-man-wearing-glasses-putting-hands-head-with-closed-eyes-isolated-green-background_141793-76903.jpg",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://clothedup.com/wp-content/uploads/2022/05/6-13-819x1024-1.webp",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://img.freepik.com/premium-photo/young-woman-hat-glasses-stands-front-yellow-background_781958-1442.jpg",
        "alt": "insta"
    },
    {
        "href": "https://www.instagram.com/",
        "src": "https://img.freepik.com/free-photo/indoor-portrait-bearded-young-man-with-trendy-hairstyle_273609-3961.jpg",
        "alt": "insta"
    }
];

export function instaGram_Post(selector) {
    const createInstagramPosts = (instaPostsData, targetSelector) => {
        const instaGramPostWrappers = document.querySelectorAll(targetSelector);

        instaGramPostWrappers.forEach((IGPWrapper) => {
            let postsHTML = '';
            instaPostsData.forEach(({ href, src, alt }) => {
                postsHTML += `
                    <a class="post" href="${href}" target="_blank">
                        <img src="${src}" alt="${alt}" loading="lazy">
                        <div class="overlay">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </a>
                `;
            });
            IGPWrapper.innerHTML += postsHTML;
        });
    };
    createInstagramPosts(instaPostsData, selector);
}