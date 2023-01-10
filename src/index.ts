import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

dotenv.config();

const schema = buildSchema(`
type Query{
  hello: String
}`);

const root = { hello: () => "Hello world!" };

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  console.log(`Now browse to localhost:${port}/graphql`);
});
