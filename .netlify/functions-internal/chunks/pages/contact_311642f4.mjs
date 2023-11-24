function render({ slots: ___SLOTS___ }) {
		return `<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro About</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
	</head>
	<body>
		<h1>About</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis rem eaque magni delectus iste modi fugiat corrupti tenetur libero laboriosam, temporibus, itaque natus doloremque veniam tempora odit non hic optio.
		</p>
        <script>
            gsap.to('h1',{x: 500,duration:5});
            console.log('astro');
        </script>
	</body>

</html>
`
	}
render["astro:html"] = true;

export { render as default };
