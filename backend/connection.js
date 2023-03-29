const { MongoClient } = require("mongodb");

const connection = () => {
  async function main() {
    const url =
      "mongodb+srv://keepcodes:akhilshrey@cluster0.5ef4wce.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedtopology: true,
    });

    try {
      await client.connect();
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  main().catch(console.error);
};

module.exports = connection;
