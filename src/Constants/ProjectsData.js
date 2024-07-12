// Images
import EduCompanion from "../Assets/Projects/EduCompanion.png";
import JWTAuth from "../Assets/Projects/JWT Auth.png";
import GithubAvatarScout from "../Assets/Projects/Github-Avatar-Scout-App.png";
import GalleryApp from "../Assets/Projects/Gallery App.png";
import Pokedex from "../Assets/Projects/Pokedex.png";
import TikTacToe from "../Assets/Projects/Tik-Tac-Toe.png";
import PasswordGenerator from "../Assets/Projects/Password Generator.png";
import QuizApp from "../Assets/Projects/QuizApp.png";
import ColorGenerator from "../Assets/Projects/Color Generator.png";
import TimeCounter from "../Assets/Projects/TimeCounter.png";
import NFTs from "../Assets/Projects/NFTs.png";
import Adventure from "../Assets/Projects/Adventure.png";
import DigitalAgency from "../Assets/Projects/Digital Agency.png";
import Pixelab from "../Assets/Projects/Pixelab.png";
import EGuru from "../Assets/Projects/E-GURU.png";
import EBike from "../Assets/Projects/E-Bike.png";
import Wockhardt from "../Assets/Projects/Wockhardt.png";
import JSAssignments from '../Assets/Projects/Vanilla JS Assignments.png'

 const ProjectsData = [
    {
        Img: EduCompanion,
        Title: 'EduCompanion',
        Description: 'EduCompanion is an LMS platform where admins can create courses, and students can access them after purchasing a subscription, featuring a multitude of benefits.',
        Tech: "MongoDB, Express.js, React.js, Node.js",
        GhLink: 'https://github.com/raish10100/EduCompanion', 
        DemoLink: 'https://www.edu-companion.online',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1720611047/Full_video_of_LMS_1_sa8i6n.mp4",
        FilterCat: "Full Stack",
        CreatedAt: '2024, 6, 22'
    },
    {
        Img: JWTAuth,
        Title: 'Jwt Auth',
        Description: 'This is a simple User Management System, allowing users to log in, sign up, reset their password, log out, and access a homepage, providing essential functionalities.',
        Tech: "MongoDB, Express.js, React.js, Node.js",
        GhLink: 'https://github.com/Raish10100/User-Management-System',
        CreatedAt: '2024, 3, 23',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1720607637/User_Management_System_mzq8d3.mp4",
        FilterCat: "Full Stack",
    },
    {
        Img: Pokedex,
        Title: 'PokeDex',
        Description: 'A web application for browsing and searching Pokémon, built using modern web development technologies to create a responsive and interactive Pokédex. Clicking on a Pokémon reveals its details.',
        FilterCat: "React JS",
        Tech: "React.js, PokeApi",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1718878654/lms/ane419ntktkvxkkx2wzz.mp4",
        GhLink: 'https://github.com/Raish10100/PokeDex',
        CreatedAt: '2024, 5, 20',
        DemoLink: 'https://pokedex-raishforge.netlify.app/'
    },
    { 
        Img: GalleryApp,
        Title: 'Gallery App',
        Description: 'This React-based gallery app allows users to view various images and access their details by clicking on each image.',
        FilterCat: "React JS",
        Tech: "React.js",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1718876402/lms/trx4j5olzrfnedpnfv6x.mp4",
        GhLink: 'https://github.com/Raish10100/REACT_GALLERY_APP',
        CreatedAt: '2024, 4, 26',
        DemoLink: 'https://raish-pix-gallery.netlify.app/'
    },
    {
    Img: GithubAvatarScout,
    Title: 'Github Avatar Scout',
    Description: "This React-based Avatar Scout App allows users to quickly discover a Github user's avatar and access their profile with a simple username search.",
        Tech: "React.js",
        FilterCat: "React JS",
        GhLink: 'https://github.com/Raish10100/Github_Avatar_Scout_App',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1718875359/lms/qwunwuyymgsjnnkw45zs.mp4",
        CreatedAt: '2024, 5, 1',
        DemoLink: 'https://github-avatar-scout.netlify.app/'
    },
    {
        Img: TikTacToe,
        Title: 'Tik-Tac-Toe',
        Description: 'Play a classic game of Tic-Tac-Toe, where user can challenge himself or a friend to a battle of wits. Make your moves strategically to outmaneuver your opponent and emerge victorious.',
        FilterCat: "React JS",
        Tech: "React.js",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1718877333/lms/xoo5xzuksqnyvxvc1h71.mp4",
        GhLink: 'https://github.com/Raish10100/Tik-Tac-Toe',
        CreatedAt: '2024, 5, 17',
        DemoLink: 'https://tik-tac-toe-raishforge.netlify.app/'
    },
    {
        Img: PasswordGenerator,
        Title: 'Password Generator',
        Description: 'The Password Generator is a simple yet powerful tool designed to help you create strong and secure passwords.',
        FilterCat: "Vanilla JS",
        Tech: "Javascript, CSS",
        GhLink: 'https://github.com/Raish10100/JS-projects/tree/main/Password%20Generator%20App',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1715655421/Password_Gen_App_s946ak.mp4",
        CreatedAt: '2024, 5, 14',
        DemoLink: 'https://passgen-raishforge.netlify.app/'
    },
    {
        Img: QuizApp,
        Title: 'Quiz App',
        Description: "An interactive quiz app that tests your knowledge. Start the challenge, track your progress, and improve your score with instant feedback and restart options.",
        FilterCat: "Vanilla JS",
        Tech: "Javascript, Tailwind Css",
        GhLink: 'https://github.com/Raish10100/Assignment-of-Module-35/tree/main/Quiz%20App',
        CreatedAt: '2024, 5, 14',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1718877086/lms/rfrgmxqffpn8u03jdtyf.mp4",
        DemoLink: 'https://mern-quiz-raishforge.netlify.app/'
    },
    {
        Img: ColorGenerator,
        Title: 'Color Generator',
        Description: 'A simple color generator app where users can effortlessly copy color codes with a single button click.',
        FilterCat: "Vanilla JS",
        Tech: "Javascript, CSS",
        GhLink: 'https://github.com/Raish10100/JS-projects/tree/main/Random-Color-Genrator',
        CreatedAt: '2024, 3, 10',
        DemoLink: 'https://random-color-genrator-app-by-raish.netlify.app/',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1720704496/Random_Color_Generator_ay8470.mp4",
    },
    {
        Img: TimeCounter,
        Title: 'Time Counter',
        Description: 'A time counter app that calculates the time difference between the current time and a target event time.',
        FilterCat: "Vanilla JS",
        Tech: "Javascript, CSS",
        GhLink: 'https://github.com/Raish10100/JS-projects/tree/main/Counter-App',
        CreatedAt: '2024, 3, 10',
        DemoLink: 'https://counter-app-by-raish.netlify.app/',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1720704548/Time_Counter_re5tdt.mp4",
    },
    {
        Img: JSAssignments,
        Title: 'JS Assignments',
        Description: 'This repository contains all vanilla JavaScript assignments provided by PW Skills in the Full Stack Web Development (FSWD) course, solved using native JavaScript without any libraries or frameworks.',
        Tech: "Javascript",
        FilterCat: "Vanilla JS",
        GhLink: 'https://github.com/Raish10100/Javascript-Assignments',
        CreatedAt: '2023, 8, 2',
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1720704873/All_JS_Assignment_we3uda.mp4",
        // DemoLink: 'https://counter-app-by-raish.netlify.app/'
    },
    {
        Img: NFTs,
        Title: 'NFTs Landing Page',
        Description: 'The NFTs Landing Page showcases key platform features and offers an engaging user experience for digital asset explorers and investors.',
        GhLink: 'https://github.com/Raish10100/Milestone-exam-repository',
        DemoLink: 'https://nfts-l-p.netlify.app/',
        Tech: "HTML, Tailwind CSS",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1715400558/Milestone%20Exame%20Assignment/NFT_landing_page_totkk8.mp4",
        CreatedAt: '2023, 8, 1',
        FilterCat: "HTML + CSS"
    },
    {
        Img: DigitalAgency,
        Title: 'Digital Agency',
        Description: "Digital Agency Landing Page featuring modern design, AOS animation,responsive design, interactive elements, and diverse sections, offering a rich user experience.",
        GhLink: 'https://github.com/Raish10100/Responsiveness_Practice-s',
        DemoLink: 'https://digital-agency10.netlify.app/',
        Tech: "HTML, CSS",
        CreatedAt: '2024, 5, 5',
        FilterCat: "HTML + CSS",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1720704373/Digital_Agency_kg4luk.mp4",
    },
    {
        Img: Adventure,
        Title: 'Adventure',
        Description: "It's an landing page with interactive UI, picturesque visuals, and engaging animations, featuring Navbar, Upcoming Events, Explore the World, Upcoming Tours, Footer, and CSS Animations.",
        GhLink: 'https://github.com/Raish10100/Responsiveness_Practice-s',
        DemoLink: 'https://adventure-landing-page10.netlify.app/',
        Tech: "HTML, CSS",
        CreatedAt: '2024, 5, 4',
        FilterCat: "HTML + CSS",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1720704156/Adventure_landing_page_olhpw3.mp4",
    },
    {
        Img: Pixelab,
        Title: 'Pixelab',
        Description: "The Pixelab Landing Page is a visually appealing introduction to the company's services and offerings, targeted at attracting clients and collaborators by showcasing expertise in digital innovation and projects.",
        GhLink: 'https://github.com/Raish10100/Milestone-exam-repository',
        DemoLink: 'https://pixelab-l-p.netlify.app/',
        Tech: "HTML, Tailwind CSS",
        CreatedAt: '2023, 8, 1',
        FilterCat: "HTML + CSS",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1715400562/Milestone%20Exame%20Assignment/Pixelab_landing_page_hz5eed.mp4",
    },
    {
        Img: EGuru,
        Title: 'E-Guru',
        Description: 'E-Guru is a e-learning landing page offering high-quality educational resources, featuring a designed responsive front-end layout.',
        GhLink: 'https://github.com/Raish10100/Milestone-exam-repository',
        DemoLink: 'https://e-guru-l-p.netlify.app/',
        Tech: "HTML, CSS",
        CreatedAt: '2023, 8, 1',
        FilterCat: "HTML + CSS",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1715400493/Milestone%20Exame%20Assignment/E-GURU_landing_page_qt5cst.mp4",
    },
    {
        Img: EBike,
        Title: 'E-Bike',
        Description: 'E-Bike Landing Page showcasing product features, modern design with diverse sections, multiple accessories, and an engaging user experience.',
        GhLink: 'https://github.com/Raish10100/Milestone-exam-repository',
        DemoLink: 'https://e-bike-l-p.netlify.app/',
        Tech: "HTML, Tailwind CSS",
        CreatedAt: '2023, 8, 1',
        FilterCat: "HTML + CSS",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1715400518/Milestone%20Exame%20Assignment/Bike_landing_page_uahn2w.mp4",
    },
    {
        Img: Wockhardt,
        Title: 'Wockhardt',
        Description: 'Hospital Landing Page with responsive, user-friendly, and performance-optimized online presence, blending modern aesthetics with easy access to hospital services, facilities, and contact information.',
        GhLink: 'https://github.com/Raish10100/Milestone-exam-repository',
        DemoLink: 'https://wockhardt-care-l-p.netlify.app/',
        Tech: "HTML, CSS",
        CreatedAt: '2023, 8, 1',
        FilterCat: "HTML + CSS",
        Video: "https://res.cloudinary.com/deodsnio3/video/upload/v1718874675/lms/pxrb6vbsxuakj1av7er2.mp4",
    },
]


export default ProjectsData