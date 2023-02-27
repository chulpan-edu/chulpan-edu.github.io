<div align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
  <h1>Vite ⚡ React template</h1>
</div>

<h2 align="center">Install and run</h2>

Install and run locally with npm:

```bash
npm install
npm run start:dev
```

Install and run locally dev build with docker:

```bash
docker build -t vite-react:dev .
docker run -itd --rm -p 3000:5173 vite-react:dev
```

Install and run locally production build with docker:

```bash
docker build -f Dockerfile.prod -t vite-react:prod .
docker run -it --rm -p 1337:80 vite-react:prod
```