import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Sparkles,
  Camera,
  Martini,
  CalendarHeart,
  CheckCircle2,
} from "lucide-react";

const phoneNumber = "0502434055";
const whatsappNumber = "972502434055";

const cocktails = [
  {
    name: "בלו לאגון",
    desc: "קוקטייל כחול, מרענן ובולט בנראות שלו — קליל, קיצי ומושלם לאירועים שרוצים בהם צבע על הבר.",
    image: "/images/blue-lagoon.jpg",
  },
  {
    name: "וויסקי סאוור מעושן",
    desc: "וויסקי עשיר, חמיצות מדויקת, קצף קטיפתי ונגיעה מעושנת שמוסיפה רושם יוקרתי לכל לגימה.",
    image: "/images/whiskey-sour-smoked.jpg",
  },
  {
    name: "לולי פופ",
    desc: "קוקטייל טרופי וצבעוני עם פסיפלורה, ליצ׳י, אננס וכדורי טפיוקה בטעם למון גראס לחוויה מיוחדת וכיפית.",
    image: "/images/lollipop.jpg",
  },
  {
    name: "קומודו",
    desc: "קוקטייל ורוד, אלגנטי ומרענן עם אופי פירותי ונראות עדינה שמצטלמת מעולה באירועים.",
    image: "/images/komodo.jpg",
  },
];

const eventImages = [
  "/images/event-pouring.jpg",
  "/images/event-bar-main.jpg",
  "/images/event-menu-drinks.jpg",
  "/images/event-table.jpg",
  "/images/event-drinks-board.jpg",
  "/images/event-serving.jpg",
];

const services = [
  "בר קוקטיילים נייד לאירועים פרטיים",
  "קוקטיילים מעוצבים בהתאמה אישית",
  "עמדת בר מרשימה עם הגשה מקצועית",
  "קצפים, עשן, קישוטים וטעמים מיוחדים",
  "אפשרות לתפריט קוקטיילים ממותג לאירוע",
];

export default function App() {
  return (
    <main dir="rtl" className="site">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={20} />
        הזמנה בוואטסאפ
      </a>

      <section className="hero">
        <div className="hero-bg">
          <img src="/images/event-bar-main.jpg" alt="88 cocktail bar באירוע" />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-text"
          >
            <div className="eyebrow">
              <Sparkles size={16} />
              88 cocktail bar · בר קוקטיילים פרימיום לאירועים
            </div>

            <h1>
              88 cocktail bar
              <span>חוויית קוקטיילים שמרימה כל אירוע</span>
            </h1>

            <p>
              בר קוקטיילים נייד לאירועים פרטיים, חתונות, ימי הולדת ומסיבות —
              עם קוקטיילים מעוצבים, טעמים מיוחדים והגשה שנראית וואו בתמונות.
            </p>

            <div className="hero-buttons">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="btn primary"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                דברו איתנו בוואטסאפ
              </a>
              <a href={`tel:${phoneNumber}`} className="btn secondary">
                <Phone size={20} />
                {phoneNumber}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <div className="section-kicker">
            <Martini size={22} />
            <span>קוקטיילים נבחרים</span>
          </div>
          <h2>כמה טעימות מהבר שלנו</h2>
          <p>
            דוגמאות לקוקטיילים שאפשר לשלב באירוע — כל תפריט נבנה בהתאמה אישית
            לפי הסגנון, הקהל והאווירה.
          </p>
        </div>

        <div className="cocktail-grid">
          {cocktails.map((drink, index) => (
            <motion.article
              key={drink.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card cocktail-card"
            >
              <img src={drink.image} alt={drink.name} />
              <div>
                <h3>{drink.name}</h3>
                <p>{drink.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="features-grid">
          <div className="feature-card">
            <Martini size={34} />
            <h3>קוקטיילים בהתאמה אישית</h3>
            <p>תפריט קוקטיילים שנבנה לפי סוג האירוע, הקהל והאווירה שאתם רוצים ליצור.</p>
          </div>

          <div className="feature-card">
            <Sparkles size={34} />
            <h3>עמדת בר מרשימה</h3>
            <p>בר מעוצב, כוסות, קישוטים, קצפים, עשן והגשה שמוסיפה סטייל לכל תמונה באירוע.</p>
          </div>

          <div className="feature-card">
            <CalendarHeart size={34} />
            <h3>חוויה לאורחים</h3>
            <p>שירות אישי, אנרגיה טובה וקוקטיילים שנראים טוב, מצטלמים טוב ונשארים בזיכרון.</p>
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="section inner">
          <div className="section-title">
            <div className="section-kicker">
              <Camera size={22} />
              <span>גלריית אירועים</span>
            </div>
            <h2>רגעים מאירועים שכבר הרמנו</h2>
            <p>
              תמונות אמיתיות מהבר, מהאווירה ומההגשה — כדי שאנשים יבינו ישר איך
              האירוע שלהם יכול להיראות.
            </p>
          </div>

          <div className="events-grid">
            {eventImages.map((image, index) => (
              <motion.img
                key={image}
                src={image}
                alt={`תמונה מאירוע של 88 cocktail bar ${index + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div>
          <div className="section-kicker">
            <CalendarHeart size={22} />
            <span>מה אנחנו מציעים</span>
          </div>
          <h2>בר שמוסיף סטייל, טעם ואווירה</h2>
          <p>
            אנחנו לא רק מוזגים משקאות — אנחנו יוצרים נקודת עניין באירוע. כל
            קוקטייל מקבל נראות מדויקת, טעם מאוזן והגשה שמצטלמת מעולה.
          </p>
        </div>

        <div className="service-box">
          <ul>
            {services.map((service) => (
              <li key={service}>
                <CheckCircle2 size={22} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta">
          <h2>רוצים לסגור בר קוקטיילים לאירוע?</h2>
          <p>
            שלחו הודעה עם תאריך, כמות אנשים וסוג האירוע — ונבנה לכם חוויה
            שמתאימה בדיוק לאירוע שלכם.
          </p>
          <div className="hero-buttons center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="btn primary"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} />
              שליחת הודעה עכשיו
            </a>
            <a href={`tel:${phoneNumber}`} className="btn secondary">
              <Phone size={20} />
              התקשרו: {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
