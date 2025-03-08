import React, { useState } from "react";
import { motion } from "framer-motion";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Eye, Edit, Trash, ChevronLeft, ChevronRight, Download } from "lucide-react";

const initialOrders = [
    { id: "021231", name: "ID Cards", customer: "Leslie Alexander", price: "$21.78", date: "04/17/23", status: "Paid" },
    { id: "021232", name: "IOT", customer: "Leslie Alexander", price: "$21.78", date: "04/17/23", status: "Pending" },
    { id: "021233", name: "English", customer: "Leslie Alexander", price: "$21.78", date: "04/17/23", status: "Paid" },
    { id: "021234", name: "Work Shop", customer: "Leslie Alexander", price: "$21.78", date: "04/17/23", status: "Paid" },
    { id: "021235", name: "Hakothon", customer: "Leslie Alexander", price: "$21.78", date: "04/17/23", status: "Pending" },
];

export default function OrderTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [orders, setOrders] = useState(initialOrders);

    const filteredOrders = orders.filter(order =>
        order.id.includes(searchQuery) ||
        order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleExport = () => {
        const csvContent = [
            ["Orders", "Customer", "Price", "Date", "Payment"],
            ...orders.map(order => [order.id, order.customer, order.price, order.date, order.status])
        ].map(e => e.join(",")).join("\n");
        
        const blob = new Blob([csvContent], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "orders.csv";
        link.click();
    };

    const handleDelete = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    const handleView = (order) => {
        alert(`Order Details:\nID: ${order.id}\nName: ${order.name}\nCustomer: ${order.customer}\nPrice: ${order.price}\nDate: ${order.date}\nStatus: ${order.status}`);
    };

    const handleEdit = (id) => {
        const newName = prompt("Enter new product name:");
        if (newName) {
            setOrders(orders.map(order => order.id === id ? { ...order, name: newName } : order));
        }
    };

    const handleFilter = () => {
        alert("Filter functionality coming soon!");
    };

    return (
        <div className="p-6 bg-[#081028] text-white rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <Input 
                        placeholder="Search for id, name product" 
                        className="pl-10 w-72 bg-[#0B1739] border-none text-white" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" className="bg-[#0B1739] text-white" onClick={handleFilter}>
                        <Filter className="mr-2" size={16} /> Filter
                    </Button>
                    <Button variant="outline" className="bg-[#0B1739] text-white" onClick={handleExport}>
                        <Download className="mr-2" size={16} /> Export
                    </Button>
                </div>
            </div>
            <Table className="border border-gray-700 rounded-lg overflow-hidden">
                <TableHeader className="bg-[#0B1739] text-gray-300">
                    <TableRow>
                        <TableHead>Orders</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredOrders.map((order, index) => (
                        <motion.tr key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                            <TableCell className="text-blue-400">{order.id} <br /> {order.name}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                                <Badge className={order.status === "Paid" ? "bg-green-500" : "bg-yellow-500 text-black"}>{order.status}</Badge>
                            </TableCell>
                            <TableCell className="flex space-x-2">
                                <Eye size={18} className="cursor-pointer text-gray-400 hover:text-white" onClick={() => handleView(order)} />
                                <Edit size={18} className="cursor-pointer text-gray-400 hover:text-white" onClick={() => handleEdit(order.id)} />
                                <Trash size={18} className="cursor-pointer text-gray-400 hover:text-red-500" onClick={() => handleDelete(order.id)} />
                            </TableCell>
                        </motion.tr>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4 text-gray-400">
                <span>1 - 10 of {orders.length} Orders</span>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" className="bg-[#0B1739] text-white">
                        <ChevronLeft size={16} />
                    </Button>
                    <Button variant="outline" className="bg-[#0B1739] text-white">
                        <ChevronRight size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
