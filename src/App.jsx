import { useEffect, useMemo, useState } from "react";
import "./App.css";

const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: "Ada Lovelace",
        phone: "(555) 010-0101",
        email: "ada@example.com",
    },
    {
        id: 2,
        name: "Alan Turing",
        phone: "(555) 010-0102",
        email: "alan@example.com",
    },
    {
        id: 3,
        name: "Grace Hopper",
        phone: "(555) 010-0103",
        email: "grace@example.com",
    },
];

const App = () => {
    const [contacts, setContacts] = useState(FALLBACK_CONTACTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {}, []);

    const [query, setQuery] = useState("");

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    function handleSubmit(e) {
        e.preventDefault();
        // Add contact submission logic here
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <h1 className="page__title">Phonebook Challenge</h1>
                <p className="page__subtitle">Build a simple contact directory</p>
            </header>

            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading">Search Contacts</h2>
                <div className="search__controls">
                    <label htmlFor="search-input">Search</label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search by name or phone"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        data-testid="search-input"
                    />
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
                    {loading ? " (loading...)" : ""}
                    {error ? ` (error: ${error})` : ""}
                </p>
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Contacts</h2>
                <div className="contacts__grid">
                    <div className="contact-card">
                    <img src="src/contactpics/bruce_wayne.jpg" alt="Bruce Wayne"></img>
                    <h3>Bruce Wayne</h3>
                    <p>(212) 555-0101</p>
                    <p>bruce.wayne@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/clark_kent.jpg" alt="Clark Kent"></img>
                    <h3>Clark Kent</h3>
                    <p>(646) 555-0112</p>
                    <p>clark.kent@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/diana_prince.jpg" alt="Diana Prince"></img>
                    <h3>Diana Prince</h3>
                    <p>(202) 555-0123</p>
                    <p>diana.prince@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/barry_allen.jpg" alt="Barry Allen"></img>
                    <h3>Barry Allen</h3>
                    <p>(816) 555-0147</p>
                    <p>barry.allen@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/arthur_curry.jpg" alt="Arthur Curry"></img>
                    <h3>Arthur Curry</h3>
                    <p>(207) 555-0168</p>
                    <p>arthur.curry@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/hal_jordan.jpg" alt="Hal Jordan"></img>
                    <h3>Hal Jordan</h3>
                    <p>(415) 555-0188</p>
                    <p>hal.jordan@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/victor_stone.jpg" alt="Victor Stone"></img>
                    <h3>Victor Stone</h3>
                    <p>(313) 555-0199</p>
                    <p>victor.stone@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/oliver_queen.jpg" alt="Oliver Queen"></img>
                    <h3>Oliver Queen</h3>
                    <p>(206) 555-0129</p>
                    <p>oliver.queen@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/dinah_drake.jpg" alt="Dinah Drake"></img>
                    <h3>Dinah Drake</h3>
                    <p>(657) 555-0177</p>
                    <p>dinah.drake@justiceleague.org</p>
                    </div>
                    <div className="contact-card">
                    <img src="src/contactpics/john_constantine.jpg" alt="John Constantine"></img>
                    <h3>John Constantine</h3>
                    <p>(215) 555-0135</p>
                    <p>john.con@justiceleague.org</p>
                    </div>
                </div>
            </section>

            <section className="form" aria-labelledby="form-heading">
                <h2 id="form-heading">Add a Contact</h2>
                <form className="form__body" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            minLength={2}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            inputMode="tel"
                            placeholder="(555) 555-5555"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="form__actions">
                        <button className="btn" type="submit" data-testid="btn-add">
                            Add Contact
                        </button>
                    </div>
                </form>
            </section>

            <footer className="page__footer">
                <small>
                    Starter provided. Complete tasks per README and make this page
                    shine.
                </small>
            </footer>
        </main>
    );
};

export default App;
