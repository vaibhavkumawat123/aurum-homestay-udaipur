import { jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  MapPin,
  Star,
  Wifi,
  Coffee,
  Wind,
  Car,
  Utensils,
  Users,
  BedDouble,
  Ruler,
  Phone,
  Mail,
  Menu,
  X,
  Sparkles,
  Calendar as CalendarIcon,
  ArrowRight,
  CheckCircle2,
  Trees,
  Home,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";
const IgIcon = (p) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", ...p, children: [
  /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
] });
const FbIcon = (p) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p, children: /* @__PURE__ */ jsx("path", { d: "M13 22v-8h2.7l.4-3.2H13V8.7c0-.9.3-1.6 1.6-1.6H16V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7v3.2h2.6V22H13z" }) });
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT, HOUSE_IMAGES, IMAGES, LOCATION, ROOMS, REVIEWS } from "@/lib/hotel-data";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: IMAGES[0] },
      { name: "twitter:image", content: IMAGES[0] }
    ]
  }),
  component: Landing
});
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
function SectionHeading({ eyebrow, title, sub }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: fadeUp,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: 0.3 },
      className: "mx-auto max-w-2xl text-center",
      children: [
        /* @__PURE__ */ jsx("span", { className: "divider-gold", children: eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-5xl font-display text-foreground", children: title }),
        sub && /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: sub })
      ]
    }
  );
}
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Stay", "#rooms"],
    ["Compare", "#compare"],
    ["The House", "#house"],
    ["Reviews", "#reviews"],
    ["Find Us", "#find"]
  ];
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -80 },
      animate: { y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-full bg-gold flex items-center justify-center shadow-gold", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: `font-display text-lg ${scrolled ? "text-foreground" : "text-ivory"}`, children: "Aurum" }),
              /* @__PURE__ */ jsx("div", { className: `text-[10px] tracking-[0.3em] ${scrolled ? "text-muted-foreground" : "text-ivory/80"}`, children: "HOMESTAY \xB7 UDAIPUR" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map(([label, href]) => /* @__PURE__ */ jsxs(
            "a",
            {
              href,
              className: `text-sm relative group ${scrolled ? "text-foreground" : "text-ivory"}`,
              children: [
                label,
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" })
              ]
            },
            href
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx("a", { href: "#book", children: /* @__PURE__ */ jsx(Button, { className: "bg-gold text-primary-foreground hover:opacity-90 shadow-gold", children: "Book Now" }) }) }),
          /* @__PURE__ */ jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ jsx(X, { className: scrolled ? "text-foreground" : "text-ivory" }) : /* @__PURE__ */ jsx(Menu, { className: scrolled ? "text-foreground" : "text-ivory" }) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border",
            children: /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 flex flex-col gap-3", children: [
              links.map(([l, h]) => /* @__PURE__ */ jsx("a", { href: h, onClick: () => setOpen(false), className: "text-foreground py-2", children: l }, h)),
              /* @__PURE__ */ jsx("a", { href: "#book", onClick: () => setOpen(false), children: /* @__PURE__ */ jsx(Button, { className: "w-full bg-gold text-primary-foreground", children: "Book Now" }) })
            ] })
          }
        ) })
      ]
    }
  );
}
function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, []);
  const [idx, setIdx] = useState(0);
  const heroImages = IMAGES.slice(0, 5);

  useEffect(() => {
    if (!embla) return;
    const t = setInterval(() => embla.scrollNext(), 5500);
    const onSelect = () => setIdx(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      clearInterval(t);
      embla.off("select", onSelect);
    };
  }, [embla]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="h-full w-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {heroImages.map((src, i) => (
              <div key={i} className="relative min-w-0 flex-[0_0_100%] h-full">
                <img src={src} alt="Aurum Homestay Udaipur" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        aria-label="Next slide"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => embla?.scrollNext()}
        className="absolute bottom-8 right-6 md:bottom-10 md:right-10 z-30 group flex items-center gap-1 p-1.5 pl-4 rounded-full bg-black/30 backdrop-blur-xl border border-ivory/20 text-ivory shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[color:var(--gold)]/60 hover:bg-black/45 transition-colors duration-300"
      >
        <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ivory/80 group-hover:text-ivory transition-colors">
          {String(idx + 1).padStart(2, "0")} / {String(heroImages.length).padStart(2, "0")}
        </span>
        <span className="relative ml-2 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-gold overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
          <ChevronRight className="relative h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.2} />
        </span>
      </motion.button>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center pointer-events-none">
        <div className="mx-auto max-w-7xl w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-2xl pointer-events-auto"
          >
            <span className="inline-flex items-center gap-2 text-[color:var(--gold-soft)] text-xs tracking-[0.35em] uppercase">
              <MapPin className="h-3.5 w-3.5" /> Udaipur · Lake Pichola
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-display text-ivory leading-[1.05]">
              A quiet <span className="text-gradient-gold italic">home</span>
              <br />
              in the city of lakes.
            </h1>
            <p className="mt-6 text-lg text-ivory/85 max-w-xl">
              Aurum Homestay is a boutique family-run house of nine rooms — hand-carved wood, Rajasthani textiles,
              a rooftop that looks straight at the palace, and mornings that always begin with masala chai.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#book">
                <Button size="lg" className="bg-gold text-primary-foreground hover:opacity-90 shadow-gold h-12 px-8">
                  Check availability <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#rooms">
                <Button size="lg" variant="outline" className="h-12 px-8 border-ivory/40 text-ivory hover:bg-ivory/10 bg-transparent">
                  Explore rooms
                </Button>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-ivory/90">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                ))}
              </div>
              <div className="text-sm">4.9 · 320+ verified reviews</div>
            </div>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
}
function BookingBar() {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return /* @__PURE__ */ jsx("section", { id: "book", className: "relative z-20 -mt-16 px-6", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
      className: "mx-auto max-w-6xl bg-card rounded-2xl shadow-luxe border border-border p-6 md:p-8",
      children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-5 gap-4 items-end", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Check-in" }),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ jsx(CalendarIcon, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(Input, { type: "date", defaultValue: today, className: "pl-10 h-12" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Check-out" }),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ jsx(CalendarIcon, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(Input, { type: "date", className: "pl-10 h-12" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Guests" }),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ jsx(Users, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(Input, { type: "number", defaultValue: 2, min: 1, max: 8, className: "pl-10 h-12" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Rooms" }),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ jsx(BedDouble, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(Input, { type: "number", defaultValue: 1, min: 1, max: 5, className: "pl-10 h-12" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#compare", children: /* @__PURE__ */ jsxs(Button, { className: "w-full h-12 bg-royal text-primary-foreground hover:opacity-90", children: [
          "Search rooms ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) })
      ] })
    }
  ) });
}
function RoomCard({ room }) {
  return /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "group bg-card rounded-2xl overflow-hidden border border-border shadow-luxe flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: room.image, alt: room.name, className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx(Badge, { className: "absolute top-4 left-4 bg-gold text-primary-foreground border-0", children: room.view })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground", children: room.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: room.tagline })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-display text-foreground", children: [
            "\u20B9",
            room.price.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "per night" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-3 gap-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Ruler, { className: "h-3.5 w-3.5" }),
          room.size
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5" }),
          room.guests,
          " guests"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(BedDouble, { className: "h-3.5 w-3.5" }),
          room.bed
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-6 flex gap-2", children: [
        /* @__PURE__ */ jsx(RoomDialog, { room }),
        /* @__PURE__ */ jsx(Button, { className: "flex-1 bg-royal text-primary-foreground hover:opacity-90", children: "Book" })
      ] })
    ] })
  ] });
}
function RoomDialog({ room }) {
  const iconFor = (a) => {
    if (a.includes("Wi-Fi")) return /* @__PURE__ */ jsx(Wifi, { className: "h-4 w-4" });
    if (a.includes("Breakfast")) return /* @__PURE__ */ jsx(Coffee, { className: "h-4 w-4" });
    if (a.includes("AC")) return /* @__PURE__ */ jsx(Wind, { className: "h-4 w-4" });
    if (a.includes("Parking")) return /* @__PURE__ */ jsx(Car, { className: "h-4 w-4" });
    return /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" });
  };
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "flex-1", children: "Details" }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-3xl p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: room.image, alt: room.name, className: "w-full h-64 object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { className: "font-display text-3xl", children: room.name }),
          /* @__PURE__ */ jsx(DialogDescription, { className: "text-base", children: room.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 mt-6", children: room.amenities.map((a) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-foreground/80 p-2 rounded-lg bg-secondary/60", children: [
          iconFor(a),
          " ",
          a
        ] }, a)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 rounded-xl bg-secondary/60 border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Direct booking price" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mt-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-display text-foreground", children: [
              "\u20B9",
              room.price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground line-through", children: [
              "\u20B9",
              room.compare.booking.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-gold text-primary-foreground", children: [
              "Save \u20B9",
              room.compare.booking - room.price
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(DialogFooter, { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { className: "bg-royal text-primary-foreground w-full h-12", children: "Reserve this room" }) })
      ] })
    ] })
  ] });
}
function RoomsSection() {
  return /* @__PURE__ */ jsx("section", { id: "rooms", className: "py-28 px-6 bg-[color:var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Our Rooms",
        title: "Nine rooms, one warm house",
        sub: "Every room is different \u2014 carved doors, jharokha windows, cotton block-print linens. Choose the one that fits your trip."
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.15 },
        transition: { staggerChildren: 0.12 },
        className: "mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6",
        children: ROOMS.map((r) => /* @__PURE__ */ jsx(RoomCard, { room: r }, r.id))
      }
    )
  ] }) });
}
function ComparePrices() {
  const [price, setPrice] = useState([7e3]);
  const [guests, setGuests] = useState(0);
  const [view, setView] = useState("any");
  const filtered = useMemo(() => ROOMS.filter(
    (r) => r.price <= price[0] && (guests === 0 || r.guests >= guests) && (view === "any" || r.view.toLowerCase().includes(view))
  ), [price, guests, view]);
  return /* @__PURE__ */ jsx("section", { id: "compare", className: "py-28 px-6 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Best Price Guarantee",
        title: "Compare & save \u2014 book direct",
        sub: "We show every partner price side by side. Booking with us is always the cheapest \u2014 no fees, free cancellation."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-[300px_1fr] gap-8", children: [
      /* @__PURE__ */ jsxs(
        motion.aside,
        {
          variants: fadeUp,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          className: "bg-card border border-border rounded-2xl p-6 h-fit sticky top-24 shadow-luxe",
          children: [
            /* @__PURE__ */ jsx("h4", { className: "font-display text-xl mb-6", children: "Filter" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Max price / night" }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 text-lg font-display", children: [
                "\u20B9",
                price[0].toLocaleString()
              ] }),
              /* @__PURE__ */ jsx(Slider, { value: price, onValueChange: setPrice, min: 2500, max: 8e3, step: 100, className: "mt-3" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Guests" }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 grid grid-cols-4 gap-2", children: [0, 2, 3, 4].map((n) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setGuests(n),
                  className: `h-10 rounded-lg text-sm border transition ${guests === n ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border"}`,
                  children: n === 0 ? "Any" : `${n}+`
                },
                n
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "View" }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: [["any", "Any"], ["lake", "Lake"], ["garden", "Garden"], ["city", "City"], ["court", "Courtyard"]].map(([v, l]) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setView(v),
                  className: `px-3 h-9 rounded-full text-xs border ${view === v ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border"}`,
                  children: l
                },
                v
              )) })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "mt-8 text-xs text-muted-foreground", children: [
              filtered.length,
              " of ",
              ROOMS.length,
              " rooms match"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((r) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            layout: true,
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "bg-card border border-border rounded-2xl overflow-hidden shadow-luxe grid md:grid-cols-[280px_1fr]",
            children: [
              /* @__PURE__ */ jsx("img", { src: r.image, alt: r.name, className: "h-full w-full object-cover aspect-[4/3] md:aspect-auto" }),
              /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: r.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: r.tagline }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex gap-3 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsx("span", { children: r.size }),
                      "\xB7",
                      /* @__PURE__ */ jsxs("span", { children: [
                        "Sleeps ",
                        r.guests
                      ] }),
                      "\xB7",
                      /* @__PURE__ */ jsx("span", { children: r.view })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" }),
                    " 4.9"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-2 md:grid-cols-4 gap-2", children: [
                  { name: "Aurum Direct", price: r.price, best: true },
                  { name: "Booking.com", price: r.compare.booking },
                  { name: "Agoda", price: r.compare.agoda },
                  { name: "MakeMyTrip", price: r.compare.makemytrip }
                ].map((p) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `p-3 rounded-lg border text-center ${p.best ? "border-[color:var(--gold)] bg-[color:var(--gold-soft)]/30" : "border-border bg-secondary/40"}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: p.name }),
                      /* @__PURE__ */ jsxs("div", { className: `font-display text-lg mt-1 ${p.best ? "text-foreground" : "text-muted-foreground line-through"}`, children: [
                        "\u20B9",
                        p.price.toLocaleString()
                      ] }),
                      p.best && /* @__PURE__ */ jsx("div", { className: "text-[10px] text-[color:var(--gold)] mt-0.5 font-medium", children: "Best price" })
                    ]
                  },
                  p.name
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-3 items-center", children: [
                  /* @__PURE__ */ jsx(RoomDialog, { room: r }),
                  /* @__PURE__ */ jsxs(Button, { className: "flex-1 bg-royal text-primary-foreground", children: [
                    "Book direct \u2014 save \u20B9",
                    r.compare.booking - r.price
                  ] })
                ] })
              ] })
            ]
          },
          r.id
        )) }),
        filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-20 text-muted-foreground", children: "No rooms match \u2014 try widening the filters." })
      ] })
    ] })
  ] }) });
}
function TheHouse() {
  const indoor = [
    { title: "Sunlit courtyard", body: "The heart of the house \u2014 a jharokha-lined courtyard where morning chai is served under the bougainvillea." },
    { title: "Library nook", body: "A shelf of books on Mewar history, low seating and a record player. Quiet corner for slow afternoons." },
    { title: "Family dining", body: "Home-cooked Rajasthani thalis on a shared table \u2014 dal baati churma, gatte ki sabzi, ker sangri." },
    { title: "Heritage details", body: "Antique frames, hand-carved wooden doors and block-print textiles sourced from Bagru artisans." }
  ];
  const outdoor = [
    { title: "Rooftop with a view", body: "Direct line of sight to the City Palace and Lake Pichola \u2014 sunset here is the reason people come back." },
    { title: "Frangipani garden", body: "A shaded garden with hammocks, a small koi pond and evening lantern light." },
    { title: "Ghat walk", body: "Six minutes on foot to Gangaur Ghat and the ferry point for Jag Mandir." },
    { title: "Cycle-friendly lanes", body: "Borrow a cycle and wind through the old city's blue-washed lanes at your own pace." }
  ];
  const [tab, setTab] = useState("indoor");
  const list = tab === "indoor" ? indoor : outdoor;
  const gallery =
    tab === "indoor"
      ? [HOUSE_IMAGES.indoorBack, HOUSE_IMAGES.indoorFront]
      : [HOUSE_IMAGES.outdoorBack, HOUSE_IMAGES.outdoorFront];
  return /* @__PURE__ */ jsx("section", { id: "house", className: "py-28 px-6 bg-[color:var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "The House",
        title: "Indoor calm, outdoor magic",
        sub: "A restored haveli reimagined as a nine-room home. Two worlds under one roof."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxs(Tabs, { value: tab, onValueChange: setTab, className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "mx-auto grid w-full max-w-md grid-cols-2 h-12 bg-secondary", children: [
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "indoor", className: "h-10 gap-2", children: [
          /* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }),
          " Indoor"
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "outdoor", className: "h-10 gap-2", children: [
          /* @__PURE__ */ jsx(Trees, { className: "h-4 w-4" }),
          " Outdoor"
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: tab, className: "mt-12", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5 },
          className: "grid lg:grid-cols-2 gap-12 items-center",
          children: [
            /* @__PURE__ */ jsx("div", { style: { perspective: "1200px" }, className: "relative aspect-[4/5]", children: /* @__PURE__ */ jsxs("div", { className: "float-3d relative h-full w-full", children: [
              /* @__PURE__ */ jsx("img", { src: gallery[0], alt: "", className: "absolute inset-0 h-full w-full object-cover rounded-2xl shadow-luxe" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: gallery[1],
                  alt: "",
                  className: "absolute -bottom-8 -right-8 w-2/3 aspect-square object-cover rounded-2xl border-8 border-[color:var(--ivory)] shadow-luxe"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gold shadow-gold flex items-center justify-center text-primary-foreground", children: tab === "indoor" ? /* @__PURE__ */ jsx(Moon, { className: "h-10 w-10" }) : /* @__PURE__ */ jsx(Sun, { className: "h-10 w-10" }) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: list.map((it, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: i * 0.08 },
                className: "p-6 rounded-2xl bg-card border border-border shadow-luxe",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-[color:var(--gold-soft)] flex items-center justify-center text-primary", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "mt-4 font-display text-xl", children: it.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.body })
                ]
              },
              it.title
            )) })
          ]
        },
        tab
      ) }) })
    ] }) })
  ] }) });
}
function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  return /* @__PURE__ */ jsx("section", { id: "reviews", className: "py-28 px-6 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Guest Reviews",
        title: "Loved by travellers, kept by locals",
        sub: "A few words from guests who stayed with us \u2014 from families and honeymooners to solo travellers."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-14 overflow-hidden", ref: emblaRef, children: /* @__PURE__ */ jsx("div", { className: "flex gap-6", children: REVIEWS.map((r, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        className: "min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]",
        children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-card border-border shadow-luxe", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(r.rating)].map((_, i2) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" }, i2)) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-5 text-foreground/85 leading-relaxed", children: [
            '"',
            r.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-semibold", children: r.avatar }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: r.name }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: r.city })
            ] })
          ] })
        ] }) })
      },
      i
    )) }) })
  ] }) });
}
function FindUs() {
  const nearby = [
    { name: "Lake Pichola", dist: "2 min walk" },
    { name: "City Palace", dist: "8 min walk" },
    { name: "Jagdish Temple", dist: "6 min walk" },
    { name: "Gangaur Ghat", dist: "4 min walk" },
    { name: "Bagore Ki Haveli", dist: "5 min walk" },
    { name: "Udaipur Airport", dist: "35 min drive" },
  ];

  return (
    <section id="find" className="py-28 px-6 bg-white text-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--gold)] blur-3xl opacity-10" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--gold)] blur-3xl opacity-5" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="divider-gold">Find Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-foreground">Visit Aurum Homestay</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {LOCATION.line1}, {LOCATION.line2}, {LOCATION.city}
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-border shadow-luxe bg-card"
          >
            <iframe
              title="Aurum Homestay location"
              src={LOCATION.mapEmbed}
              className="w-full h-[480px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur rounded-2xl p-5 shadow-luxe max-w-xs">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-lg text-foreground">{LOCATION.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {LOCATION.line1}
                    <br />
                    {LOCATION.line2}
                    <br />
                    {LOCATION.city}
                  </div>
                </div>
              </div>
              <a
                href={LOCATION.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium"
              >
                Open in Google Maps <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 bg-card border border-border shadow-luxe"
            >
              <h3 className="font-display text-2xl text-foreground">Around the corner</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {nearby.map((n) => (
                  <div key={n.name} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 border border-border">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--gold)]" />
                    <div>
                      <div className="text-sm text-foreground">{n.name}</div>
                      <div className="text-xs text-muted-foreground">{n.dist}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 bg-gold text-primary-foreground shadow-gold"
            >
              <h3 className="font-display text-2xl">Reach us directly</h3>
              <div className="mt-5 space-y-3">
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3">
                  <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3">
                  <Mail className="h-4 w-4" /> {CONTACT.email}
                </a>
                <div className="flex items-center gap-3">
                  <Utensils className="h-4 w-4" /> Breakfast · 7–10:30 am
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <IgIcon className="h-4 w-4" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <FbIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[color:var(--ivory)] border-t border-border py-10 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-gold flex items-center justify-center", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary-foreground" }) }),
      /* @__PURE__ */ jsx("div", { className: "font-display text-lg", children: "Aurum Homestay" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Aurum Homestay, Udaipur \xB7 Made with care in Rajasthan."
    ] })
  ] }) });
}
function Landing() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(BookingBar, {}),
    /* @__PURE__ */ jsx(RoomsSection, {}),
    /* @__PURE__ */ jsx(ComparePrices, {}),
    /* @__PURE__ */ jsx(TheHouse, {}),
    /* @__PURE__ */ jsx(Reviews, {}),
    /* @__PURE__ */ jsx(FindUs, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Route
};
