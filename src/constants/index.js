import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    shopify,
    threejs,
    python,
    expressjs,
    thoughtsup,
    progrest,
    codecrate,
    expressnotes,
    backofshop,
    sqltrack,
    ecomdash,
    dalle,
    spice,
    finance,
    article,
    gptalk,
    promptpal
} from "../assets";

function handleDownload(url) {
    const link = document.createElement("a");
    link.href = 'https://www.dropbox.com/s/hb6m45hpwmt4wa2/Jorge_Zamora-Developer.docx?dl=0';
    link.download = "resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Can Change Any of these descriptions and easily update

// Custom Section Links
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "resume",
        title: "Resume",
        download: true,
        onClick: () => handleDownload(),
        href: 'https://www.dropbox.com/s/hb6m45hpwmt4wa2/Jorge_Zamora-Developer.docx?dl=0',
    }
];

// Services and Related Icons
const services = [
    {
        title: "AI Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "3D Designer",
        icon: creator,
    },
];

// Technologies and Related Icons
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "express",
        icon: expressjs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "git",
        icon: git,
    },
];

// Work Experience
const experiences = [{
    title: "Freelance Developer",
    company_name: "SmART",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
        "Developing custom Shopify websites for clients in a variety of industries.",
        "Creating custom themes and integrating third-party apps to meet clients' specific needs.",
        "Troubleshooting and resolving technical issues to ensure smooth website performance.",
        "Providing ongoing support and maintenance to clients after website launch.",],
},
{
    title: "Freelance Developer",
    company_name: "iNoV8",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2023 - Mar 2023",
    points: [
        "Collaborating with clients to understand their business goals and website requirements.",
        "Developing and implementing SEO strategies to improve website visibility and drive traffic.",
        "Customizing Shopify checkout process to improve conversion rates.",
        "Working with designers to create visually appealing and user-friendly website designs.",
    ],
},
{
    title: "Freelance Developer",
    company_name: "Global10",
    icon: shopify,
    iconBg: "##383E56",
    date: "Mar 2023 - Apr 2023",
    points: [
        "Developing custom Shopify apps to extend website functionality.",
        "Integrating Shopify with third-party APIs to automate business processes.",
        "Performing website audits to identify and address performance issues.",
        "Training clients on how to manage and update their Shopify websites.",
    ],
},
];

// Client Testimonies
const testimonials = [
    {
        testimonial:
            "Jorge's innovative design and development approach helped us achieve our business objectives in record time. His expertise in building high-performing websites is unmatched.",
        name: "Emily Chen",
        designation: "CEO",
        company: "SmART",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        testimonial:
            "Jorge's commitment to quality and attention to detail is truly remarkable. His ability to understand our unique requirements and deliver customized solutions sets him apart from other web developers.",
        name: "Alex Wong",
        designation: "VP Marketing",
        company: "Global10",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        testimonial:
            "Jorge's technical skills and professionalism are second to none. He provided exceptional support throughout the entire development process and delivered a website that exceeded our expectations.",
        name: "Julie Smith",
        designation: "Founder",
        company: "iNov8 L.P.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
];

// Projects
const projects = [
    {
        name: "Finanseer",
        description:
            "A Finance App Dashboard designed to provide valuable insights and financial data visualization. The dashboard includes various types of charts, a data grid for displaying product and order information, and machine learning predictions for revenue forecasting.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "MUI",
                color: "green-text-gradient",
            },
            {
                name: "Regression",
                color: "pink-text-gradient",
            },
        ],
        image: finance,
        source_code_link: "https://github.com/jbxamora/finanseer",
        live_demo_link: "https://finanseer-4bdg.onrender.com/",
    },
    {
        name: "EcomVision",
        description:
            "The ultimate admin dashboard solution for businesses. With ECOMVISION, you can easily manage and analyze your business data in one convenient location. From tracking sales figures to customer engagement metrics, ECOMVISION has got you covered. ",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "MUI",
                color: "green-text-gradient",
            },
            {
                name: "Finance",
                color: "pink-text-gradient",
            },
        ],
        image: ecomdash,
        source_code_link: "https://github.com/jbxamora/admindash",
        live_demo_link: "https://adminclient-nfme.onrender.com",
    },
    {
        name: "DALLE-E Clone",
        description:
            "A web application built using React.js that utilizes OpenAI's DALL-E API to generate images from textual descriptions. The application is designed to showcase the power of OpenAI's DALL-E API and how it can be used to create stunning images from textual inputs.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "TailWindCSS",
                color: "green-text-gradient",
            },
            {
                name: "OpenAI",
                color: "pink-text-gradient",
            },
        ],
        image: dalle,
        source_code_link: "https://github.com/jbxamora/DALL-E-Clone",
        live_demo_link: "https://dall-e2-e3hy.onrender.com/",
    },
    {
        name: "GPTalk",
        description:
            "GPTalk is 'THE BLOG OF THE FUTURE', read and update trending stories! Utilize OpenAIs ChatGPT to help you rewrite articles. ",
        tags: [
            {
                name: "NEXT13",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Blog",
                color: "pink-text-gradient",
            },
        ],
        image: gptalk,
        source_code_link: "https://github.com/jbxamora/GPTalk",
        live_demo_link: "gptalk-fgzvn1lh0-jbxamora.vercel.app",
    },
    {
        name: "ArticleSumz",
        description:
            "Sumz is an open-source article summarization tool powered by the advanced capabilities of OpenAI GPT-4. Designed to help users quickly grasp the essence of lengthy articles, Sumz transforms verbose content into clear, concise, and informative summaries.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "GPT-4",
                color: "pink-text-gradient",
            },
        ],
        image: article,
        source_code_link: "https://github.com/jbxamora/articlesumz",
        live_demo_link: "https://articlesumz.onrender.com/",
    },
    {
        name: "PromptPal",
        description:
            "Organize and plan your business with ease! Manage your company's departments, roles, and employees all in one place with this command-line application, that lets you view and add departments, roles, and employees, update an employee's role, and even view the budget of a department!",
        tags: [
            {
                name: "NEXT13",
                color: "blue-text-gradient",
            },
            {
                name: "TailWindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Prompt-Share",
                color: "pink-text-gradient",
            },
        ],
        image: promptpal,
        source_code_link: "https://github.com/jbxamora/promptpal",
        live_demo_link: "https://promptpal.vercel.app",
    }
];

export { services, technologies, experiences, testimonials, projects };