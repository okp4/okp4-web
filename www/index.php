<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>OKP4</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=Archivo:wght@400;600&family=DM+Sans:wght@400;500;700;800">
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
			
			<div class="bg__illus" style="background-image: url('./assets/illus-landing.png')">
			</div>
		</div>

		<div class="landing__text">
			<h1><span>THE ULTIMATE</span><span class="stars"><?php include './assets/stars.svg' ?></span><br><span>coordination protocol</span></h1>
			<span class="subtitle">OKP4 is an ever-expanding universe of applications powered by shared digital resources.</span>
		</div>

		<div class="landing__bottom">
			<img src="./assets/bottom-landing.png" alt="">
		</div>
	</section>

	<section class="pushs">

		<div class="gradients">
			<div class="gradient__right"></div>
			<div class="gradient__left"></div>
		</div>

		<div class="container">
			<h2>All obstacles to data sharing are <span class="underline" >removed.<span data-reveal-custom="1"><?php include './assets/underline.svg' ?></span></span></h2>
			<div class="intro" data-reveal="3" data-text="3">
				<p class="up">OKP4 is <strong>the only public layer-1 blockchain</strong> designed for coordination of digital assets such as datasets, algorithms, software, storage or computation. Anyone can build and join custom Data Spaces where rules are shared and value flows between participants.</p>
				<p class="featured">Let’s build amazing things together!</p>
			</div>

			<div class="subgrid col3">
				<div class="item" data-reveal="1">
					<img src="./assets/illus/item1.png" alt="">
					<p>Easy to build Data Spaces and Applications</p>
				</div>
				<div class="item" data-reveal="2">
					<img src="./assets/illus/item1.png" alt="">
					<p>Built-in trust and minimized technical costs</p>
				</div>
				<div class="item" data-reveal="3">
					<img src="./assets/illus/item1.png" alt="">
					<p>Aligning all stakeholders interests</p>
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
						<h4>Technology at its best</h4>
						<p>OKP4 has decided to build its own L1 blockchain using COSMOS technology.</p>
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
						<h4>Our exclusive token : $KNOW</h4>
						<p>Transactions performed on OKP4, PoS consensus and governance will be based on the $KNOW token. Many B2B use cases are ready to be launched, more community use cases will be built when the Testnet launches.</p>
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
						<img src="./assets/illus/item1.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Blockchain.</h3>
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
						<img src="./assets/illus/item1.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Dataverse.</h3>
						<p>The ever-extanding universe comprised of all the Datasets, Algorithms,  Softwares, Infrastructures and other resources referenced in the Blockchain and shared within multiple Data Spaces.</p>
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
						<img src="./assets/illus/item1.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Development Kit.</h3>
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
						<img src="./assets/illus/item1.png" alt="">
					</div>

					<div class="text">
						<div class="label"><span>OKP4</span></div>
						<h3>Dataverse Gateways.</h3>
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
				<h2>On our way to lorem ipsum<span class="stars" data-reveal="1" data-text="1"><?php include './assets/stars.svg' ?></span></h2>
				<p class="up" data-reveal="1" data-text="1">OKP4 is a blockchain built for the coordination of digital resources.<br>This is is the only blockchain where <strong>developers can find the perfect environment</strong> to build a new generation of applications based on digital resources (datasets, algorithms, storage, computation…) <strong>shared by participants</strong> (communities and businesses).</p>
			</div>

			<div class="roadmap__items">

				<div class="roadmap__item is-reset is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title">— Genesis <span class="subtitle"></span></h3>
							<div class="label"><span>2018-2022</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">After more than two years of research and development using the Cosmos SDK as a starting point, OKP4 launched its Nemeton Public Testnet on the 17th of October, 2022.</p>
								<p>The Nemeton era is the bootstrapping era. This is when the ideas & concepts are expressed to the public. This is when the first validators join together to power the network, test its limits and contribute to its developments. This is when the first builders come to explore Data Space possibilities and opportunities for them and their communities. This is where the community unites around the vision of a new generation of applications enabled by trust-minimized sharing of digital resources.<br>The Nemeton era will result in a stable, battle-tested environment and will give birth to the OKP4 mainnet.</p>
							</div>
							<div class="illus"><img src="./assets/illus/item1.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title willGoLeft">— Nemeton <span class="subtitle">Testnet</span></h3>
							<div class="label willGoRight"><span>Q4 2022 – Q2 2022</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text willGoLeft">
								<p class="up">After more than two years of research and development using the Cosmos SDK as a starting point, OKP4 launched its Nemeton Public Testnet on the 17th of October, 2022.</p>
								<p>The Nemeton era is.<br>The Nemeton era will result in a stable, battle-tested environment and will give birth to the OKP4 mainnet.</p>
							</div>
							<div class="illus willGoRight"><img src="./assets/illus/item1.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title">— Mainnet <span class="subtitle">X</span></h3>
							<div class="label"><span>Q3 2022</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">After more than two years of research and development using the Cosmos SDK as a starting point, OKP4 launched its Nemeton Public Testnet on the 17th of October, 2022.</p>
								<p>The Nemeton era is the bootstrapping era. This is when the ideas & concepts are expressed to the public. This is when the first validators join together to power the network, test its limits and contribute to its developments. This is when the first builders come to explore Data Space possibilities and opportunities for them and their communities. This is where the community unites around the vision of a new generation of applications enabled by trust-minimized sharing of digital resources.<br>The Nemeton era will result in a stable, battle-tested environment and will give birth to the OKP4 mainnet.</p>
							</div>
							<div class="illus"><img src="./assets/illus/item1.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title">— Adoption <span class="subtitle">Y</span></h3>
							<div class="label"><span>Q2 2023</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">After more than two years of research and development using the Cosmos SDK as a starting point, OKP4 launched its Nemeton Public Testnet on the 17th of October, 2022.</p>
								<p>The Nemeton era is the bootstrapping era. This is when the ideas & concepts are expressed to the public. This is when the first validators join together to power the network, test its limits and contribute to its developments. This is when the first builders come to explore Data Space possibilities and opportunities for them and their communities. This is where the community unites around the vision of a new generation of applications enabled by trust-minimized sharing of digital resources.<br>The Nemeton era will result in a stable, battle-tested environment and will give birth to the OKP4 mainnet.</p>
							</div>
							<div class="illus"><img src="./assets/illus/item1.png" alt=""></div>
						</div>
					</div>
				</div>

				<div class="roadmap__item is-reset is-coming is-active">
					<div class="roadmap__item-container">
						<div class="header willGoDown">
							<h3 class="title">— Colonization <span class="subtitle">Z</span></h3>
							<div class="label"><span>Q1 2024</span></div>
						</div>
						<div class="body willGoDown">
							<div class="text">
								<p class="up">After more than two years of research and development using the Cosmos SDK as a starting point, OKP4 launched its Nemeton Public Testnet on the 17th of October, 2022.</p>
								<p>The Nemeton era is the bootstrapping era. This is when the ideas & concepts are expressed to the public. This is when the first validators join together to power the network, test its limits and contribute to its developments. This is when the first builders come to explore Data Space possibilities and opportunities for them and their communities. This is where the community unites around the vision of a new generation of applications enabled by trust-minimized sharing of digital resources.<br>The Nemeton era will result in a stable, battle-tested environment and will give birth to the OKP4 mainnet.</p>
							</div>
							<div class="illus"><img src="./assets/illus/item1.png" alt=""></div>
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
				<h2>News & documentations</h2>
				<p class="up">Join our community of developers and creators connected all over the world, proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
			</div>
			<div class="right">

				<a href="/" class="item__bg bg--dark" data-reveal="1" data-text="1">
					<h4>Whitepaper & documentation</h4>
					<span class="arrow"><?php include './assets/arrowtr.svg' ?></span>
					<p>We give you access to all the technical informations to understand what is OKP4 and what is it for.</p>
				</a>

				<a href="/" class="item__bg bg--violet" data-reveal="1" data-text="1"> 
					<h4>Our blog</h4>
					<span class="arrow"><?php include './assets/arrowtr.svg' ?></span>
					<p>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
				</a>

				<div class="item__icon" data-reveal="1" data-text="1">
					<div class="icon"><?php include './assets/socials/github.svg' ?></div>
					<div class="text">
						<h4>Github for lorem ipsum sit<span class="arrow"><?php include './assets/arrowtr.svg' ?></span></h4>
							<p>The data sharing infrastructure of tomorrow and the associated trillion-dollar-industry lorem ipsum.</p>
					</div>
				</div>

				<div class="item__icon" data-reveal="1" data-text="1">
					<div class="icon"><?php include './assets/socials/discord.svg' ?></div>
					<div class="text">
						<h4>Discord for lorem ipsum sit<span class="arrow"><?php include './assets/arrowtr.svg' ?></span></h4>
							<p>Have technical questions about Cosmos tools?<br>Ask a developer on the Community Discord.</p>
					</div>
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