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
    codecrate
} from "../assets";

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
        name: "Progrest",
        description:
            "progrest is a comprehensive solution for non-profit organizations to manage their volunteer hours, donations, and impact metrics in one place. The platform provides an easy-to-use interface for tracking volunteer hours, processing donations securely through a payment gateway, and measuring the impact of different projects",
        tags: [
            {
                name: "handlebars",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: progrest,
        source_code_link: "https://github.com/jbxamora/progrest",
    },
    {
        name: "ThoughtsUp",
        description:
            "ThoughtsUp is a social network API built using Express.js and MongoDB, which can handle large amounts of unstructured data. It offers a variety of features such as sharing thoughts, reacting to friend’s thoughts, and creating a friend list. ",
        tags: [
            {
                name: "Express",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: thoughtsup,
        source_code_link: "https://github.com/jbxamora/ThoughtsUp",
    },
    {
        name: "CodeCrate",
        description:
            "CodeCrate is just another text editor",
        tags: [
            {
                name: "PWA",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "webpack",
                color: "pink-text-gradient",
            },
        ],
        image: codecrate,
        source_code_link: "https://github.com/jbxamora/CodeCrate",
    },
];

export { services, technologies, experiences, testimonials, projects };