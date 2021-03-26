import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static("./public"))

/*
app.get('/:id', (req, res) => {
	// TODO: redirect to url
})

app.get("/url", (req,res) => {
	// TODO: create a short url
})

app.get("/url/:id", (req,res) => {
	// TODO: get a short url by id
})
*/

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
})