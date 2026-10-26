// Website content data
// Edit this file to update your papers and projects

const websiteData = {
    // Papers Section
    papers: [
        {
            title: "Beyond Pairs: Detecting Colluding Groups of Agents from Their Moves",
            authors: "Tarun Trivedi, Eashan Gandotra",
            venue: "Apart Research AI Collusion Research Sprint, 2026",
            description: "We asked whether an auditor who sees only agents' moves can tell which agents are colluding in a multi-agent game. The existing pairwise detector misses colluding groups of three or more. We introduce GroupScan, an algorithm that scans every group of players for coordinated moves and calibrates against shuffled copies of the game to account for honest, correlated actions. We first validate it in multi-player Rock Paper Scissors, where it recovers hidden groups that pairwise methods miss with low false positive rates. We then extend it to LLM agents: in a double auction, it identifies a cartel of five LLM sellers that the pairwise method fails to detect.",
            pdf: "papers/beyond-pairs-detecting-colluding-groups.pdf",
            links: [
                {text: "Apart Research", url: "https://apartresearch.com/sprints/projects/beyond-pairs-detecting-colluding-groups-of-agents-from-their-moves-4zhs"},
                {text: "Code", url: "https://github.com/taruntrivedi3/collusion-detection"},
                {text: "Interactive viewer", url: "https://taruntrivedi3.github.io/collusion-detection/viewer/"}
            ]
        },
        {
            title: "Introductory Topics in Statistical Learning",
            authors: "Eashan Gandotra",
            venue: "Chicago Trading Company, 2025",
            description: "An introduction to fundamental concepts in statistical learning theory and machine learning.",
            pdf: "papers/introductory-topics-in-statistical-learning.pdf",
            links: []
        },
        {
            title: "Ramanujan's Summation",
            authors: "Eashan Gandotra",
            venue: "Georgia Institute of Technology, 2022",
            description: "An exposition on Ramanujan's counterinutitive result showing that the sum of all positive integers equals -1/12. Written after taking Complex Analysis at Georgia Tech.",
            pdf: "papers/ramanujans-summation.pdf",
            links: [] // Optional: add {text: "Code", url: "..."}, {text: "arXiv", url: "..."}
        },
        {
            title: "Introduction to Olympiad Inequalities",
            authors: "Eashan Gandotra",
            venue: "Georgia Institute of Technology, 2020",
            description: "An introduction to some beautiful inequalities often used in olympiad level math competitions. Written during the Georgia Tech Putnam seminar course.",
            pdf: "papers/introduction-to-olympiad-inequalities.pdf",
            links: []
        },
        {
            title: "Formulas for Pre-Olympiad Competition Math",
            authors: "Eashan Gandotra",
            venue: "Walton High School, 2018",
            description: "A curated collection of essential formulas and techniques for pre-olympiad math competitions. This resource has become widely used in the competition math community and consistently ranks as the top Google result for \"contest math formulas\" and related searches.",
            pdf: "papers/formulas-for-pre-olympiad-competition-math.pdf",
            links: []
        }
    ],

    // Projects Section
    projects: [
        {
            title: "Transfer Learning for Physics-Informed Neural Networks",
            description: "Trains a neural network for option pricing (Black-Scholes PDE), verifies results against an implicit finite difference scheme, and transfers learned weights to solve the heat equation",
            github: "https://github.com/eashang1/pinn-diffusion-pde"
        },
        {
            title: "de Bruijn Sequence Card Magic",
            description: "Interactive website for performing card magic tricks using a novel deck constructed with de Bruijn sequences. Advised by Dr. Matt Baker.",
            github: "https://github.com/eashang1/a_stuck_wizard",
            demo: "https://eashang1.github.io/a_stuck_wizard/"
        },
        {
            title: "Game AI & Adversarial Agents",
            description: "Developed adversarial agents for competitive game environments including Halite, Terminal, and Super Auto Pets. Implemented search algorithms and heuristic evaluation functions.",
            github: "https://github.com/eashang1/halite_agents"
        },
        {
            title: "Super Smash Bros. for Game Boy Advance",
            description: "Recreation of Super Smash Bros. Melee mechanics for GBA hardware. Built from scratch in C with custom sprite rendering and game physics.",
            github: "https://github.com/eashang1/smash_gba_game"
        }
    ]
};
