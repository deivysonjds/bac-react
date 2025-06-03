"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import GameBoard from '../components/GameBoard';
import Instructions from '../components/Instructions';
import useGameStore from '../store/useGameStore';
import StatsPanel from '../components/StatsPanel';

export default function Home() {
  const initializeGame = useGameStore((state) => state.initializeGame);
  
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Head>
        <title>Bulls and Cows</title>
        <meta name="description" content="Um jogo clássico de quebra de códigos com um toque moderno" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GameBoard />
          </div>
          
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <StatsPanel />
              <Instructions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}