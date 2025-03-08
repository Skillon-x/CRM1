import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const initialProducts = [
  { name: "D3200", category: "ID CARD", quality: "High", colleges: "MIT", progress: 80 },
  { name: "X200", category: "WORK SHOP", quality: "Medium", colleges: "MYCEM", progress: 30 },
  { name: "SH40", category: "IOT", quality: "Low", colleges: "VVIT", progress: 90 },
  { name: "M500", category: "ID CARD", quality: "Top", colleges: "VIT", progress: 60 },
  { name: "XPR", category: "PROJECT", quality: "Low", colleges: "MIT", progress: 45 },
  { name: "P200", category: "ID CARD", quality: "Medium", colleges: "VVIT", progress: 30 },
  { name: "T900", category: "IOT", quality: "Premium", colleges: "JSS", progress: 90 },
];

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [open, setOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [productData, setProductData] = useState({ name: "", category: "", quality: "", colleges: "", progress: 0 });

  const handleDelete = (index) => setProducts(products.filter((_, i) => i !== index));

  const handleAddOrEditProduct = () => {
    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = productData;
      setProducts(updatedProducts);
    } else {
      setProducts([...products, productData]);
    }
    setOpen(false);
    setEditingIndex(null);
    setProductData({ name: "", category: "", quality: "", colleges: "", progress: 0 });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setProductData(products[index]);
    setOpen(true);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-[#0B1739] text-white shadow-xl p-6 rounded-2xl">
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Product List</h2>
            <Button onClick={() => setOpen(true)} className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md">
              <Plus size={16} /> <span>Add New Product</span>
            </Button>
          </div>

          <div className="relative mb-6 w-full md:w-1/2">
            <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
            <Input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-2 bg-[#111A40] text-white rounded-md border-none focus:ring-0 w-full"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-400 border-b border-gray-600">
                <tr>
                  <th className="py-3 px-4"><Checkbox /></th>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Quality</th>
                  <th className="py-3 px-4">Colleges</th>
                  <th className="py-3 px-4">Progress</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <motion.tr key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="border-b border-gray-700 hover:bg-[#121C48] transition">
                    <td className="py-4 px-4"><Checkbox /></td>
                    <td className="py-4 px-4">{product.name}</td>
                    <td className="py-4 px-4">{product.category}</td>
                    <td className="py-4 px-4">{product.quality}</td>
                    <td className="py-4 px-4">{product.colleges}</td>
                    <td className="py-4 px-4">
                      <div className="relative w-full bg-gray-700 h-2 rounded">
                        <div
                          className="absolute left-0 top-0 h-2 bg-blue-500 rounded"
                          style={{ width: `${product.progress}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 flex space-x-2">
                      <Pencil size={16} onClick={() => handleEdit(index)} className="text-blue-400 cursor-pointer hover:text-blue-300" />
                      <Trash2 size={16} onClick={() => handleDelete(index)} className="text-red-400 cursor-pointer hover:text-red-300" />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingIndex !== null ? "Edit Product" : "Add New Product"}</DialogTitle>
          </DialogHeader>
          <Input placeholder="Product Name" value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} className="mb-2" />
          <Input placeholder="Category" value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value })} className="mb-2" />
          <Input placeholder="Quality" value={productData.quality} onChange={(e) => setProductData({ ...productData, quality: e.target.value })} className="mb-2" />
          <Button onClick={handleAddOrEditProduct} className="bg-green-600 hover:bg-green-500 text-white">{editingIndex !== null ? "Save Changes" : "Add Product"}</Button>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProductList;
