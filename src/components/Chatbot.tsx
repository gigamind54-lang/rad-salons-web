"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
    text: string;
    sender: "user" | "bot";
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hi! Welcome to Rad Salons. How can I help you today?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
        setInput("");

        // Simulate bot response
        setTimeout(() => {
            let botResponse = "Thank you for your message. Our team will assist you shortly.";
            const lowerInput = userMessage.toLowerCase();

            if (lowerInput.includes("price") || lowerInput.includes("cost")) {
                botResponse = "Our pricing varies by service. Haircuts start at $50, and facials at $80. Would you like to see the full menu?";
            } else if (lowerInput.includes("book") || lowerInput.includes("appointment")) {
                botResponse = "You can book an appointment directly through our 'Book Now' button at the top of the page, or call us at (555) 123-4567.";
            } else if (lowerInput.includes("location") || lowerInput.includes("where")) {
                botResponse = "We are located at 123 Luxury Lane, Beverly Hills, CA.";
            } else if (lowerInput.includes("hour") || lowerInput.includes("open")) {
                botResponse = "We are open Monday-Saturday from 9 AM to 8 PM.";
            }

            setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-gold text-black p-4 rounded-full shadow-lg hover:bg-gold-light transition-transform hover:scale-110 animate-bounce"
                >
                    <MessageCircle size={28} />
                </button>
            )}

            {isOpen && (
                <div className="bg-black border border-gold/30 rounded-lg shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] overflow-hidden">
                    {/* Header */}
                    <div className="bg-gold p-4 flex justify-between items-center">
                        <h3 className="text-black font-bold font-serif">Rad Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-black hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === "user"
                                            ? "bg-gold text-black rounded-br-none"
                                            : "bg-zinc-800 text-white border border-white/10 rounded-bl-none"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-black border-t border-white/10 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type a message..."
                            className="flex-1 bg-zinc-900 text-white border border-white/20 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-gold text-black p-2 rounded-md hover:bg-gold-light transition-colors"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
