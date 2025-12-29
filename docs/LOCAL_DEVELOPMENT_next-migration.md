# Local development (next-migration branch)

1. git clone git@github.com:zluxar1gg/HappyBox_next.git
2. cd HappyBox_next
3. git fetch origin
4. git checkout next-migration
5. cp .env.example .env.local
6. npm install
7. npm run dev

Open http://localhost:3000 for EN and http://localhost:3000/ru for RU.

Preview deploys will be available in the Pull Request created for this branch (if Vercel is connected to the repo).
