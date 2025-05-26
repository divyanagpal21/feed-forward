
import React from 'react';
import { MarketplaceCardsPage } from "@/components/marketplace/MarketplaceCardsPage";
import { Separator } from "@/components/ui/separator";
import { IndianRupee, Recycle, ShoppingCart, TreePine } from "lucide-react";
import { motion } from "framer-motion";
import { CartDrawer } from "@/components/marketplace/CartDrawer";

const EcoMarketplacePage = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-8"
        >
          <div className="flex justify-center">
            <div className="p-3 bg-green-100 rounded-full">
              <TreePine className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Eco-Friendly Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Support sustainability by purchasing eco-friendly products from our partners and sponsors
          </p>
        </motion.div>
        <CartDrawer />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center gap-2 mb-2">
            <Recycle className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-green-800">Sustainable Choices</h3>
          </div>
          <p className="text-sm text-green-700">
            Every purchase from our marketplace supports sustainable practices and reduces waste in our communities.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center gap-2 mb-2">
            <IndianRupee className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-green-800">Dual Currency Options</h3>
          </div>
          <p className="text-sm text-green-700">
            Choose to pay with traditional currency or use your earned FeedCoins to purchase products at special rates.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center gap-2 mb-2">
            <TreePine className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-green-800">Environmental Impact</h3>
          </div>
          <p className="text-sm text-green-700">
            Each product's environmental impact is transparently displayed, helping you make informed decisions.
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      <MarketplaceCardsPage />
    </div>
  );
};

export default EcoMarketplacePage;
