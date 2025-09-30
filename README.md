# FolioBlock

A minimalist, single-page resume website inspired by Notion's block-based structure and clean academic aesthetics.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/AlbertNjobo/generated-lawrence-portfolio)

## About The Project

FolioBlock is a visually stunning, single-page personal resume website designed for professionals who appreciate minimalist design and clear information architecture. The application presents a personal resume through a series of distinct, Notion-style 'blocks' or 'cards' for different sections: About, Skills, Projects, and Experience.

The user interface prioritizes readability and visual hierarchy with a sophisticated, limited color palette, a professional mix of monospaced and sans-serif typography, and generous whitespace. The entire page is meticulously designed to be print-friendly, allowing a clean, professional PDF version of the resume to be generated directly from the browser's print function.

### Key Features

*   **Minimalist, Notion-Inspired Design:** Clean, content-focused layout with generous whitespace.
*   **Single-Page Layout:** All sections are accessible on a single, smooth-scrolling page.
*   **Sticky Navigation:** A sleek header that stays visible and provides quick links to all sections.
*   **Responsive Perfection:** Flawless layout and readability across desktops, tablets, and mobile devices.
*   **Interactive Polish:** Subtle animations, hover states, and micro-interactions for a delightful user experience.
*   **Print-Friendly:** A custom print stylesheet ensures a perfectly formatted resume when printing the page to PDF.
*   **Easily Customizable:** All resume content is centralized in a single file for quick and easy updates.

## Technology Stack

This project is built with a modern, high-performance tech stack:

*   **Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Scrolling:** [React Scroll](https://github.com/fisshy/react-scroll)
*   **Deployment:** [Cloudflare Pages & Workers](https://workers.cloudflare.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/folio-block.git
    cd folio-block
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

3.  **Run the development server:**
    ```sh
    bun dev
    ```
    The application will be available at `http://localhost:3000`.

## Usage and Customization

All the content for the resume (personal details, skills, projects, experience) is located in a single file for easy editing:

`src/lib/data.ts`

To customize the website with your own information, simply open this file and modify the data structures. The website will automatically update with your content.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploy with Wrangler CLI

1.  **Login to Wrangler:**
    ```sh
    bunx wrangler login
    ```

2.  **Build and deploy the application:**
    ```sh
    bun run deploy
    ```
    Wrangler will guide you through the deployment process, building the application and deploying it to Cloudflare Pages.

### Deploy with the Deploy Button

Click the button below to deploy this project directly to your Cloudflare account.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/AlbertNjobo/generated-lawrence-portfolio)

## License

Distributed under the MIT License. See `LICENSE` for more information.