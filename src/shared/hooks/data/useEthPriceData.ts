import { useState, useEffect } from "react";

export interface EthPricePoint {
  timestamp: number;
  price: number;
}

export interface EthPriceData {
  currentPrice: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  priceHistory: EthPricePoint[];
}

const mockEthPriceData: EthPriceData = {
  currentPrice: 3245.67,
  priceChange24h: 87.43,
  priceChangePercentage24h: 2.77,
  priceHistory: [
    { timestamp: Date.now() - 24 * 60 * 60 * 1000, price: 3158.24 },
    { timestamp: Date.now() - 20 * 60 * 60 * 1000, price: 3186.12 },
    { timestamp: Date.now() - 16 * 60 * 60 * 1000, price: 3201.45 },
    { timestamp: Date.now() - 12 * 60 * 60 * 1000, price: 3167.89 },
    { timestamp: Date.now() - 8 * 60 * 60 * 1000, price: 3189.34 },
    { timestamp: Date.now() - 4 * 60 * 60 * 1000, price: 3223.56 },
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
            'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=hourly'
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
          const priceChange24h = currentPrice - previousPrice;
          const priceChangePercentage24h = previousPrice > 0 ? (priceChange24h / previousPrice) * 100 : 0;

          setData({
            currentPrice,
            priceChange24h,
            priceChangePercentage24h,
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