const express = require("express");

const app = express();

const myLogger = (req, res, next) => {
	// const date = new Date();

	// if (1 <= new Date().getDay() <= 5) {
	// 	next();
	// }
	// res.send("Come back at 9:00am");
	next();
};

app.use(myLogger);

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("./dist/Images"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/services", (req, res) => {
	res.render("services", {
		image1: "/brooklyn-MO5qO9xpZhA-unsplash.jpg",
		image2: "/lucia-YYsz1qTnA50-unsplash.jpg",
		image3: "/pawel-czerwinski-xubOAAKUwXc-unsplash.jpg",
		image4: "/sam-moqadam-7Yl24ZUlrDE-unsplash.jpg",
		image5: "/steve-johnson-Xx_d26R37E4-unsplash.jpg",
		image6: "/christopher-gower-m_HRfLhgABo-unsplash.jpg",
	});
});

app.get("/contact", (req, res) => {
	res.render("contact");
});

app.listen(8088);
