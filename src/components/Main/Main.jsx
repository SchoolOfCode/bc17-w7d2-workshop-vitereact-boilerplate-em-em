export default function Main() {
	return (
		<>
			<main className="site-main grid">
				<section className="hero grid">
					<figure>
						<img
							src="images/hero-mobile.png"
							alt="Cosy, warm fireplace cartoon"
						/>
					</figure>
					<div className="hero-text">
						<h2>
							Discover the
							<br /> Perfect Fireplace...
						</h2>
						<p>
							Book consultation:
							<span>0121 345 6789</span>
						</p>
					</div>
				</section>
				<section className="how-it-works">
					<h2>How it works.</h2>
					<div className="card">
						<figure className="card-img">
							<img src="images/how-it-works-1.png" alt="" />
						</figure>
						<h3>Give us a call ...</h3>
						<p>
							Call us and book a &quot;Design Consultation&quot; on a date and
							time to suit you.
						</p>
					</div>
					<div className="card">
						<figure className="card-img">
							<img src="images/how-it-works-2.png" alt="" />
						</figure>
						<h3>We come to you ...</h3>
						<p>
							We come to your home to do an assessment of the space and to your
							style preference.
						</p>
					</div>
					<div className="card">
						<figure className="card-img">
							<img src="images/how-it-works-3.png" alt="" />
						</figure>
						<h3>We recommend ...</h3>
						<p>We send you a bespoke set of fireplace recommendations.</p>
					</div>
				</section>
			</main>
		</>
	);
}
