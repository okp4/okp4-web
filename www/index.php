<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>OKP4</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=Archivo:wght@300;400;600&family=DM+Sans:wght@400;500;700;800">
	<link rel="stylesheet" href="./assets/index.css">
	<script type="text/javascript" src="./assets/index.js"></script>
</head>
<body>

	<header class="mainHeader">
		<div class="bg"></div>
		<div class="mainHeader--container">
			<a class="logo" href="./assets/logo-white">
				<?php include './assets/logo-white.svg' ?>
			</a>
			<a href="" class="cta whitepaper"><span class="text">Whitepaper</span><span class="icon"><?php include './assets/arrowtr.svg' ?></span></a>
			<div class="socials">
				<a href="" class="social__item"><?php include './assets/socials/linkedin.svg' ?></a>
				<a href="" class="social__item"><?php include './assets/socials/twitter.svg' ?></a>
				<a href="" class="social__item"><?php include './assets/socials/github.svg' ?></a>
				<a href="" class="social__item"><?php include './assets/socials/medium.svg' ?></a>
				<a href="" class="social__item"><?php include './assets/socials/discord.svg' ?></a>
				<a href="" class="social__item"><?php include './assets/socials/telegram.svg' ?></a>
			</div>
			<a href="" class="cta cta--btn"><span class="text">Discover the Nemeton program</span><span class="icon"><?php include './assets/arrowtr.svg' ?></span></a>
		</div>
	</header>

	<section class="landing">

		<div class="landing__bg">
			<div class="bg--grain">
				<div class="flat"></div>
				<div class="grain"></div>
			</div>

			<div class="hoverLanding">
				<div class="haloLanding"></div>
			</div>
			
			<div class="bg__illus" style="background-image: url('./assets/illus-landing.png')"data-parallax-landing="1" data-parallax-already="1" data-parallax-end="500">
			</div>
		</div>

		<div class="landing__text">
			<h1><span class="revealContainer" data-reveal-custom="1"><span>THE ULTIMATE</span></span><span class="stars" data-reveal-custom="1"><?php include './assets/stars.svg' ?></span><br><span class="revealContainer" data-reveal-custom="2"><span>coordination protocol</span></span></h1>
			<span class="subtitle" data-reveal-custom="1">OKP4 is an ever-expanding universe of applications powered by shared digital resources.</span>
		</div>

		<div class="landing__bottom" data-reveal-custom="1">
			<img src="./assets/bottom-landing.png" alt="" data-parallax-landing="1" data-parallax-already="0" data-parallax-end="70">
		</div>
	</section>

	<section class="pushs">

		<div class="gradients">
			<div class="gradient__right"></div>
			<div class="gradient__left"></div>
		</div>

		<div class="container">
			<h2>New opportunities for every digital <span class="underline" >ressource.<span data-reveal-custom="1"><?php include './assets/underline.svg' ?></span></span></h2>
			<div class="intro" data-reveal="3" data-text="3">
				<p class="up">OKP4 is <strong>the only public layer-1 blockchain</strong> designed for coordination of digital assets such as datasets, algorithms, software, storage or computation. Anyone can build and join custom <a href="/" class="cta"><span class="text">Data Spaces</span><span class="icon"><?php include './assets/arrowtr.svg' ?></span></a> where rules are shared and value flows between participants.</p>
				<p class="featured">Let’s build amazing things together!</p>
			</div>

			<div class="subgrid col3">
				<div class="item" data-reveal="1">
					<img src="./assets/illus/item1.png" alt="">
					<p>Easy to build Data Spaces and Applications</p>
				</div>
				<div class="item" data-reveal="2">
					<img src="./assets/illus/item2.png" alt="">
					<p>Built-in trust and custom governance</p>
				</div>
				<div class="item" data-reveal="3">
					<img src="./assets/illus/item3.png" alt="">
					<p>Optimal incentives for collaboration</p>
				</div>
			</div>

			<div class="subgrid col2">

				<div class="cosmos" data-reveal="1">
					<div class="bg--grain">
						<div class="flat"></div>
						<div class="grain"></div>
					</div>
					<div class="illus"><?php include './assets/illus/cosmos.svg' ?></div>
					<div class="text">
						<h4>Built on the Cosmos SDK</h4>
						<p>A smart contract hub specifically designed for Data Spaces..</p>
					</div>
				</div>

				<div class="simplicity" data-reveal="1">
					<div class="bg--grain">
						<div class="flat"></div>
						<div class="grain"></div>
					</div>
					<div class="text">
						<h4>Simplicity and transparency</h4>
						<p>Decentralization guarantees sovereignity of shared data and services, trustlessness, transparency, easy managment and customization of governance rules.</p>
					</div>
				</div>


				<div class="know" data-reveal="2">
					<div class="bg--grain">
						<div class="flat"></div>
						<div class="grain"></div>
					</div>
					<div class="illus"><?php include './assets/illus/know.svg' ?></div>
					<div class="text">
						<h4>Powered by the KNOW token</h4>
						<p>Incentives & value flows for the many use cases are enabled by the $KNOW. Many B2B use cases are ready to be launched, more community use cases will be built when the Testnet launches.</p>
					</div>
				</div>

			</div>

			<div class="video" data-reveal="1">
				<video>
					<source src="./assets/video.mp4" type="video/mp4">
				</video>
				<div class="bg playVideo">
					<div class="flat"></div>
					<?php include './assets/play.svg' ?>
				</div>
			</div>

		</div>
	</section>

	<section class="universe">
		<div class="container">
			<h2>Enter in the OKP4 <span class="outerline">universe<span data-reveal-custom="1"><?php include './assets/outerline.svg' ?></span></span></h2>
			
			<div class="subgrid universe__items">

				<div class="universe__item" data-reveal="1">
					<div class="bg--grain">
						<div class="flat"></div>
						<div class="grain"></div>
					</div>
					<div class="slider">
						<div class="slider__item active"></div>
						<div class="slider__item"></div>
						<div class="slider__item"></div>
						<div class="slider__item"></div>
					</div>

					<div class="illus" data-parallax="-60" data-reveal-custom="1">
						<img src="./assets/illus/universe1.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Blockchain</h3>
						<p>The first blockchain designed for digital assets sharing & coordination.</p>
					</div>
				</div>

				<div class="universe__item" data-reveal="2">
					<div class="bg--grain">
						<div class="flat"></div>
						<div class="grain"></div>
					</div>
					<div class="slider">
						<div class="slider__item"></div>
						<div class="slider__item active"></div>
						<div class="slider__item"></div>
						<div class="slider__item"></div>
					</div>

					<div class="illus" data-parallax="-90" data-reveal-custom="1">
						<img src="./assets/illus/universe2.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Dataverse</h3>
						<p>The ever-extanding universe comprised of all the Datasets, Algorithms, Softwares, Infrastructures and other resources referenced in the Blockchain and shared within multiple Data Spaces.</p>
					</div>
				</div>

				<div class="universe__item" data-reveal="1">
					<div class="bg--grain">
						<div class="flat"></div>
						<div class="grain"></div>
					</div>
					<div class="slider">
						<div class="slider__item"></div>
						<div class="slider__item"></div>
						<div class="slider__item active"></div>
						<div class="slider__item"></div>
					</div>

					<div class="illus" data-parallax="-60" data-reveal-custom="1">
						<img src="./assets/illus/universe3.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Development Kit</h3>
						<p>Tools and services dedicated to developers to create their own apps using the OKP4 protocol.</p>
					</div>
				</div>

				<div class="universe__item" data-reveal="2">
					<div class="bg--grain">
						<div class="flat"></div>
						<div class="grain"></div>
					</div>
					<div class="slider">
						<div class="slider__item"></div>
						<div class="slider__item"></div>
						<div class="slider__item"></div>
						<div class="slider__item active"></div>
					</div>

					<div class="illus" data-parallax="-90" data-reveal-custom="1">
						<img src="./assets/illus/universe4.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Dataverse Gateways</h3>
						<p>OKP4 Dataverse Gateways enable anyone to interact with, build into, share and contribute and earn from the Dataverse.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="gradient__roadmap"></div>

	<section class="roadmap">
		<!-- <div class="gradient"></div> -->
		<div class="door"></div>

		<div class="container">
			<div class="intro">
				<div class="label"><span>ROADMAP</span></div>
				<h2>The next era for the knowledge economy<span class="stars" data-reveal="1" data-text="1"><?php include './assets/stars.svg' ?></span></h2>
				<p class="up" data-reveal="1" data-text="1">OKP4 is a blockchain built for the coordination of digital resources.<br>This is is the only blockchain where <strong>developers can find the perfect environment</strong> to build a new generation of applications based on digital resources (datasets, algorithms, storage, computation…) <strong>shared by participants</strong> (communities and businesses).</p>
			</div>

			<div class="roadmap__items">

				<div class="roadmap__item is-reset is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title"><span class="indicator">—</span> Genesis <span class="subtitle"></span></h3>
							<div class="label"><span>2018-2022</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">The story began in 2018 with a vision of addressing the two main issues relating to data sharing: lack of trust and lack of interest alignment between participants.</p>
								<p>It led to the first B2B use cases with OKP4 Company as a centralized coordinator to experiment with the many governance rules and refine our value proposition. After two years of experimentation, we were ready to work on decentralization. Realizing there was no decentralized network specifically designed for such use cases, we quickly concluded that we needed to create our own specific and sovereign blockchain. This was when we chose the Cosmos SDK.</p>
							</div>
							<div class="illus"><img src="./assets/illus/roadmap1.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title willGoLeft"><span class="indicator">—</span> Nemeton <span class="subtitle">Testnet</span></h3>
							<div class="label willGoRight"><span>Q4 2022 – Q2 2022</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text willGoLeft">
								<p class="up">After more than two years of research and development using the Cosmos SDK as a starting point, OKP4 launched its Nemeton Public Testnet on the 17th of October, 2022.</p>
								<p>The Nemeton era is the bootstrapping era. This is when the ideas & concepts are expressed to the public. This is when the first validators join together to power the network, test its limits and contribute to its developments. This is when the first builders come to explore Data Space possibilities and opportunities for them and their communities. This is where the community unites around the vision of a new generation of applications enabled by trust-minimized sharing of digital resources.<br>The Nemeton era will result in a stable, battle-tested environment and will give birth to the OKP4 mainnet.</p>
							</div>
							<div class="illus willGoRight"><img src="./assets/illus/roadmap2.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title"><span class="indicator">—</span> Mirdin <span class="subtitle">Mainnet</span></h3>
							<div class="label"><span>Q3 2022</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">The X era begins with the first iteration of our mainnet: a stable decentralized network ready to host many Data Spaces and Applications. The X era focuses on making OKP4 as easy to use as possible while being highly generic and customizable.</p>
								<p>This environment is powered by a network of nodes operated by the community, which is economically secured through a sound, scarce and publicly traded $KNOW token. The community of builders deploys many existing or innovative governance rules for Data Spaces publicly for the first time, enabling new mechanisms to align interests among participants (data providers, services providers, users...)<br>The community of token holders and validators takes control, through governance proposals and votes, of the reins of the network. The incentives schemes enable the onboarding of many community members across all roles.<br>The X era also sees the first generation of IBC channels enabling tokens to flow to and from the interchain, and the emergence of the first proto-interchain applications.At the end of the X era, impactful business & community powered-applications emerged, and the community has grown tremendously due to the many opportunities offered to them. The robust OKP4 SDK and Dataverse Gateways bring us into the next era: Y.</p>
							</div>
							<div class="illus"><img src="./assets/illus/roadmap3.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title"><span class="indicator">—</span> Duir <span class="subtitle">Adoption</span></h3>
							<div class="label"><span>Q2 2023</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">Unlike the X era, which started at a single point in time when the mainnet launched, the transition to Y happened gradually.</p>
								<p>While X was focused on building the infrastructure, the Y era is now focused on adoption. With each release relating to the SDK, the Dataverse Gateways or the governance templates, new opportunities emerged for builders, data & service providers and users. The Y era is the climax of adoption due to the easiness and straightforwardness of building and onboarding communities.<br>The Dataverse reaches a critical network effect: the many datasets and services available provide unprecedented opportunities for builders and becomes a significant go-to-market fo data & services providers. An ecosystem of Data Space governance tokens emerges, providing healthy competition between them and steering open innovation to the next level.Real-life use cases and value flows into the network and the OKP4 public good continues to grow.</p>
							</div>
							<div class="illus"><img src="./assets/illus/roadmap4.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title"><span class="indicator">—</span> Lugh <span class="subtitle">Colonization</span></h3>
							<div class="label"><span>Q1 2024</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">The Z era is the expression of the unstoppable nature of OKP4s design.</p>
								<p> Inter-blockchain communication is now the norm and OKP4 is interoperable with every meaningful network to access any kind of datasets and services (decentralized storage, decentralized computation...),onboard communities from other chains easily, and seamless interchain applications.<br>Due to OKP4 first-mover advantage and significant network effect reached, OKP4 becomes the default coordination layer for most applications based on distributed resources.Thousands of projects and teams across the web2 and web3 worlds are building on OKP4: it has reached mass adoption.</p>
							</div>
							<div class="illus"><img src="./assets/illus/roadmap5.png" alt=""></div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</section>


	<!-- <div class="gradient--news">
		<div class="gradient"></div>
	</div> -->

	<section class="news">
		<div class="gradient--container">
			<div class="gradient"></div>
		</div>
		<div class="container">
			<div class="left">
				<h2>News & Docs</h2>
				<p class="up">Join our community of developers, data & service providers, users and businesses focused on building the next generation of applications.</p>
			</div>
			<div class="right">

				<a href="/" class="item__bg bg--dark" data-reveal="1" data-text="1">
					<h4>Whitepaper & documentation</h4>
					<span class="arrow"><?php include './assets/arrowtr.svg' ?></span>
					<p>Eager to understand OKP4 and join the community? Read our docs here.</p>
				</a>

				<a href="/" class="item__bg bg--violet" data-reveal="1" data-text="1"> 
					<h4>Our blog</h4>
					<span class="arrow"><?php include './assets/arrowtr.svg' ?></span>
					<p>Follow the latest content and publications on the OKP4 blog.</p>
				</a>

				<div class="item__icons">
					<a href="/" class="item__icon" data-reveal="1" data-text="1">
						<div class="icon"><?php include './assets/socials/github.svg' ?></div>
						<div class="text">
							<h4>Github<span class="arrow"><?php include './assets/arrowtr.svg' ?></span></h4>
								<!-- <p>The data sharing infrastructure of tomorrow and the associated trillion-dollar-industry lorem ipsum.</p> -->
						</div>
					</a>

					<a href="/" class="item__icon" data-reveal="2" data-text="1">
						<div class="icon"><?php include './assets/socials/discord.svg' ?></div>
						<div class="text">
							<h4>Discord<span class="arrow"><?php include './assets/arrowtr.svg' ?></span></h4>
								<!-- <p>Have technical questions about Cosmos tools?<br>Ask a developer on the Community Discord.</p> -->
						</div>
					</a>
				</div>

			</div>
			<div class="bottom">
				<p class="cofunded">Our actions are co-funded by</p>
				<div class="founders">
					<div class="founder__item">
						<img src="./assets/partenaires/occitanie.png" alt="">
					</div>
					<div class="founder__item">
						<img src="./assets/partenaires/bpi.png" alt="">
					</div>
					<div class="founder__item">
						<img src="./assets/partenaires/bretagne.png" alt="">
					</div>
				</div>
			</div>
		</div>

	</section>

	<footer class="mainFooter">
		<!-- <div class="gradient--container">
			<div class="gradient"></div>
		</div> -->
		
		<div class="mainFooter--container" data-reveal="1">
		
			<div class="footer__bg">
				<div class="bg--grain">
					<div class="flat"></div>
					<div class="grain"></div>
				</div>
				
				<div class="bg__illus" style="background-image: url('./assets/illus-landing.png')">
				</div>
			</div>

			<div class="footer__content">
				<a href="" class="cta cta--btn"><span class="text">Let's Get In Touch</span><span class="icon"><?php include './assets/arrowtr.svg' ?></span></a>

				<p class="featured">Follow our adventures and <b>stay up to date</b> !</p>
				<div class="newsletter"></div>

				<div class="socials">
					<a href="" class="social__item"><?php include './assets/socials/linkedin.svg' ?></a>
					<a href="" class="social__item"><?php include './assets/socials/twitter.svg' ?></a>
					<a href="" class="social__item"><?php include './assets/socials/github.svg' ?></a>
					<a href="" class="social__item"><?php include './assets/socials/medium.svg' ?></a>
					<a href="" class="social__item"><?php include './assets/socials/discord.svg' ?></a>
					<a href="" class="social__item"><?php include './assets/socials/telegram.svg' ?></a>
				</div>
			</div>

		</div>

		<a href="/" class="legals">Legals & GDPR</a>

	</footer>
</body>
</html>