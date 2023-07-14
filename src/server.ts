import "dotenv/config";
import fastify from "fastify";

const server = fastify();

server.get("/", (request, response) => {
    return { message: "Hello from Render" }
});

server.listen({
    host: "0.0.0.0",
    port: Number(process.env.SERVER_PORT)
}).then(() => {
    console.log(`[server]: Server running on port ${process.env.SERVER_PORT}`);
});