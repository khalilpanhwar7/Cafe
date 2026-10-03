const px = (id: string, w = 1400, h = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const business = {
  name: "KP Cafe",
  tagline: "Your cozy coffee stop in Gulberg.",
  short: "KP Cafe",
  rating: "4.8",
  reviews: "1,200+ reviews",
  address: "Shop 7, Almond Arcade, 142-B MM Alam Road, Gulberg III, Lahore 54000",
  addressShort: "142-B MM Alam Road, Gulberg III, Lahore",
  phone: "+92 300 4765233",
  phoneDisplay: "+92 300 476 5233",
  phoneHref: "tel:+923004765233",
  whatsapp: "923004765233",
  hoursShort: "Daily 8:00 AM – 11:00 PM",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 11:00 PM" },
    { day: "Saturday", time: "8:00 AM – 12:00 AM" },
    { day: "Sunday", time: "9:00 AM – 11:00 PM" },
  ],
  socials: {
    whatsapp: "https://wa.me/923004765233",
    instagram: "https://instagram.com/kpcafe",
    facebook: "https://facebook.com/kpcafe",
    tiktok: "https://tiktok.com/@kpcafe",
  },
  email: "hello@kpcafe.pk",
};

export const navLinks = [
  { label: "Welcome", href: "#welcome" },
  { label: "Order", href: "#order" },
  { label: "Coffee Bags", href: "#beans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export const images = {
  hero: px("36407802", 1800, 1200),
  welcome: px("34386522", 1200, 1400),
  welcome2: px("7898213", 1000, 1200),
  interiorNight: px("18150815", 1600, 900),
  interiorModern: px("36484101", 1600, 1000),
  wallArt: px("11696469", 1400, 1000),
  plants: px("18721993", 1400, 1000),
  storefront: px("8700655", 1600, 1000),
  latte: px("17305195", 1200, 1400),
  cappuccino: px("18699459", 1200, 1400),
  heartLatte: px("31139336", 1200, 1400),
  blueCup: px("459489", 1400, 1000),
  beansBag: px("22679454", 1200, 1400),
  beansPack: px("9334456", 1200, 1400),
  beansHand: px("29317659", 1200, 1400),
  beansShelf: px("4820654", 1400, 1000),
  barista: px("37540287", 1200, 1400),
  videoCover: px("34386522", 1600, 900),
};

export const galleryItems = [
  { src: images.hero, alt: "KP Cafe storefront with plants and a bicycle", span: "lg:col-span-2 lg:row-span-2" },
  { src: images.blueCup, alt: "Latte with heart art in a blue cup" },
  { src: images.wallArt, alt: "Coffee themed framed wall art" },
  { src: images.heartLatte, alt: "Cappuccino with heart latte art" },
  { src: images.plants, alt: "Cafe interior with plants and warm lighting" },
  { src: images.beansBag, alt: "Roasted coffee beans spilling from a bag" },
  { src: images.interiorNight, alt: "Guests enjoying the cafe at night", span: "lg:col-span-2" },
  { src: images.cappuccino, alt: "Cappuccino in natural sunlight" },
  { src: images.barista, alt: "Barista packing coffee bags at the counter" },
];

export const beans = [
  {
    name: "Almond Cream Blend",
    origin: "Medium roast · Brazil + Ethiopia",
    notes: "Toasted almond, milk chocolate, caramel",
    price: "Rs 2,450",
    weight: "250 g",
    img: images.beansBag,
    badge: "Best seller",
  },
  {
    name: "Midnight Espresso",
    origin: "Dark roast · Sumatra + Colombia",
    notes: "Dark cocoa, molasses, toasted spice",
    price: "Rs 2,750",
    weight: "250 g",
    img: images.beansPack,
    badge: "Strong",
  },
  {
    name: "Sunrise Original",
    origin: "Light roast · Kenya + Guatemala",
    notes: "Red berry, citrus bloom, honey",
    price: "Rs 2,600",
    weight: "250 g",
    img: images.beansHand,
    badge: "Fruity",
  },
];

export const menuHighlights = [
  { name: "KP Signature Latte", desc: "Double shot, velvet milk, almond cream", price: "Rs 850" },
  { name: "Honey Cinnamon Cappuccino", desc: "Foamy, warm spice, local honey", price: "Rs 780" },
  { name: "Butter Croissant", desc: "Baked every morning at 7 AM", price: "Rs 520" },
  { name: "Nutella Crepe", desc: "Warm crepe, hazelnut spread, banana", price: "Rs 950" },
  { name: "Everything Bagel", desc: "Cream cheese, chives, smoked olive oil", price: "Rs 690" },
  { name: "Cold Brew Almond", desc: "18 hour steep, oat + almond foam", price: "Rs 890" },
];

export const reviews = [
  {
    name: "Ayesha Khan",
    meta: "Local Guide · 42 reviews",
    text: "The almond latte is honestly the best I have had in Lahore. Warm staff, calm music and the croissants are always fresh.",
    stars: 5,
  },
  {
    name: "Hamza Raza",
    meta: "Google review",
    text: "Ordered ahead for pickup and it was ready in six minutes. Great espresso, fair prices and a really cozy corner to work from.",
    stars: 5,
  },
  {
    name: "Sana Iqbal",
    meta: "Google review",
    text: "Came for the crepes, stayed for the coffee. The Nutella crepe is huge — perfect for sharing on a slow Sunday morning.",
    stars: 5,
  },
  {
    name: "Bilal Ahmed",
    meta: "Google review",
    text: "Bought two bags of the Midnight Espresso for home. The roast date was only three days old. You can taste the difference.",
    stars: 4,
  },
  {
    name: "Zara Mehdi",
    meta: "Instagram · @zara.mehdi",
    text: "My go-to study spot. Fast wifi, outlets at every table and the staff never rush you out. Feels like a second living room.",
    stars: 5,
  },
  {
    name: "Usman Tariq",
    meta: "Google review",
    text: "Brunch for four was under budget and every plate came out hot. The bagel and cold brew combo is a winner.",
    stars: 5,
  },
];

export const stats = [
  { value: "4.8", label: "Average rating" },
  { value: "1,200+", label: "Happy reviews" },
  { value: "18", label: "Single origin roasts" },
  { value: "9 yrs", label: "Serving the neighbourhood" },
];

export const marqueeWords = [
  "Espresso",
  "Cold Brew",
  "Fresh Pastries",
  "Warm Crepes",
  "Bagels",
  "Roasted Beans",
  "Dine In",
  "Take Away",
  "Order Ahead",
];
