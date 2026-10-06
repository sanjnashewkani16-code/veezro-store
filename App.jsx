import { useEffect, useMemo, useState } from "react";
import "./index.css";

const shops = [
  {
    id: "platinum",
    name: "Platinum Shop",
    icon: "🏆",
    description: "Premium & luxury collection",
  },
  {
    id: "golden",
    name: "Golden Shop",
    icon: "🥇",
    description: "Fashion & lifestyle collection",
  },
  {
    id: "silver",
    name: "Silver Shop",
    icon: "🥈",
    description: "Sports, gadgets & everyday collection",
  },
];

const categories = [
  { name: "All", icon: "✨" },
  { name: "Fashion", icon: "👗" },
  { name: "Electronics", icon: "💻" },
  { name: "Beauty", icon: "💄" },
  { name: "Home & Living", icon: "🏠" },
  { name: "Kitchen & Dining", icon: "🍽️" },
  { name: "Bedding & Towels", icon: "🛏️" },
  { name: "Sports & Fitness", icon: "🏃" },
  { name: "Bags & Accessories", icon: "👜" },
  { name: "Gadgets", icon: "📱" },
  { name: "Lifestyle & Gifts", icon: "🎁" },
];

const productNames = {
  Fashion: [
    "Satin Wrap Dress",
    "Ribbed Knit Top",
    "Wide-Leg Trousers",
    "Cropped Denim Jacket",
    "Pleated Midi Skirt",
    "Linen Co-ord Set",
    "Oversized Blazer",
    "Cotton Polo Shirt",
    "Pleated Palazzo Pants",
    "Embroidered Kurti",
    "Textured Cardigan",
    "Relaxed Cargo Jeans",
  ],

  Electronics: [
    "Noise-Canceling Earbuds",
    "Portable Bluetooth Speaker",
    "Mechanical Keyboard",
    "Wireless Mouse",
    "Smart LED Desk Lamp",
    "Mini Projector",
    "USB-C Hub",
    "Digital Alarm Clock",
    "Portable SSD 1TB",
    "Full HD Webcam",
    "Smart Plug",
    "Foldable Laptop Stand",
  ],

  Beauty: [
    "Vitamin C Face Serum",
    "Hydrating Face Mist",
    "Velvet Lip Tint",
    "Rose Clay Mask",
    "Aloe Gel Moisturizer",
    "Satin Hair Bonnet",
    "Makeup Brush Set",
    "Jade Facial Roller",
    "Vanilla Body Mist",
    "Gentle Face Cleanser",
    "Argan Hair Oil",
    "Nourishing Hand Cream",
  ],

  "Home & Living": [
    "Ceramic Vase Set",
    "Cloud Throw Pillow",
    "Bamboo Storage Box",
    "Minimal Wall Clock",
    "Marble Coaster Set",
    "Cotton Table Runner",
    "Wooden Serving Tray",
    "Scented Candle Jar",
    "Modern Desk Organizer",
    "Soft Area Rug",
    "Glass Plant Mister",
    "Decorative Bookends",
  ],

  "Kitchen & Dining": [
    "Ceramic Dinner Set",
    "Glass Food Container Set",
    "Stainless Steel Pan",
    "Non-Stick Frying Pan",
    "Wooden Serving Tray",
    "Premium Cutlery Set",
    "Ceramic Mug Set",
    "Glass Water Bottle",
    "Kitchen Knife Set",
    "Silicone Cooking Utensils",
    "Dish Drying Rack",
    "Airtight Storage Jar Set",
  ],

  "Bedding & Towels": [
    "Luxury Bath Towel",
    "2-Piece Hand Towel Set",
    "Microfiber Hair Towel",
    "Cotton Face Towel Set",
    "Soft Blanket",
    "Decorative Cushion Covers",
    "Fitted Bedsheet",
    "Pillow Cover Set",
    "Lightweight Comforter",
    "Premium Bath Mat",
    "Kitchen Towel Set",
    "Soft Hand Towel",
  ],

  "Sports & Fitness": [
    "Resistance Band Set",
    "Adjustable Jump Rope",
    "Training Duffel Bag",
    "Yoga Mat Pro",
    "Foam Recovery Roller",
    "Grip Training Gloves",
    "Insulated Sports Flask",
    "Balance Disc",
    "Agility Ladder",
    "Running Waist Pack",
    "Workout Towel Set",
    "Stretching Strap",
  ],

  "Bags & Accessories": [
    "Padded Laptop Sleeve",
    "Waterproof Laptop Sleeve",
    "Laptop Backpack",
    "Tablet Sleeve",
    "Travel Organizer Pouch",
    "Cable Organizer Bag",
    "Passport Holder",
    "Minimalist Wallet",
    "Sunglasses Case",
    "Tech Accessories Pouch",
    "Travel Document Holder",
    "Compact Shoulder Bag",
  ],

  Gadgets: [
    "Magnetic Phone Stand",
    "3-in-1 Charging Cable",
    "Wireless Charging Pad",
    "Phone Camera Lens Kit",
    "Cable Organizer Clips",
    "Laptop Privacy Cover",
    "Bluetooth Tracker Tag",
    "Rechargeable Reading Light",
    "Desktop Phone Dock",
    "Mini USB Fan",
    "Smart Cable Winder",
    "Tablet Stand",
  ],

  "Lifestyle & Gifts": [
    "Insulated Travel Mug",
    "Aroma Diffuser",
    "Journal Gift Set",
    "Reusable Lunch Box",
    "Cozy Sleep Mask",
    "Stainless Tea Infuser",
    "Puzzle Gift Box",
    "Travel Cutlery Kit",
    "Mini Photo Frame Set",
    "Desk Quote Plaque",
    "Reusable Shopping Set",
    "Gift Wrap Collection",
  ],
};

const imageSets = {
  Fashion: [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
    "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800",
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    "https://images.unsplash.com/photo-1544441893-675973e31985?w=800",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
  ],

  Electronics: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add4?w=800",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800",
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  ],

  Beauty: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
    "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800",
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
    "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800",
    "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800",
  ],

  "Home & Living": [
    "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800",
    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800",
    "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
  ],

  "Kitchen & Dining": [
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    "https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=800",
    "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
  ],

  "Bedding & Towels": [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
    "https://images.unsplash.com/photo-1583845112203-454c5b3f6f10?w=800",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800",
    "https://images.unsplash.com/photo-1560185127-6a8c2e4b5e2a?w=800",
    "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=800",
  ],

  "Sports & Fitness": [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800",
    "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800",
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=800",
    "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
    "https://images.unsplash.com/photo-1517838277536-f5f99be50175?w=800",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
    "https://images.unsplash.com/photo-1526401485004-2aa7d3b1b4f5?w=800",
  ],

  "Bags & Accessories": [
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800",
    "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
    "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=800",
    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800",
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800",
    "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800",
    "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  ],

  Gadgets: [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800",
    "https://images.unsplash.com/photo-1609592424993-9f4a4a3f9e9e?w=800",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add4?w=800",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  ],

  "Lifestyle & Gifts": [
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
    "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
    "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800",
    "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800",
    "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800",
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
    "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800",
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800",
  ],
};

const productImageOverrides = {
  "Ribbed Knit Top":
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
  "Casual Midi Dress":
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
  "Smart Cable Winder":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  "USB-C Hub":
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800",
};

const fallbackImages = Object.fromEntries(
  Object.entries(imageSets).map(([category, images]) => [category, images[0]])
);

const prices = [
  29.99,
  39.99,
  49.99,
  59.99,
  69.99,
  79.99,
  89.99,
  24.99,
  34.99,
  44.99,
  54.99,
  64.99,
];

const sampleProducts = Object.entries(productNames).flatMap(
  ([category, names], categoryIndex) =>
    names.map((name, index) => ({
      id: 1000 + categoryIndex * 100 + index,
      name,
      price: prices[index],
      category,
      shop: shops[(categoryIndex + index) % shops.length].id,
      image:
        productImageOverrides[name] ||
        imageSets[category][index % imageSets[category].length],
    }))
);

const originalProducts = [
  {
    id: 1,
    name: "Premium Smart Watch",
    price: 49.99,
    category: "Electronics",
    shop: "platinum",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    price: 69.99,
    category: "Fashion",
    shop: "golden",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 89.99,
    category: "Bags & Accessories",
    shop: "platinum",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    shop: "golden",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: 5,
    name: "Luxury Perfume",
    price: 39.99,
    category: "Beauty",
    shop: "silver",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
  },
  {
    id: 6,
    name: "Modern Backpack",
    price: 44.99,
    category: "Bags & Accessories",
    shop: "golden",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 79.99,
    category: "Sports & Fitness",
    shop: "silver",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    id: 8,
    name: "Sports Watch",
    price: 49.99,
    category: "Sports & Fitness",
    shop: "silver",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: 9,
    name: "Gym Training Shoes",
    price: 69.99,
    category: "Sports & Fitness",
    shop: "platinum",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
  },
  {
    id: 10,
    name: "Sports Water Bottle",
    price: 19.99,
    category: "Sports & Fitness",
    shop: "golden",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
  },
  {
    id: 11,
    name: "Home Decor Lamp",
    price: 34.99,
    category: "Home & Living",
    shop: "silver",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
  },
  {
    id: 12,
    name: "Elegant Summer Dress",
    price: 59.99,
    category: "Fashion",
    shop: "platinum",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
  },
  {
    id: 13,
    name: "Casual Midi Dress",
    price: 49.99,
    category: "Fashion",
    shop: "golden",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
  },
  {
    id: 14,
    name: "Classic Evening Dress",
    price: 89.99,
    category: "Fashion",
    shop: "platinum",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
  },
  {
    id: 15,
    name: "Floral Fashion Dress",
    price: 64.99,
    category: "Fashion",
    shop: "silver",
    image:
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800",
  },
];

const defaultProducts = [...originalProducts, ...sampleProducts];

const STORAGE_KEY = "veezro-products-v6";

function App() {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return defaultProducts;
      }

      const savedProducts = JSON.parse(saved);
      const defaultIds = new Set(defaultProducts.map((product) => product.id));
      const savedMap = new Map(
        savedProducts.map((product) => [product.id, product])
      );

      const refreshedDefaults = defaultProducts.map((product) => ({
        ...savedMap.get(product.id),
        ...product,
      }));

      const customProducts = savedProducts.filter(
        (product) => !defaultIds.has(product.id)
      );

      return [...refreshedDefaults, ...customProducts];
    } catch {
      return defaultProducts;
    }
  });

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedShop, setSelectedShop] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "Fashion",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const shopFromUrl = new URLSearchParams(window.location.search).get(
      "shop"
    );

    if (shops.some((shop) => shop.id === shopFromUrl)) {
      setSelectedShop(shopFromUrl);
    }
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const selectShop = (shopId) => {
    setSelectedShop(shopId);
    setSelectedCategory("All");
    setSearch("");

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?shop=${shopId}`
    );

    setTimeout(() => {
      document.getElementById("shop")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesShop =
        selectedShop === null ||
        product.shop === selectedShop;

      return matchesSearch && matchesCategory && matchesShop;
    });
  }, [products, search, selectedCategory, selectedShop]);

  const addProduct = (e) => {
    e.preventDefault();

    if (!selectedShop) {
      alert("Please select a shop first.");
      return;
    }

    if (!newProduct.name.trim() || !newProduct.price) {
      alert("Please enter product name and price.");
      return;
    }

    const product = {
      id: Date.now(),
      name: newProduct.name.trim(),
      price: Number(newProduct.price),
      category: newProduct.category,
      shop: selectedShop,
      image:
        newProduct.image.trim() ||
        imageSets[newProduct.category]?.[0] ||
        imageSets.Fashion[0],
    };

    setProducts((current) => [...current, product]);

    setNewProduct({
      name: "",
      price: "",
      category: "Fashion",
      image: "",
    });

    setShowAddProduct(false);
  };

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const selectedShopData = shops.find(
    (shop) => shop.id === selectedShop
  );

  return (
    <div className="app">

      <div className="topbar">
        <span>🚚 Free shipping on orders over $50</span>
        <span>USD $ &nbsp; | &nbsp; English</span>
      </div>

      <header className="navbar">
        <div className="logo">
          Vee<span>zro</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#categories">Categories</a>
          <a href="#offers">Offers</a>
        </nav>

        <div className="nav-actions">

          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button
            className="icon-btn"
            type="button"
            onClick={() => {
              setSearch("");
              document.getElementById("shop")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            ♡
            {wishlist.length > 0 && (
              <small>{wishlist.length}</small>
            )}
          </button>

          <button
            className="cart-btn"
            type="button"
            onClick={() => setShowCart(true)}
          >
            🛒 Cart ({cart.length})
          </button>

          <button className="login-btn" type="button">
            Login
          </button>

        </div>
      </header>

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hero-tag">
            NEW COLLECTION 2026
          </p>

          <h1>
            Discover Products
            <br />
            You'll <span>Love.</span>
          </h1>

          <p className="hero-text">
            Shop premium products from trusted sellers.
            Quality products, amazing prices and a simple
            shopping experience.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              type="button"
              onClick={() =>
                document.getElementById("shop")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Shop Now →
            </button>

            <button
              className="secondary-btn"
              type="button"
              onClick={() =>
                document.getElementById("categories")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore Categories
            </button>

          </div>

        </div>

        <div className="hero-card">

          <div className="sale-badge">
            30% OFF
          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
            alt="Veezro collection"
          />

        </div>

      </section>

      <section className="features">

        <div>
          <strong>🚚 Fast Delivery</strong>
          <span>Worldwide shipping</span>
        </div>

        <div>
          <strong>🔒 Secure Payment</strong>
          <span>Safe & verified payments</span>
        </div>

        <div>
          <strong>↩️ Easy Returns</strong>
          <span>Simple return policy</span>
        </div>

        <div>
          <strong>💬 Customer Support</strong>
          <span>We're here to help</span>
        </div>

      </section>

      <section className="section" id="categories">

        <div className="section-heading">
          <div>
            <p className="eyebrow">
              SHOP BY CATEGORY
            </p>

            <h2>
              Explore Categories
            </h2>
          </div>
        </div>

        <div className="categories">

          {categories.map((category) => (

            <button
              key={category.name}
              type="button"
              className={`category-card ${
                selectedCategory === category.name
                  ? "active-category"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory(category.name);
                setSelectedShop(null);

                window.history.replaceState(
                  null,
                  "",
                  window.location.pathname
                );

                document.getElementById("shop")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>
                {category.name}
              </h3>

              <p>
                {category.name === "All"
                  ? `${products.length} products`
                  : `${products.filter(
                      (product) =>
                        product.category === category.name
                    ).length} products`}
              </p>

            </button>

          ))}

        </div>

      </section>

      <section className="section">

        <div className="section-heading">

          <div>
            <p className="eyebrow">
              OUR SHOPS
            </p>

            <h2>
              Choose Your Shop
            </h2>
          </div>

          {selectedShopData && (
            <span>
              {selectedShopData.name}
            </span>
          )}

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "35px",
          }}
        >

          {shops.map((shop) => {

            const shopCount = products.filter(
              (product) => product.shop === shop.id
            ).length;

            return (

              <div
                key={shop.id}
                style={{
                  border:
                    selectedShop === shop.id
                      ? "2px solid #e85d04"
                      : "1px solid #e8e8e8",
                  borderRadius: "14px",
                  padding: "24px",
                  background: "#fff",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.06)",
                }}
              >

                <button
                  type="button"
                  onClick={() => selectShop(shop.id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >

                  <div
                    style={{
                      fontSize: "34px",
                      marginBottom: "8px",
                    }}
                  >
                    {shop.icon}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 7px",
                    }}
                  >
                    {shop.name}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 8px",
                      color: "#666",
                    }}
                  >
                    {shop.description}
                  </p>

                  <strong>
                    {shopCount} products
                  </strong>

                </button>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "16px",
                  }}
                >

                  <button
                    type="button"
                    onClick={() => selectShop(shop.id)}
                    style={{
                      flex: 1,
                      border: "none",
                      background: "#e85d04",
                      color: "#fff",
                      padding: "11px",
                      borderRadius: "7px",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Open Shop
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedShop(shop.id);
                      setShowQR(true);
                    }}
                    style={{
                      border: "1px solid #ddd",
                      background: "#fff",
                      padding: "10px 14px",
                      borderRadius: "7px",
                      cursor: "pointer",
                    }}
                  >
                    QR
                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </section>

      <section className="section" id="shop">

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              {selectedShopData
                ? selectedShopData.name.toUpperCase()
                : "OUR COLLECTION"}
            </p>

            <h2>
              {selectedShopData
                ? `${selectedShopData.name} Products`
                : "Popular Products"}
            </h2>

          </div>

          <span>
            {filteredProducts.length} products
          </span>

        </div>

        <div className="big-search">

          🔍

          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
            >
              ✕
            </button>
          )}

        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >

          <button
            type="button"
            onClick={() => setSelectedShop(null)}
            style={{
              padding: "9px 14px",
              borderRadius: "20px",
              border:
                selectedShop === null
                  ? "none"
                  : "1px solid #ddd",
              background:
                selectedShop === null
                  ? "#e85d04"
                  : "#fff",
              color:
                selectedShop === null
                  ? "#fff"
                  : "#333",
              cursor: "pointer",
            }}
          >
            All Shops
          </button>

          {shops.map((shop) => (

            <button
              key={shop.id}
              type="button"
              onClick={() => selectShop(shop.id)}
              style={{
                padding: "9px 14px",
                borderRadius: "20px",
                border:
                  selectedShop === shop.id
                    ? "none"
                    : "1px solid #ddd",
                background:
                  selectedShop === shop.id
                    ? "#e85d04"
                    : "#fff",
                color:
                  selectedShop === shop.id
                    ? "#fff"
                    : "#333",
                cursor: "pointer",
              }}
            >
              {shop.icon} {shop.name}
            </button>

          ))}

          {selectedShop && (

            <button
              type="button"
              onClick={() => setShowAddProduct(true)}
              style={{
                marginLeft: "auto",
                padding: "9px 16px",
                border: "none",
                borderRadius: "7px",
                background: "#222",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              + Add Product
            </button>

          )}

        </div>

        {filteredProducts.length > 0 ? (

          <div className="products">

            {filteredProducts.map((product) => (

              <div
                className="product-card"
                key={product.id}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        fallbackImages[product.category] ||
                        fallbackImages.Fashion;
                    }}
                  />

                  <button
                    className="heart"
                    type="button"
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                  >
                    {wishlist.includes(product.id)
                      ? "♥"
                      : "♡"}
                  </button>

                </div>

                <div className="product-info">

                  <p className="product-category">
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                  <div className="rating">
                    ★★★★★
                  </div>

                  <div className="product-bottom">

                    <strong>
                      ${product.price.toFixed(2)}
                    </strong>

                    <button
                      className="add-btn"
                      type="button"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      + Add
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-products">

            <div>🔍</div>

            <h3>
              No products found
            </h3>

            <p>
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setSelectedShop(null);
              }}
            >
              Show All Products
            </button>

          </div>

        )}

      </section>

      <section className="sale" id="offers">

        <div>

          <p>
            LIMITED TIME OFFER
          </p>

          <h2>
            Summer Flash Sale
          </h2>

          <span>
            Save up to 50% on selected products.
          </span>

          <button type="button">
            Shop Sale →
          </button>

        </div>

        <div className="sale-percent">
          50%
        </div>

      </section>

      <section className="newsletter">

        <p className="eyebrow">
          STAY UPDATED
        </p>

        <h2>
          Get the latest from Veezro
        </h2>

        <p>
          Subscribe for new products, exclusive
          offers and special discounts.
        </p>

        <div className="email-box">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="button">
            Subscribe
          </button>

        </div>

      </section>

      <footer>

        <div className="footer-brand">

          <div className="logo">
            Vee<span>zro</span>
          </div>

          <p>
            Your modern online marketplace for
            quality products and great deals.
          </p>

        </div>

        <div>

          <h4>Shop</h4>

          <a href="#shop">All Products</a>
          <a href="#categories">Categories</a>
          <a href="#shop">New Arrivals</a>
          <a href="#offers">Special Offers</a>

        </div>

        <div>

          <h4>Customer</h4>

          <a href="#shop">My Account</a>
          <a href="#shop">Orders</a>
          <a href="#shop">Wishlist</a>
          <a href="#shop">Help Center</a>

        </div>

        <div>

          <h4>Contact</h4>

          <a href="mailto:support@veezro.com">
            support@veezro.com
          </a>

          <a href="#shop">
            Customer Support
          </a>

          <a href="#shop">
            Shipping Information
          </a>

        </div>

      </footer>

      <div className="copyright">
        © 2026 Veezro. All rights reserved.
      </div>

      {showCart && (

        <div
          className="cart-overlay"
          onClick={() => setShowCart(false)}
        >

          <div
            className="cart-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">

              <h2>
                Shopping Cart
              </h2>

              <button
                type="button"
                onClick={() => setShowCart(false)}
              >
                ✕
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <div>
                  🛒
                </div>

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add products to your cart to continue.
                </p>

                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item, index) => (

                    <div
                      className="cart-item"
                      key={`${item.id}-${index}`}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            fallbackImages[item.category] ||
                            fallbackImages.Fashion;
                        }}
                      />

                      <div className="cart-item-info">

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          {item.category}
                        </p>

                        <strong>
                          $
                          {(
                            item.price *
                            (item.quantity || 1)
                          ).toFixed(2)}
                        </strong>

                        <div className="cart-actions">

                          <div className="quantity-control">

                            <button
                              type="button"
                              onClick={() => {
                                if (
                                  (item.quantity || 1) > 1
                                ) {
                                  setCart(
                                    cart.map(
                                      (cartItem, i) =>
                                        i === index
                                          ? {
                                              ...cartItem,
                                              quantity:
                                                (cartItem.quantity ||
                                                  1) - 1,
                                            }
                                          : cartItem
                                    )
                                  );
                                }
                              }}
                            >
                              −
                            </button>

                            <span>
                              {item.quantity || 1}
                            </span>

                            <button
                              type="button"
                              onClick={() => {
                                setCart(
                                  cart.map(
                                    (cartItem, i) =>
                                      i === index
                                        ? {
                                            ...cartItem,
                                            quantity:
                                              (cartItem.quantity ||
                                                1) + 1,
                                          }
                                        : cartItem
                                  )
                                );
                              }}
                            >
                              +
                            </button>

                          </div>

                          <button
                            type="button"
                            className="remove-cart-item"
                            onClick={() => {
                              setCart(
                                cart.filter(
                                  (_, i) => i !== index
                                )
                              );
                            }}
                          >
                            🗑 Remove
                          </button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="cart-summary">

                  <div>

                    <span>
                      Total
                    </span>

                    <strong>
                      ${cartTotal.toFixed(2)}
                    </strong>

                  </div>

                  <button
                    type="button"
                    className="checkout-btn"
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                  >
                    Proceed to Checkout →
                  </button>

                </div>

              </>

            )}

          </div>

        </div>

      )}

      {showCheckout && (

        <div
          className="cart-overlay"
          onClick={() => setShowCheckout(false)}
        >

          <div
            className="cart-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">

              <h2>
                Checkout
              </h2>

              <button
                type="button"
                onClick={() => setShowCheckout(false)}
              >
                ✕
              </button>

            </div>

            <div className="checkout-content">

              <h3>
                Customer Information
              </h3>

              <input
                type="text"
                placeholder="Full Name"
                className="checkout-input"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="checkout-input"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="checkout-input"
              />

              <textarea
                placeholder="Delivery Address"
                className="checkout-input"
                rows="4"
              />

              <div className="checkout-total">

                <span>
                  Order Total
                </span>

                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>

              </div>

              <div className="payment-box">

                <h3>
                  Payment
                </h3>

                <p>
                  Scan the QR code below to complete
                  your payment.
                </p>

                <img
                  src="/payment-qr.jpg"
                  alt="Payment QR Code"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "contain",
                  }}
                />

                <p className="payment-note">
                  After payment, submit your order
                  details.
                </p>

              </div>

              <button
                type="button"
                className="checkout-btn"
                onClick={() => {
                  alert(
                    "Order submitted successfully! Payment verification is pending."
                  );

                  setShowCheckout(false);
                  setCart([]);
                }}
              >
                Place Order →
              </button>

            </div>

          </div>

        </div>

      )}

      {showAddProduct && selectedShop && (

        <div
          className="cart-overlay"
          onClick={() => setShowAddProduct(false)}
        >

          <div
            className="cart-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">

              <h2>
                Add Product
              </h2>

              <button
                type="button"
                onClick={() => setShowAddProduct(false)}
              >
                ✕
              </button>

            </div>

            <form
              className="checkout-content"
              onSubmit={addProduct}
            >

              <p
                style={{
                  color: "#666",
                  marginBottom: "18px",
                }}
              >
                Adding product to{" "}
                <strong>
                  {selectedShopData?.name}
                </strong>
              </p>

              <input
                className="checkout-input"
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    name: e.target.value,
                  })
                }
              />

              <input
                className="checkout-input"
                type="number"
                step="0.01"
                placeholder="Price in USD"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  })
                }
              />

              <select
                className="checkout-input"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    category: e.target.value,
                  })
                }
              >

                {categories
                  .filter(
                    (category) =>
                      category.name !== "All"
                  )
                  .map((category) => (

                    <option
                      key={category.name}
                      value={category.name}
                    >
                      {category.name}
                    </option>

                  ))}

              </select>

              <input
                className="checkout-input"
                type="text"
                placeholder="Product Image URL (optional)"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    image: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                className="checkout-btn"
              >
                Add Product →
              </button>

            </form>

          </div>

        </div>

      )}

      {showQR && selectedShopData && (

        <div
          className="cart-overlay"
          onClick={() => setShowQR(false)}
        >

          <div
            className="cart-panel"
            style={{
              maxWidth: "420px",
            }}
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">

              <h2>
                {selectedShopData.name} QR
              </h2>

              <button
                type="button"
                onClick={() => setShowQR(false)}
              >
                ✕
              </button>

            </div>

            <div
              style={{
                textAlign: "center",
                padding: "20px 0",
              }}
            >

              <p
                style={{
                  color: "#666",
                  marginBottom: "20px",
                }}
              >
                Scan this QR code to open{" "}
                <strong>
                  {selectedShopData.name}
                </strong>
              </p>

              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                  `${window.location.origin}${window.location.pathname}?shop=${selectedShopData.id}`
                )}`}
                alt={`${selectedShopData.name} QR code`}
                style={{
                  width: "220px",
                  height: "220px",
                  display: "block",
                  margin: "0 auto 20px",
                }}
              />

              <p
                style={{
                  fontSize: "12px",
                  color: "#888",
                  wordBreak: "break-all",
                }}
              >
                {window.location.origin}
                {window.location.pathname}?shop=
                {selectedShopData.id}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;