import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  MapPin, Star, Wifi, Coffee, Wind, Car, Utensils, Users, BedDouble, Ruler,
  Phone, Mail, Menu, X, Sparkles,
  Calendar as CalendarIcon, ArrowRight, CheckCircle2, Trees, Home, Sun, Moon,
} from "lucide-react";
const IgIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);
const FbIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-8h2.7l.4-3.2H13V8.7c0-.9.3-1.6 1.6-1.6H16V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7v3.2h2.6V22H13z"/></svg>
);
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { IMAGES, ROOMS, REVIEWS } from "@/lib/hotel-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: IMAGES[0] },
      { name: "twitter:image", content: IMAGES[0] },
    ],
  }),
  component: Landing,
});

/* ---------------- shared bits ---------------- */
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="divider-gold">{eyebrow}</span>
      <h2 className="mt-4 text-4xl md:text-5xl font-display text-foreground">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </motion.div>
  );
}

/* ---------------- nav ---------------- */
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
    ["Stay", "#rooms"], ["Compare", "#compare"], ["The House", "#house"],
    ["Reviews", "#reviews"], ["Find Us", "#find"],
  ] as const;
  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3" : "bg-transparent py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gold flex items-center justify-center shadow-gold">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className={`font-display text-lg ${scrolled ? "text-foreground" : "text-ivory"}`}>Aurum</div>
            <div className={`text-[10px] tracking-[0.3em] ${scrolled ? "text-muted-foreground" : "text-ivory/80"}`}>HOMESTAY · UDAIPUR</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href}
               className={`text-sm relative group ${scrolled ? "text-foreground" : "text-ivory"}`}>
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#book"><Button className="bg-gold text-primary-foreground hover:opacity-90 shadow-gold">Book Now</Button></a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className={scrolled ? "text-foreground" : "text-ivory"} /> : <Menu className={scrolled ? "text-foreground" : "text-ivory"} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="text-foreground py-2">{l}</a>)}
              <a href="#book" onClick={() => setOpen(false)}><Button className="w-full bg-gold text-primary-foreground">Book Now</Button></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------------- hero with parallax + carousel ---------------- */
function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, []);
  const [idx, setIdx] = useState(0);
  const heroImages = IMAGES.slice(0, 5);
  useEffect(() => {
    if (!embla) return;
    const t = setInterval(() => embla.scrollNext(), 5500);
    embla.on("select", () => setIdx(embla.selectedScrollSnap()));
    return () => clearInterval(t);
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

      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[color:var(--gold-soft)] text-xs tracking-[0.35em] uppercase">
              <MapPin className="h-3.5 w-3.5" /> Udaipur · Lake Pichola
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-display text-ivory leading-[1.05]">
              A quiet <span className="text-gradient-gold italic">home</span><br />in the city of lakes.
            </h1>
            <p className="mt-6 text-lg text-ivory/85 max-w-xl">
              Aurum Homestay is a boutique family-run house of nine rooms — hand-carved wood, Rajasthani textiles,
              a rooftop that looks straight at the palace, and mornings that always begin with masala chai.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#book"><Button size="lg" className="bg-gold text-primary-foreground hover:opacity-90 shadow-gold h-12 px-8">
                Check availability <ArrowRight className="ml-2 h-4 w-4" />
              </Button></a>
              <a href="#rooms"><Button size="lg" variant="outline" className="h-12 px-8 border-ivory/40 text-ivory hover:bg-ivory/10 bg-transparent">
                Explore rooms
              </Button></a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-ivory/90">
              <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />)}</div>
              <div className="text-sm">4.9 · 320+ verified reviews</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* carousel dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => embla?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-[color:var(--gold)]" : "w-4 bg-ivory/40"}`} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- booking bar ---------------- */
function BookingBar() {
  const today = new Date().toISOString().split("T")[0];
  return (
    <section id="book" className="relative z-20 -mt-16 px-6">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl bg-card rounded-2xl shadow-luxe border border-border p-6 md:p-8">
        <div className="grid md:grid-cols-5 gap-4 items-end">
          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Check-in</Label>
            <div className="relative mt-2"><CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="date" defaultValue={today} className="pl-10 h-12" /></div>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Check-out</Label>
            <div className="relative mt-2"><CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="date" className="pl-10 h-12" /></div>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Guests</Label>
            <div className="relative mt-2"><Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="number" defaultValue={2} min={1} max={8} className="pl-10 h-12" /></div>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-muted-foreground">Rooms</Label>
            <div className="relative mt-2"><BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="number" defaultValue={1} min={1} max={5} className="pl-10 h-12" /></div>
          </div>
          <a href="#compare"><Button className="w-full h-12 bg-royal text-primary-foreground hover:opacity-90">
            Search rooms <ArrowRight className="ml-2 h-4 w-4" />
          </Button></a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- rooms (no hover swap) ---------------- */
function RoomCard({ room }: { room: typeof ROOMS[number] }) {
  return (
    <motion.div variants={fadeUp} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-luxe flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
        <Badge className="absolute top-4 left-4 bg-gold text-primary-foreground border-0">{room.view}</Badge>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-foreground">{room.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{room.tagline}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-display text-foreground">₹{room.price.toLocaleString()}</div>
            <div className="text-[11px] text-muted-foreground">per night</div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Ruler className="h-3.5 w-3.5" />{room.size}</span>
          <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{room.guests} guests</span>
          <span className="flex items-center gap-1.5"><BedDouble className="h-3.5 w-3.5" />{room.bed}</span>
        </div>
        <div className="mt-auto pt-6 flex gap-2">
          <RoomDialog room={room} />
          <Button className="flex-1 bg-royal text-primary-foreground hover:opacity-90">Book</Button>
        </div>
      </div>
    </motion.div>
  );
}

function RoomDialog({ room }: { room: typeof ROOMS[number] }) {
  const iconFor = (a: string) => {
    if (a.includes("Wi-Fi")) return <Wifi className="h-4 w-4" />;
    if (a.includes("Breakfast")) return <Coffee className="h-4 w-4" />;
    if (a.includes("AC")) return <Wind className="h-4 w-4" />;
    if (a.includes("Parking")) return <Car className="h-4 w-4" />;
    return <CheckCircle2 className="h-4 w-4" />;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl">{room.name}</DialogTitle>
            <DialogDescription className="text-base">{room.description}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {room.amenities.map(a => (
              <div key={a} className="flex items-center gap-2 text-sm text-foreground/80 p-2 rounded-lg bg-secondary/60">
                {iconFor(a)} {a}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-secondary/60 border border-border">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Direct booking price</div>
            <div className="flex items-baseline gap-3 mt-1">
              <div className="text-3xl font-display text-foreground">₹{room.price.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground line-through">₹{room.compare.booking.toLocaleString()}</div>
              <Badge className="bg-gold text-primary-foreground">Save ₹{room.compare.booking - room.price}</Badge>
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button className="bg-royal text-primary-foreground w-full h-12">Reserve this room</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function RoomsSection() {
  return (
    <section id="rooms" className="py-28 px-6 bg-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Our Rooms" title="Nine rooms, one warm house"
          sub="Every room is different — carved doors, jharokha windows, cotton block-print linens. Choose the one that fits your trip." />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOMS.map(r => <RoomCard key={r.id} room={r} />)}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- compare prices with filters ---------------- */
function ComparePrices() {
  const [price, setPrice] = useState<number[]>([7000]);
  const [guests, setGuests] = useState<number>(0);
  const [view, setView] = useState<string>("any");

  const filtered = useMemo(() => ROOMS.filter(r =>
    r.price <= price[0] &&
    (guests === 0 || r.guests >= guests) &&
    (view === "any" || r.view.toLowerCase().includes(view))
  ), [price, guests, view]);

  return (
    <section id="compare" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Best Price Guarantee" title="Compare & save — book direct"
          sub="We show every partner price side by side. Booking with us is always the cheapest — no fees, free cancellation." />

        <div className="mt-14 grid lg:grid-cols-[300px_1fr] gap-8">
          {/* filters */}
          <motion.aside variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 h-fit sticky top-24 shadow-luxe">
            <h4 className="font-display text-xl mb-6">Filter</h4>
            <div>
              <Label className="text-xs uppercase tracking-widest text-muted-foreground">Max price / night</Label>
              <div className="mt-3 text-lg font-display">₹{price[0].toLocaleString()}</div>
              <Slider value={price} onValueChange={setPrice} min={2500} max={8000} step={100} className="mt-3" />
            </div>
            <div className="mt-8">
              <Label className="text-xs uppercase tracking-widest text-muted-foreground">Guests</Label>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[0, 2, 3, 4].map(n => (
                  <button key={n} onClick={() => setGuests(n)}
                    className={`h-10 rounded-lg text-sm border transition ${guests === n ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border"}`}>
                    {n === 0 ? "Any" : `${n}+`}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Label className="text-xs uppercase tracking-widest text-muted-foreground">View</Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[["any", "Any"], ["lake", "Lake"], ["garden", "Garden"], ["city", "City"], ["court", "Courtyard"]].map(([v, l]) => (
                  <button key={v} onClick={() => setView(v)}
                    className={`px-3 h-9 rounded-full text-xs border ${view === v ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border"}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">{filtered.length} of {ROOMS.length} rooms match</p>
          </motion.aside>

          {/* list */}
          <div className="space-y-5">
            <AnimatePresence mode="popLayout">
              {filtered.map(r => (
                <motion.div key={r.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-luxe grid md:grid-cols-[280px_1fr]">
                  <img src={r.image} alt={r.name} className="h-full w-full object-cover aspect-[4/3] md:aspect-auto" />
                  <div className="p-6 flex flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-2xl">{r.name}</h3>
                        <p className="text-sm text-muted-foreground">{r.tagline}</p>
                        <div className="mt-3 flex gap-3 text-xs text-muted-foreground">
                          <span>{r.size}</span>·<span>Sleeps {r.guests}</span>·<span>{r.view}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" /> 4.9
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        { name: "Aurum Direct", price: r.price, best: true },
                        { name: "Booking.com", price: r.compare.booking },
                        { name: "Agoda", price: r.compare.agoda },
                        { name: "MakeMyTrip", price: r.compare.makemytrip },
                      ].map(p => (
                        <div key={p.name}
                          className={`p-3 rounded-lg border text-center ${p.best ? "border-[color:var(--gold)] bg-[color:var(--gold-soft)]/30" : "border-border bg-secondary/40"}`}>
                          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.name}</div>
                          <div className={`font-display text-lg mt-1 ${p.best ? "text-foreground" : "text-muted-foreground line-through"}`}>₹{p.price.toLocaleString()}</div>
                          {p.best && <div className="text-[10px] text-[color:var(--gold)] mt-0.5 font-medium">Best price</div>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3 items-center">
                      <RoomDialog room={r} />
                      <Button className="flex-1 bg-royal text-primary-foreground">Book direct — save ₹{r.compare.booking - r.price}</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">No rooms match — try widening the filters.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- the house: indoor/outdoor tabs ---------------- */
function TheHouse() {
  const indoor = [
    { title: "Sunlit courtyard", body: "The heart of the house — a jharokha-lined courtyard where morning chai is served under the bougainvillea." },
    { title: "Library nook", body: "A shelf of books on Mewar history, low seating and a record player. Quiet corner for slow afternoons." },
    { title: "Family dining", body: "Home-cooked Rajasthani thalis on a shared table — dal baati churma, gatte ki sabzi, ker sangri." },
    { title: "Heritage details", body: "Antique frames, hand-carved wooden doors and block-print textiles sourced from Bagru artisans." },
  ];
  const outdoor = [
    { title: "Rooftop with a view", body: "Direct line of sight to the City Palace and Lake Pichola — sunset here is the reason people come back." },
    { title: "Frangipani garden", body: "A shaded garden with hammocks, a small koi pond and evening lantern light." },
    { title: "Ghat walk", body: "Six minutes on foot to Gangaur Ghat and the ferry point for Jag Mandir." },
    { title: "Cycle-friendly lanes", body: "Borrow a cycle and wind through the old city's blue-washed lanes at your own pace." },
  ];
  const [tab, setTab] = useState("indoor");
  const list = tab === "indoor" ? indoor : outdoor;
  const gallery = tab === "indoor" ? IMAGES.slice(4, 10) : IMAGES.slice(10, 16);

  return (
    <section id="house" className="py-28 px-6 bg-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="The House" title="Indoor calm, outdoor magic"
          sub="A restored haveli reimagined as a nine-room home. Two worlds under one roof." />
        <div className="mt-12">
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 h-12 bg-secondary">
              <TabsTrigger value="indoor" className="h-10 gap-2"><Home className="h-4 w-4" /> Indoor</TabsTrigger>
              <TabsTrigger value="outdoor" className="h-10 gap-2"><Trees className="h-4 w-4" /> Outdoor</TabsTrigger>
            </TabsList>
            <TabsContent value={tab} className="mt-12">
              <AnimatePresence mode="wait">
                <motion.div key={tab}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-12 items-center">
                  <div style={{ perspective: "1200px" }} className="relative aspect-[4/5]">
                    <div className="float-3d relative h-full w-full">
                      <img src={gallery[0]} alt="" className="absolute inset-0 h-full w-full object-cover rounded-2xl shadow-luxe" />
                      <img src={gallery[1]} alt=""
                        className="absolute -bottom-8 -right-8 w-2/3 aspect-square object-cover rounded-2xl border-8 border-[color:var(--ivory)] shadow-luxe" />
                      <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gold shadow-gold flex items-center justify-center text-primary-foreground">
                        {tab === "indoor" ? <Moon className="h-10 w-10" /> : <Sun className="h-10 w-10" />}
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {list.map((it, i) => (
                      <motion.div key={it.title}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="p-6 rounded-2xl bg-card border border-border shadow-luxe">
                        <div className="h-8 w-8 rounded-full bg-[color:var(--gold-soft)] flex items-center justify-center text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <h4 className="mt-4 font-display text-xl">{it.title}</h4>
                        <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

/* ---------------- reviews ---------------- */
function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  return (
    <section id="reviews" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Guest Reviews" title="Loved by travellers, kept by locals"
          sub="A few words from guests who stayed with us — from families and honeymooners to solo travellers." />
        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {REVIEWS.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]">
                <Card className="h-full bg-card border-border shadow-luxe">
                  <CardContent className="p-8">
                    <div className="flex gap-1">
                      {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />)}
                    </div>
                    <p className="mt-5 text-foreground/85 leading-relaxed">"{r.text}"</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-gold flex items-center justify-center text-primary-foreground font-semibold">{r.avatar}</div>
                      <div>
                        <div className="font-medium">{r.name}</div>
                        <div className="text-xs text-muted-foreground">{r.city}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- find us ---------------- */
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
    <section id="find" className="py-28 px-6 bg-royal text-ivory relative overflow-hidden">
      {/* decorative glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--gold)] blur-3xl opacity-20" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--gold)] blur-3xl opacity-10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="divider-gold">Find Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-ivory">In the heart of the old city</h2>
          <p className="mt-4 text-ivory/70 max-w-2xl mx-auto">Tucked into a quiet lane behind Gangaur Ghat, minutes from every landmark that matters.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* map card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-ivory/10 shadow-luxe bg-card">
            <iframe
              title="Aurum Homestay location"
              src="https://www.google.com/maps?q=Lake+Pichola+Udaipur&output=embed"
              className="w-full h-[480px] border-0"
              loading="lazy" />
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur rounded-2xl p-5 shadow-luxe max-w-xs">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-lg text-foreground">Aurum Homestay</div>
                  <div className="text-xs text-muted-foreground mt-1">Near Gangaur Ghat, Old City<br />Udaipur, Rajasthan 313001</div>
                </div>
              </div>
              <a href="https://www.google.com/maps?q=Lake+Pichola+Udaipur" target="_blank" rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium">
                Open in Google Maps <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>

          {/* nearby + contact */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-3xl p-8 bg-ivory/5 backdrop-blur border border-ivory/10">
              <h3 className="font-display text-2xl text-ivory">Around the corner</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {nearby.map(n => (
                  <div key={n.name} className="flex items-start gap-3 p-3 rounded-xl bg-ivory/5 border border-ivory/10">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--gold)]" />
                    <div>
                      <div className="text-sm text-ivory">{n.name}</div>
                      <div className="text-xs text-ivory/60">{n.dist}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-3xl p-8 bg-gold text-primary-foreground shadow-gold">
              <h3 className="font-display text-2xl">Reach us directly</h3>
              <div className="mt-5 space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3"><Phone className="h-4 w-4" /> +91 98765 43210</a>
                <a href="mailto:stay@aurumhomestay.in" className="flex items-center gap-3"><Mail className="h-4 w-4" /> stay@aurumhomestay.in</a>
                <div className="flex items-center gap-3"><Utensils className="h-4 w-4" /> Breakfast · 7–10:30 am</div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/15 flex items-center justify-center"><IgIcon className="h-4 w-4" /></a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/15 flex items-center justify-center"><FbIcon className="h-4 w-4" /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--ivory)] border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center"><Sparkles className="h-4 w-4 text-primary-foreground" /></div>
          <div className="font-display text-lg">Aurum Homestay</div>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Aurum Homestay, Udaipur · Made with care in Rajasthan.</div>
      </div>
    </footer>
  );
}

/* ---------------- page ---------------- */
function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <BookingBar />
      <RoomsSection />
      <ComparePrices />
      <TheHouse />
      <Reviews />
      <FindUs />
      <Footer />
    </main>
  );
}
