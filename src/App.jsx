import { useEffect, useMemo, useState } from "react";
import "./App.css";

const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: "Bruce Wayne",
        phone: "(212) 555-0101",
        email: "bruce.wayne@justiceleague.org",
        img: "contactpics/bruce_wayne.jpg",
        theme: "contact--batman",
    },
    {
        id: 2,
        name: "Clark Kent",
        phone: "(646) 555-0112",
        email: "clark.kent@justiceleague.org",
        img: "contactpics/clark_kent.jpg",
        theme: "contact--superman",
    },
    {
        id: 3,
        name: "Diana Prince",
        phone: "(202) 555-0123",
        email: "diana.prince@justiceleague.org",
        img: "contactpics/diana_prince.jpg",
        theme: "contact--wonderwoman",
    },
    {
        id: 4,
        name: "Barry Allen",
        phone: "(816) 555-0147",
        email: "barry.allen@justiceleague.org",
        img: "contactpics/barry_allen.jpg",
        theme: "contact--flash",
    },
    {
        id: 5,
        name: "Arthur Curry",
        phone: "(207) 555-0168",
        email: "arthur.curry@justiceleague.org",
        img: "contactpics/arthur_curry.jpg",
        theme: "contact--aquaman",
    },
    {
        id: 6,
        name: "Hal Jordan",
        phone: "(415) 555-0188",
        email: "hal.jordan@justiceleague.org",
        img: "contactpics/hal_jordan.jpg",
        theme: "contact--greenlantern",
    },
    {
        id: 7,
        name: "Victor Stone",
        phone: "(313) 555-0199",
        email: "victor.stone@justiceleague.org",
        img: "contactpics/victor_stone.jpg",
        theme: "contact--cyborg",
    },
    {
        id: 8,
        name: "Oliver Queen",
        phone: "(206) 555-0129",
        email: "oliver.queen@justiceleague.org",
        img: "contactpics/oliver_queen.jpg",
        theme: "contact--greenarrow",
    },
    {
        id: 9,
        name: "Dinah Drake",
        phone: "(657) 555-0177",
        email: "dinah.drake@justiceleague.org",
        img: "contactpics/dinah_drake.jpg",
        theme: "contact--blackcanary",
    },
    {
        id: 10,
        name: "John Constantine",
        phone: "(215) 555-0135",
        email: "john.con@justiceleague.org",
        img: "contactpics/john_constantine.jpg",
        theme: "contact--constantine",
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

    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 1;

    const totalPages = Math.max(1, Math.ceil(contacts.length / PAGE_SIZE));
    const start = (currentPage - 1) * PAGE_SIZE;
    const end   = Math.min(start + PAGE_SIZE, contacts.length);
    const pageSlice = contacts.slice(start, end);

    function goPrev() { setCurrentPage(p => Math.max(1, p - 1)); }
    function goNext() { setCurrentPage(p => Math.min(totalPages, p + 1)); }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <img src="/watchtowerlogo.png" alt="Watchtower Logo" />
                <div>
                    <h1 className="page__title">Watchtower Directory</h1>
                    <p className="page__subtitle">Justice League contacts across systems</p>
                </div>
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

            <section className="contacts contacts--single" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Contacts</h2>
                <div className="contacts__grid">
                    {pageSlice.map((c) => (
                        <div key={c.id} className={`contact-card contact-card--xl ${c.theme ?? ""}`}>
                        {c.img ? <img src={c.img} alt={c.name} /> : null}
                        <div className="contact-card__details">
                            <h3>{c.name}</h3>
                            <p className="contact-card__phone">{c.phone}</p>
                            <p className="contact-card__email">{c.email}</p>
                        </div>
                        </div>
                    ))}
                </div>

                <div className="toolbar" style={{ marginTop: "1.5rem" }}>
                    <button className="btn" onClick={goPrev} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button className="btn" onClick={goNext} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>

                <div className="pager__progress" aria-hidden="true">
                    <div className="pager__progress-bar" style={{ width: `${(currentPage / totalPages) * 100}%` }} />
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
