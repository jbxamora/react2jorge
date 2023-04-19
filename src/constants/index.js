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
    spice
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
        name: "DALL-E Clone",
        description:
            "A web application built using React.js that utilizes OpenAI's DALL-E API to generate images from textual descriptions. The application is designed to showcase the power of OpenAI's DALL-E API and how it can be used to create stunning images from textual inputs.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "OpenAI",
                color: "pink-text-gradient",
            },
        ],
        image: dalle,
        source_code_link: "https://github.com/jbxamora/DALL-E-Clone",
    },
    {
        name: "EcomVision",
        description:
            "The ultimate admin dashboard solution for businesses. With ECOMVISION, you can easily manage and analyze your business data in one convenient location. From tracking sales figures to customer engagement metrics, ECOMVISION has got you covered. With a modern and intuitive interface, managing your data has never been easier. ",
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
                name: "Nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
        ],
        image: ecomdash,
        source_code_link: "https://github.com/jbxamora/admindash",
    },
    // {
    //     name: "ThoughtsUp",
    //     description:
    //         "ThoughtsUp is a social network API built using Express.js and MongoDB, which can handle large amounts of unstructured data. It offers a variety of features such as sharing thoughts, reacting to friend’s thoughts, and creating a friend list. ",
    //     tags: [
    //         {
    //             name: "Express",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "restapi",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "mongodb",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: thoughtsup,
    //     source_code_link: "https://github.com/jbxamora/ThoughtsUp",
    // },
    {
        name: "Spice",
        description:
            "Submit, Personalize, Improve, Create, Enjoy",
        tags: [
            {
                name: "MERN",
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
        image: spice,
        source_code_link: "https://github.com/jbxamora/SPICE",
    },
    // {
    //     name: "BackOfShop",
    //     description:
    //         "This is a back end for an e-commerce website built with the latest technologies, allowing the company to compete with other e-commerce companies. ",
    //     tags: [
    //         {
    //             name: "mysql2",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "sequelize",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "nodejs",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: backofshop,
    //     source_code_link: "https://github.com/jbxamora/backofshop",
    // },
    // {
    //     name: "sqlTrackR",
    //     description:
    //         "Organize and plan your business with ease! Manage your company's departments, roles, and employees all in one place with this command-line application, that lets you view and add departments, roles, and employees, update an employee's role, and even view the budget of a department!",
    //     tags: [
    //         {
    //             name: "mysql",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "javascript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "nodejs",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: sqltrack,
    //     source_code_link: "https://github.com/jbxamora/backofshop",
    // }
];

export { services, technologies, experiences, testimonials, projects };