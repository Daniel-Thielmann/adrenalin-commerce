import { createApp } from "./app";
import { config } from "./config";

const app = createApp();

const server = app.listen(config.port, "0.0.0.0", () => {
  console.log(`Backend running on port ${config.port}`);
});

server.on("error", (error) => {
  console.error("Failed to start backend:", error);
  process.exit(1);
});

const shutdown = (signal: string) => {
  console.log(`${signal} received. Shutting down gracefully...`);

  server.close((error) => {
    if (error) {
      console.error("Error while shutting down:", error);
      process.exit(1);
    }

    console.log("Backend stopped.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forced shutdown after timeout.");
    process.exit(1);
  }, 10_000).unref();
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
