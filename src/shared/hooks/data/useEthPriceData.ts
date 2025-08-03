import { useState, useEffect } from "react";

export interface EthPricePoint {
  timestamp: number;
  price: number;
}

export interface EthPriceData {
  currentPrice: number;
  priceChange7d: number;
  priceChangePercentage7d: number;
  priceHistory: EthPricePoint[];
}

const mockEthPriceData: EthPriceData = {
  currentPrice: 3245.67,
  priceChange7d: 187.43,
  priceChangePercentage7d: 6.13,
  priceHistory: [
    { timestamp: Date.now() - 7 * 24 * 60 * 60 * 1000, price: 3058.24 },
    { timestamp: Date.now() - 6 * 24 * 60 * 60 * 1000, price: 3126.12 },
    { timestamp: Date.now() - 5 * 24 * 60 * 60 * 1000, price: 3101.45 },
    { timestamp: Date.now() - 4 * 24 * 60 * 60 * 1000, price: 3167.89 },
    { timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000, price: 3189.34 },
    { timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000, price: 3223.56 },
    { timestamp: Date.now() - 1 * 24 * 60 * 60 * 1000, price: 3234.12 },
    { timestamp: Date.now(), price: 3245.67 },
  ],
};

export const useEthPriceData = () => {
  const [data, setData] = useState<EthPriceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Try to fetch from CoinGecko API
        try {
          const response = await fetch(
            'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7&interval=daily'
          );
          
          if (!response.ok) {
            throw new Error('API request failed');
          }

          const apiData = await response.json();
          
          const priceHistory: EthPricePoint[] = apiData.prices.map(([timestamp, price]: [number, number]) => ({
            timestamp,
            price: Math.round(price * 100) / 100,
          }));

          const currentPrice = priceHistory[priceHistory.length - 1]?.price || 0;
          const previousPrice = priceHistory[0]?.price || 0;
          const priceChange7d = currentPrice - previousPrice;
          const priceChangePercentage7d = previousPrice > 0 ? (priceChange7d / previousPrice) * 100 : 0;

          setData({
            currentPrice,
            priceChange7d,
            priceChangePercentage7d,
            priceHistory,
          });
        } catch (apiError) {
          console.warn('Failed to fetch live data, using mock data:', apiError);
          // Fallback to mock data if API fails
          setData(mockEthPriceData);
        }
      } catch (err) {
        setError("Failed to load ETH price data");
        console.error("Error fetching ETH price data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEthPrice();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchEthPrice, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};