FROM oven/bun:latest

WORKDIR /app

RUN bun add -g serve

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["sh", "-c", "bun run build && serve -s dist -l 5173"]