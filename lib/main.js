const fastify = require('fastify')({
  logger: true
})

fastify.register(require("point-of-view"), {
  engine: {
    mustache: require("mustache"),
  },
});

fastify.get("/first", (req, reply) => {
  reply.view(
    "/templates/index.mustache",
    {
      title: "first",
      text: "some text content for page 'first'"
    }, {
      partials: {
      content: "/templates/first-partial.mustache"
    }
  });
});

fastify.get("/second", (req, reply) => {
  reply.view(
    "/templates/index.mustache",
    {
      title: "second",
      text: "some text content for page 'second'"
    }, {
      partials: {
      content: "/templates/second-partial.mustache"
    }
  });
});


const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
