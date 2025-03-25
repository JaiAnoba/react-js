
import React, { useEffect } from 'react';
import Navbar from '@/pages/Navbar';
import Hero from '@/pages/Hero';
import PopularArtists from '@/pages/PopularArtists';
import ExploreArtworks from '@/pages/ExploreArtworks';
import AuctionFeature from '@/pages/AuctionFeature';
import HotBidsCarousel from '@/pages/HotBidsCarousel';
import Footer from '@/pages/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <PopularArtists />
        <ExploreArtworks />
        <AuctionFeature />
        <HotBidsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
