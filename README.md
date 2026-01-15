
<div align="center">
  <h1 align="center">Coinverse</h1>
  <h3>The Ultimate Crypto Ecosystem</h3>
  
  <p align="center">
    <a href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,prisma,postgres,vercel,git" />
    </a>
  </p>

  <p align="center">
    A powerful cryptocurrency market tracker and portfolio management application.
    <br />
    <a href="#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://coinverse-demo.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/naveenkumar29052006/Coinverse/issues">Report Bug</a>
    ·
    <a href="https://github.com/naveenkumar29052006/Coinverse/pulls">Request Feature</a>
  </p>
</div>

---

## 🚀 About The Project

Coinverse is a modern web application designed to help users track cryptocurrency prices, manage their portfolios, and stay updated with the latest market trends. Built with **Next.js** and **Tailwind CSS**, it offers a seamless and responsive user experience.

### ✨ Key Features

- **Real-time Market Data**: Live tracking of top cryptocurrencies.
- **Portfolio Management**: Track your holdings and performance.
- **Interactive Charts**: Visualise price trends with dynamic charts.
- **News Feed**: Stay informed with the latest crypto news.
- **Secure Authentication**: User accounts protected by JWT.

---

## 🛠️ Built With

*   [![Next][Next.js]][Next-url]
*   [![React][React.js]][React-url]
*   [![TailwindCSS][TailwindCSS]][Tailwind-url]
*   [![Prisma][Prisma]][Prisma-url]
*   [![PostgreSQL][PostgreSQL]][Postgres-url]

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js (v18+)
*   npm or yarn
*   PostgreSQL database

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/naveenkumar29052006/Coinverse.git
    cd Coinverse
    ```

2.  **Install dependencies**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/coinverse"
    JWT_SECRET="your_secure_random_string"
    ```

4.  **Run Database Migrations**
    ```sh
    npx prisma generate
    npx prisma migrate dev
    ```

5.  **Start the Development Server**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to GitHub.
2.  Import project to Vercel.
3.  Add `DATABASE_URL` and `JWT_SECRET` in Vercel Environment Variables.
4.  Click **Deploy**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnaveenkumar29052006%2FCoinverse)

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📞 Contact

Naveen Kumar - [@naveenkumar2905](https://github.com/naveenkumar29052006)

Project Link: [https://github.com/naveenkumar29052006/Coinverse](https://github.com/naveenkumar29052006/Coinverse)

<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
