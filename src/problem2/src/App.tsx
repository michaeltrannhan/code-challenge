import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, Loader2 } from "lucide-react";

interface TokenPrice {
  currency: string;
  date: string;
  price: number;
  logo?: string;
}

function App() {
  // const tokenPrices: TokenPrice[] = [
  //   {
  //     currency: "ETH",
  //     date: "2023-08-29T07:10:52.000Z",
  //     price: 1645.9337373737374,
  //     logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"
  //   },
  //   {
  //     currency: "WBTC",
  //     date: "2023-08-29T07:10:52.000Z",
  //     price: 26002.82202020202,
  //     logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png"
  //   },
  //   {
  //     currency: "USDC",
  //     date: "2023-08-29T07:10:40.000Z",
  //     price: 0.9998782611186441,
  //     logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
  //   },
  //   {
  //     currency: "USDT",
  //     date: "2023-08-29T07:10:40.000Z",
  //     price: 1,
  //     logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  //   }
  // ];

  const tokenPrices: TokenPrice[] = [
    {
      currency: "BLUR",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.20811525423728813,
    },
    {
      currency: "bNEO",
      date: "2023-08-29T07:10:50.000Z",
      price: 7.1282679,
    },
    {
      currency: "BUSD",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.999183113,
    },
    {
      currency: "BUSD",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.9998782611186441,
    },
    { currency: "USD", date: "2023-08-29T07:10:30.000Z", price: 1 },
    {
      currency: "ETH",
      date: "2023-08-29T07:10:52.000Z",
      price: 1645.9337373737374,
    },
    {
      currency: "GMX",
      date: "2023-08-29T07:10:40.000Z",
      price: 36.345114372881355,
    },
    {
      currency: "STEVMOS",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.07276706779661017,
    },
    {
      currency: "LUNA",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.40955638983050846,
    },
    {
      currency: "RATOM",
      date: "2023-08-29T07:10:40.000Z",
      price: 10.250918915254237,
    },
    {
      currency: "STRD",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.7386553389830508,
    },
    {
      currency: "EVMOS",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.06246181355932203,
    },
    {
      currency: "IBCX",
      date: "2023-08-29T07:10:40.000Z",
      price: 41.26811355932203,
    },
    {
      currency: "IRIS",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.0177095593220339,
    },
    {
      currency: "ampLUNA",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.49548589830508477,
    },
    { currency: "KUJI", date: "2023-08-29T07:10:45.000Z", price: 0.675 },
    {
      currency: "STOSMO",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.431318,
    },
    {
      currency: "USDC",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.989832,
    },
    {
      currency: "axlUSDC",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.989832,
    },
    {
      currency: "ATOM",
      date: "2023-08-29T07:10:50.000Z",
      price: 7.186657333333334,
    },
    {
      currency: "STATOM",
      date: "2023-08-29T07:10:45.000Z",
      price: 8.512162050847458,
    },
    {
      currency: "OSMO",
      date: "2023-08-29T07:10:50.000Z",
      price: 0.3772974333333333,
    },
    {
      currency: "rSWTH",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.00408771,
    },
    {
      currency: "STLUNA",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.44232210169491526,
    },
    {
      currency: "LSI",
      date: "2023-08-29T07:10:50.000Z",
      price: 67.69661525423729,
    },
    {
      currency: "OKB",
      date: "2023-08-29T07:10:40.000Z",
      price: 42.97562059322034,
    },
    {
      currency: "OKT",
      date: "2023-08-29T07:10:40.000Z",
      price: 13.561577966101694,
    },
    {
      currency: "SWTH",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.004039850455012084,
    },
    { currency: "USC", date: "2023-08-29T07:10:40.000Z", price: 0.994 },
    { currency: "USDC", date: "2023-08-29T07:10:30.000Z", price: 1 },
    { currency: "USDC", date: "2023-08-29T07:10:30.000Z", price: 1 },
    {
      currency: "USDC",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.9998782611186441,
    },
    {
      currency: "WBTC",
      date: "2023-08-29T07:10:52.000Z",
      price: 26002.82202020202,
    },
    {
      currency: "wstETH",
      date: "2023-08-29T07:10:40.000Z",
      price: 1872.2579742372882,
    },
    {
      currency: "YieldUSD",
      date: "2023-08-29T07:10:40.000Z",
      price: 1.0290847966101695,
    },
    {
      currency: "ZIL",
      date: "2023-08-29T07:10:50.000Z",
      price: 0.01651813559322034,
    },
  ];

  const [fromAmount, setFromAmount] = useState<string>("");
  const [fromToken, setFromToken] = useState<string>("");
  const [toToken, setToToken] = useState<string>("");
  const [calculatedAmount, setCalculatedAmount] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    const calculateAmount = async () => {
      if (!fromAmount || !fromToken || !toToken) {
        setCalculatedAmount("");
        return;
      }

      setIsCalculating(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const fromPrice =
        tokenPrices.find((t) => t.currency === fromToken)?.price || 0;
      const toPrice =
        tokenPrices.find((t) => t.currency === toToken)?.price || 0;

      if (fromPrice && toPrice) {
        const result = (parseFloat(fromAmount) * fromPrice) / toPrice;
        setCalculatedAmount(result.toFixed(6));
      } else {
        setCalculatedAmount("");
      }

      setIsCalculating(false);
    };

    calculateAmount();
  }, [fromAmount, fromToken, toToken]);

  const handleSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Swap</CardTitle>
          <CardDescription className="text-gray-400">
            Trade tokens instantly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* From Token */}
          <div className="rounded-lg bg-gray-900 p-4 space-y-3">
            <label className="text-sm font-medium text-gray-400">From</label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Select value={fromToken} onValueChange={setFromToken}>
                <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select token">
                    {fromToken && (
                      <div className="flex items-center gap-2">
                        <img
                          src={`${"/src/tokens"}/${fromToken}.svg`}
                          alt={fromToken}
                          className="w-5 h-5 rounded-full"
                          loading="lazy"
                        />
                        {fromToken}
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {tokenPrices.map((token) => (
                    <SelectItem
                      key={token.currency}
                      value={token.currency}
                      className="text-white hover:bg-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={`${"/src/tokens"}/${token.currency}.svg`}
                          alt={token.currency}
                          className="w-5 h-5 rounded-full"
                        />
                        {token.currency}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-800 border-4 border-gray-900 hover:bg-gray-700 z-10"
              onClick={handleSwap}
            >
              <ArrowDownUp className="h-4 w-4 text-red-400" />
            </Button>
          </div>

          {/* To Token */}
          <div className="rounded-lg bg-gray-900 p-4 space-y-3">
            <label className="text-sm font-medium text-gray-400">To</label>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="0.0"
                  value={calculatedAmount}
                  readOnly
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                {isCalculating && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                  </div>
                )}
              </div>
              <Select value={toToken} onValueChange={setToToken}>
                <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select token">
                    {toToken && (
                      <div className="flex items-center gap-2">
                        <img
                          src={`${"/src/tokens"}/${toToken}.svg`}
                          alt={toToken}
                          className="w-5 h-5 rounded-full"
                        />
                        {toToken}
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {tokenPrices.map((token) => (
                    <SelectItem
                      key={token.currency}
                      value={token.currency}
                      className="text-white hover:bg-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={`${"/src/tokens"}/${token.currency}.svg`}
                          alt={token.currency}
                          className="w-5 h-5 rounded-full"
                        />
                        {token.currency}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
