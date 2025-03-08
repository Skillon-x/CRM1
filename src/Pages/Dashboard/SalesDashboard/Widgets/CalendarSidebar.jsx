import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";
import { Search, Plus } from "lucide-react";

const people = [
  { name: "Eddie Lobanovskiy", email: "laboanovskiy@gmail.com", avatar: "/eddie.png" },
  { name: "Alexey Stave", email: "alexeyst@gmail.com", avatar: "/alexey.png" },
  { name: "Anton Tkachev", email: "tkacheveanton@gmail.com", avatar: "/anton.png" },
];

export default function CalendarSidebar() {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSchedule = () => {
    if (selectedDate) {
      alert(`Schedule created for ${selectedDate.toDateString()}`);
    } else {
      alert("Please select a date to create a schedule.");
    }
  };

  return (
    <motion.div 
      className="w-full md:w-96 h-full bg-[#081028] p-6 text-white flex flex-col gap-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Create Schedule Button */}
      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white" onClick={handleSchedule}>
        <Plus className="mr-2" /> Create Schedule
      </Button>

      {/* Calendar */}
      <Card className="bg-[#0B1739] p-4">
        <CardContent>
          <Calendar 
            className="text-white" 
            mode="single" 
            selected={selectedDate} 
            onSelect={setSelectedDate} 
            modifiers={{ selected: selectedDate }}
            modifiersClassNames={{ selected: "bg-purple-500 text-white rounded-full" }}
          />
        </CardContent>
      </Card>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        <Input 
          className="bg-[#0B1739] text-white pl-10 py-2" 
          placeholder="Search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      {/* People List */}
      <div>
        <h3 className="text-lg font-semibold mb-2">People</h3>
        <div className="flex flex-col gap-3">
          {filteredPeople.length > 0 ? (
            filteredPeople.map((person, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 bg-[#0B1739] p-3 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                <div>
                  <p className="text-sm font-medium">{person.name}</p>
                  <p className="text-xs text-gray-400">{person.email}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No results found</p>
          )}
        </div>
      </div>

      {/* My Schedule Button */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button variant="outline" className="w-full border-purple-500 text-purple-500">
          My Schedule
        </Button>
      </motion.div>
    </motion.div>
  );
}