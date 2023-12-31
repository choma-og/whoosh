export default function HandlebarUpdate() {
  return {
    name: "HandlebarUpdate",
    enforce: "post",
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".hbs") || file.endsWith(".scss")) {
        console.log("reloading handlebar file...");
        server.ws.send({
          type: "full-reload",
          path: "*",
        });
      }
    },
  };
}