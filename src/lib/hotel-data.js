const IMAGES = [
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533801/WhatsApp_Image_2026-07-08_at_11.30.38_PM_f1bufh.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533801/WhatsApp_Image_2026-07-08_at_11.30.37_PM_hvwrbv.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533801/WhatsApp_Image_2026-07-08_at_11.30.38_PM_1_suc00n.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533801/WhatsApp_Image_2026-07-08_at_11.30.37_PM_2_xasl63.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533801/WhatsApp_Image_2026-07-08_at_11.30.37_PM_1_xz3mzk.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533801/WhatsApp_Image_2026-07-08_at_11.30.36_PM_2_xuayfi.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533802/WhatsApp_Image_2026-07-08_at_11.30.35_PM_1_f8ibd9.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533802/WhatsApp_Image_2026-07-08_at_11.30.36_PM_f1w9oz.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533802/WhatsApp_Image_2026-07-08_at_11.30.36_PM_1_knpryi.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533802/WhatsApp_Image_2026-07-08_at_11.30.35_PM_uu0te0.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533803/WhatsApp_Image_2026-07-08_at_11.30.34_PM_2_nh8tia.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533804/WhatsApp_Image_2026-07-08_at_11.30.34_PM_1_ykv8te.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533804/WhatsApp_Image_2026-07-08_at_11.30.34_PM_itqm40.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533805/WhatsApp_Image_2026-07-08_at_11.30.33_PM_mtedzn.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533805/WhatsApp_Image_2026-07-08_at_11.30.32_PM_1_hwo3bd.jpg",
  "https://res.cloudinary.com/dpu3k7bdr/image/upload/v1783533805/WhatsApp_Image_2026-07-08_at_11.30.32_PM_sfwzbb.jpg"
];

const HOUSE_IMAGES = {
  indoorBack: IMAGES[12],
  indoorFront: IMAGES[11],
  outdoorBack: IMAGES[4],
  outdoorFront: IMAGES[10],
};

const CONTACT = {
  phone: "+916376645389",
  phoneDisplay: "+91 63766 45389",
  email: "stay@aurumhomestay.in",
};

const LOCATION = {
  name: "Aurum Homestay",
  line1: "6A, 18, VIP Colony",
  line2: "Titrdi, Sector 9, VIP Colony",
  city: "Udaipur, Gordhan Vilas Rural, Rajasthan 313002",
  lat: 24.5552289,
  lng: 73.7137781,
  mapEmbed: "https://www.google.com/maps?q=24.5552289,73.7137781&z=17&hl=en&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Aurum+Homestay/@24.5548841,73.7139176,607m/data=!3m1!1e3!4m23!1m13!3m12!1s0x3967ef1ddbca9a29:0x411343ae546390fd!2sAurum+Homestay!5m2!4m1!1i2!8m2!3d24.5552289!4d73.7137781!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11kb88_bcn!3m8!1s0x3967ef1ddbca9a29:0x411343ae546390fd!5m2!4m1!1i1!8m2!3d24.5552289!4d73.7137781!16s%2Fg%2F11kb88_bcn!18m1!1e1?entry=ttu",
};

const ROOMS = [
  {
    id: "heritage-suite",
    name: "Heritage Suite",
    tagline: "King bed \xB7 Lake-facing balcony",
    price: 4800,
    compare: { agoda: 5200, booking: 5400, makemytrip: 5150 },
    size: "38 sqm",
    guests: 2,
    bed: "King",
    view: "Lake Pichola",
    image: IMAGES[0],
    amenities: ["Free Wi-Fi", "AC", "Breakfast", "Balcony", "Lake View", "Room Service"],
    description: "Our flagship room opens onto a private balcony overlooking Lake Pichola. Hand-carved Rajasthani woodwork, a plush king bed and a rain shower make it the quiet centre of the house."
  },
  {
    id: "royal-deluxe",
    name: "Royal Deluxe",
    tagline: "Queen bed \xB7 Courtyard view",
    price: 3600,
    compare: { agoda: 3900, booking: 4050, makemytrip: 3850 },
    size: "28 sqm",
    guests: 2,
    bed: "Queen",
    view: "Courtyard",
    image: IMAGES[1],
    amenities: ["Free Wi-Fi", "AC", "Breakfast", "Work Desk", "Room Service"],
    description: "A warm, sun-lit room set around our inner courtyard \u2014 perfect for couples who want mornings that begin with birdsong and filter coffee on the terrace."
  },
  {
    id: "family-haveli",
    name: "Family Haveli",
    tagline: "2 Queen beds \xB7 Sleeps 4",
    price: 5900,
    compare: { agoda: 6300, booking: 6500, makemytrip: 6200 },
    size: "46 sqm",
    guests: 4,
    bed: "2 Queen",
    view: "City & Aravalli",
    image: IMAGES[2],
    amenities: ["Free Wi-Fi", "AC", "Breakfast", "Family Setup", "City View"],
    description: "A generous corner suite with two queen beds, a sitting nook and windows framing the old city rooftops climbing toward the Aravallis."
  },
  {
    id: "garden-room",
    name: "Garden Room",
    tagline: "Queen bed \xB7 Private garden",
    price: 3200,
    compare: { agoda: 3450, booking: 3550, makemytrip: 3400 },
    size: "24 sqm",
    guests: 2,
    bed: "Queen",
    view: "Garden",
    image: IMAGES[3],
    amenities: ["Free Wi-Fi", "AC", "Breakfast", "Garden", "Pet Friendly"],
    description: "Step from your room straight onto the frangipani-lined garden path. Cool stone floors, soft cotton linens and a hammock outside your door."
  }
];
const REVIEWS = [
  { name: "Aditi Sharma", city: "Mumbai", rating: 5, text: "Aurum felt like coming home to a Rajasthani family. The rooftop breakfast overlooking Pichola is unmatched.", avatar: "AS" },
  { name: "Marcus Weber", city: "Berlin", rating: 5, text: "The hosts arranged a private boat ride and a local dinner. Genuinely one of the warmest stays I've had in India.", avatar: "MW" },
  { name: "Priya Nair", city: "Bangalore", rating: 5, text: "Rooms are beautifully done \u2014 heritage without being kitsch. Sunset from the terrace is a memory I'll keep.", avatar: "PN" },
  { name: "Sofia Rossi", city: "Milan", rating: 4, text: "Charming homestay, walkable to the ghats and City Palace. Breakfast was a highlight every morning.", avatar: "SR" },
  { name: "Rahul Verma", city: "Delhi", rating: 5, text: "Booked the Family Haveli for our parents' anniversary. The team decorated the room \u2014 small touches, huge impact.", avatar: "RV" },
  { name: "Emma Clarke", city: "London", rating: 5, text: "Feels like a real home, not a hotel. The chai on the terrace at 6am, watching the city wake up \u2014 perfect.", avatar: "EC" }
];
export {
  CONTACT,
  HOUSE_IMAGES,
  IMAGES,
  LOCATION,
  REVIEWS,
  ROOMS
};
