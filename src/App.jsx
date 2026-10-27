import React, { useState } from "react";

const books = [
  {
    id: 1,
    title: "The Lantern Keeper",
    author: "Marika Solberg",
    price: "$18.00",
    cover: "/covers/lantern-keeper.svg",
    description:
      "A quiet coastal mystery about memory, tides, and the light we keep for others.",
  },
  {
    id: 2,
    title: "Atlas of Small Gardens",
    author: "Priya Nandakumar",
    price: "$22.50",
    cover: "/covers/small-gardens.svg",
    description:
      "Illustrated essays on growing food, patience, and belonging in unlikely places.",
  },
  {
    id: 3,
    title: "Signal & Static",
    author: "Devon Alvarez",
    price: "$16.75",
    cover: "/covers/signal-static.svg",
    description:
      "Three friends rebuild a radio tower and rediscover a town they thought they knew.",
  },
];

function CartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    if (email.trim() === "") {
      return;
    }
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">AP</span>
            <span className="brand-name">AccessPilot Store</span>
          </a>

          <nav className="main-nav" aria-label="Primary">
            <a href="#featured">Featured</a>
            <a href="#new">New Releases</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-actions">
            <button className="icon-button" aria-label="Shopping cart">
              <CartIcon />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <h1 className="hero-title">
              Stories worth slowing down for
            </h1>
            <p className="hero-subtitle">
              A hand-picked independent bookstore. Free shipping on orders over
              $35, and a real bookseller reply on every order.
            </p>
            <a className="button primary" href="#featured">
              Browse the collection
            </a>
          </div>
        </section>

        <section id="featured" className="featured">
          <div className="container">
            <div className="section-heading">
              <h2>Featured this month</h2>
              <p className="section-lead">
                Three staff picks our readers keep coming back for.
              </p>
            </div>

            <div className="book-grid">
              {books.map((book) => (
                <article className="book-card" key={book.id}>
                  <div className="book-cover">
                    <img src={book.cover} alt={`Cover for ${book.title}`} />
                  </div>
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-desc">{book.description}</p>
                    <div className="book-footer">
                      <span className="book-price">{book.price}</span>
                      <button className="button small">Add to cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="new" className="newsletter">
          <div className="container newsletter-inner">
            <h2>Get the weekly shelf</h2>
            <p className="newsletter-lead">
              One email each Friday with new arrivals and a short review. No
              spam, unsubscribe any time.
            </p>

            <div className="newsletter-form">
              <input
                className="newsletter-input"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="newsletter-submit" onClick={handleSubscribe}>
                Subscribe
              </div>
            </div>

            {subscribed && (
              <p className="newsletter-success" role="status">
                Thanks! This demo does not store your address.
              </p>
            )}
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-inner">
            <h2>About the shop</h2>
            <p>
              AccessPilot Store is a demo storefront used to test accessibility
              remediation tooling. It is intentionally imperfect and collects no
              personal data.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand">AccessPilot Demo Store</p>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#featured">Featured</a>
            <a href="#top">Back to top</a>
          </nav>
          <p className="footer-note">
            Demo only. No real payments and no user data collected.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
