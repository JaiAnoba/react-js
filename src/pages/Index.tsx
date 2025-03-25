
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularArtists from '@/components/PopularArtists';
import ExploreArtworks from '@/components/ExploreArtworks';
import AuctionFeature from '@/components/AuctionFeature';
import HotBidsCarousel from '@/components/HotBidsCarousel';
import Footer from '@/components/Footer';

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
