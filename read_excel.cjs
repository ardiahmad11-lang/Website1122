const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL_PATH = 'C:\\Users\\AHMAD - ALWY\\Downloads\\katalog surya herbal.xlsx';
const DB_PATH = path.join(__dirname, 'db.json');
const JS_DATA_PATH = path.join(__dirname, 'src', 'data', 'products.js');

try {
  console.log('📖 Membaca file Excel...');
  const workbook = xlsx.readFile(EXCEL_PATH);
  const sheet_name_list = workbook.SheetNames;
  const excelData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  
  console.log('📖 Membaca database saat ini (db.json)...');
  let currentDb = { products: [], categories: [], ingredients: [] };
  if (fs.existsSync(DB_PATH)) {
    currentDb = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  }

  const existingProducts = currentDb.products || [];
  
  const defaultImages = [
    "/products/vco.png",
    "/products/capsule.png",
    "/products/syrup.png",
    "https://images.unsplash.com/photo-1615485290382-441e4d019cb5?auto=format&fit=crop&q=80&w=800",
  ];

  const newProducts = excelData.map((item, index) => {
    // Cari produk yang sudah ada berdasarkan ID atau Nama (case-insensitive)
    const existing = existingProducts.find(p => 
      p.id === item.ID || 
      p.name.toLowerCase().trim() === item.Nama.toLowerCase().trim()
    );

    const productId = item.ID || (existing ? existing.id : index + 100);
    
    return {
      id: productId,
      name: item.Nama,
      category: item.Kategori || (existing ? existing.category : "Umum"),
      description: existing ? existing.description : `Produk berkualitas ${item.Nama} dari kategori ${item.Kategori}.`,
      price: item.Harga || 0,
      rating: existing ? existing.rating : parseFloat((4 + Math.random()).toFixed(1)),
      reviews: existing ? existing.reviews : Math.floor(Math.random() * 50) + 5,
      image: existing ? existing.image : defaultImages[index % defaultImages.length],
      tags: existing ? existing.tags : (item.Stok > 10 ? ["Populer"] : []),
      ingredients: existing ? existing.ingredients : [],
      stock: item.Stok || 0,
      status: item.Stok > 0 ? "In Stock" : "Out of Stock",
      variations: [
        { size: item.Ukuran || "1 Pcs", price: item.Harga || 0 }
      ]
    };
  });

  // Perbarui kategori unik
  const categories = [...new Set(newProducts.map(p => p.category))].map((name, i) => ({
    id: i + 1,
    name: name
  }));

  // Update db.json
  const updatedDb = {
    ...currentDb,
    products: newProducts,
    categories: categories
  };

  fs.writeFileSync(DB_PATH, JSON.stringify(updatedDb, null, 2));
  console.log('✅ db.json berhasil diperbarui');

  // Update src/data/products.js (untuk kompatibilitas)
  const categoriesList = categories.map(c => c.name);
  const fileContent = `export const CATEGORIES = ${JSON.stringify(categoriesList, null, 2)};
export const INGREDIENTS = ${JSON.stringify(currentDb.ingredients || [], null, 2)};

export const products = ${JSON.stringify(newProducts, null, 2)};
`;

  fs.writeFileSync(JS_DATA_PATH, fileContent);
  console.log('✅ src/data/products.js berhasil diperbarui');

} catch (error) {
  console.error("❌ Terjadi kesalahan:", error);
}
