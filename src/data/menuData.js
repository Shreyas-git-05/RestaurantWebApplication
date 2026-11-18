const groups = {
  Starters: ["Dahi Ke Kebab", "Paneer Tikka Achari", "Tandoori Mushroom", "Crispy Lotus Stem", "Aloo Tikki Chaat", "Palak Patta Chaat", "Hara Bhara Kebab", "Chilli Paneer", "Veg Galouti Kebab", "Corn Cheese Seekh", "Chicken 65", "Murgh Malai Tikka", "Lasooni Chicken Tikka", "Mutton Seekh Kebab", "Amritsari Fish Fry"],
  "Veg Main Course": ["Paneer Butter Masala", "Dal Makhani", "Palak Paneer", "Kadai Paneer", "Shahi Paneer", "Malai Kofta", "Methi Malai Mutter", "Navratan Korma", "Baingan Bharta", "Chana Masala", "Mushroom Do Pyaza", "Dum Aloo Banarasi", "Bhindi Kurkuri", "Subz Handi", "Paneer Lababdar"],
  "Non-Veg Main Course": ["Butter Chicken", "Chicken Tikka Masala", "Kadai Chicken", "Chicken Changezi", "Murgh Makhani", "Chicken Saagwala", "Chicken Chettinad", "Mutton Rogan Josh", "Laal Maas", "Mutton Keema Matar", "Nalli Nihari", "Mutton Korma", "Goan Prawn Curry", "Malabar Fish Curry", "Amritsari Macchi Curry", "Chicken Do Pyaza", "Mutton Saag", "Pepper Chicken Masala", "Egg Curry Dhaba Style", "Andhra Chicken Curry"],
  Biryanis: ["Signature Chicken Biryani", "Hyderabadi Dum Biryani", "Lucknowi Awadhi Biryani", "Mutton Dum Biryani", "Chicken Tikka Biryani", "Paneer Tikka Biryani", "Subz Dum Biryani", "Egg Biryani", "Prawn Biryani", "Gongura Chicken Biryani", "Kolkata Chicken Biryani", "Keema Biryani", "Mushroom Biryani", "Jackfruit Biryani", "Saffron Special Biryani"],
  Breads: ["Tandoori Roti", "Butter Naan", "Garlic Naan", "Cheese Naan", "Laccha Paratha", "Roomali Roti", "Missi Roti", "Peshawari Naan", "Kulcha Amritsari", "Jowar Bhakri"],
  Desserts: ["Gulab Jamun", "Rasmalai", "Shahi Tukda", "Gajar Ka Halwa", "Kulfi Falooda", "Mango Phirni", "Jalebi Rabri", "Chocolate Samosa", "Kesar Pista Kulfi", "Gulab Jamun Cheesecake"],
  Beverages: ["Masala Chai", "Mango Lassi", "Sweet Lassi", "Salted Lassi", "Nimbu Soda", "Jaljeera", "Filter Coffee", "Rose Sharbat", "Thandai", "Fresh Lime Water"],
  Specials: ["Chef's Royal Veg Thali", "Grand Nawabi Thali", "Tandoori Chicken Platter", "The Saffron Feast", "Sunday Mutton Potli"],
};
const prices = {Starters: [220,290,260,240,190,210,230,260,280,250,320,360,340,390,380], "Veg Main Course": [340,290,320,330,350,340,320,330,290,280,310,300,280,340,350], "Non-Veg Main Course": [390,410,390,420,400,380,420,490,520,460,590,480,470,450,430,390,490,390,280,410], Biryanis: [390,420,410,480,430,360,340,310,480,440,410,450,320,350,520], Breads: [65,85,110,155,120,90,95,160,130,100], Desserts: [160,190,210,190,220,190,210,240,220,290], Beverages: [95,180,140,140,120,110,130,150,180,100], Specials: [490,620,690,890,590]};
const images = {
  Starters: ["photo-1599487488170-d11ec9c172f0","photo-1567188040759-fb8a883dc6d8","photo-1603894584373-5ac82b2ae398"],
  "Veg Main Course": ["photo-1631452180519-c014fe946bc7","photo-1585937421612-70a008356fbe","photo-1603894584373-5ac82b2ae398"],
  "Non-Veg Main Course": ["photo-1603894584373-5ac82b2ae398","photo-1565557623262-b51c2513a641","photo-1585937421612-70a008356fbe"],
  Biryanis: ["photo-1563379091339-03246963d96c","photo-1633945274405-b6c8069047b0","photo-1642821373181-696a54913e93"],
  Breads: ["photo-1601050690597-df0568f70950","photo-1610057099431-d73a1c9d2f2f","photo-1574085733277-851d9d856a3a"],
  Desserts: ["photo-1578985545062-69928b1d9587","photo-1488477181946-6428a0291777","photo-1563805042-7684c019e1cb"],
  Beverages: ["photo-1517701604599-bb29b565090c","photo-1556679343-c7306c1976bc","photo-1513558161293-cdaf765edfd7"],
  Specials: ["photo-1546833999-b9f581a1996d","photo-1565557623262-b51c2513a641","photo-1563379091339-03246963d96c"]
};
const fallback = "photo-1546833999-b9f581a1996d";
export const categories = Object.keys(groups);
export const menuData = categories.flatMap((category) => groups[category].map((name, i) => {
  const veg = category === "Veg Main Course" || category === "Breads" || category === "Desserts" || category === "Beverages" || (category === "Starters" && i < 10) || (category === "Biryanis" && [5,6,12,13].includes(i)) || (category === "Specials" && i === 0);
  const id = `${category.toLowerCase().replaceAll(/[^a-z]/g, "-")}-${i+1}`;
  const desc = `${name} prepared in our signature ${i % 2 ? "clay oven" : "slow-cooked"} style with hand-ground spices, fresh seasonal ingredients and a touch of house-made saffron butter.`;
  return {id, name, description: desc, price: prices[category][i], category, type: veg ? "Veg" : "Non-Veg", image: `https://images.unsplash.com/${(images[category] || [fallback])[(i + Math.floor(i/3)) % (images[category] || [fallback]).length]}?auto=format&fit=crop&w=900&q=85`, rating: +(4.5 + ((i * 7 + category.length) % 5) / 10).toFixed(1), preparationTime: `${15 + (i % 4) * 5}-${25 + (i % 4) * 5} min`, bestseller: i === 0 || (i === 1 && category === "Biryanis"), available: true, ingredients: ["Basmati rice", "House spice blend", "Fresh herbs", "Seasonal produce"], spiceLevel: ["Mild", "Medium", "Bold"][i % 3]};
}));
