import Image from "next/image";
import SwirlBackground from "../components/SwirlBackground";

export default function Home() {
  return (
    <>
      <SwirlBackground />
      <div className="font-sans h-screen w-screen p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-w-7xl">
          {/* Bento Box Container - Exact tile order from image */}
          <div className="grid grid-cols-12 gap-3 md:gap-4 h-full w-full">
            
            {/* Left sidebar with BOND logo and NEW ORDER */}
            <div className="col-span-3 flex flex-col gap-3 md:gap-4 h-full">
              {/* BOND logo tile */}
              <div className="bg-black/30 backdrop-blur-md border border-blue-500/30 border-white/10 rounded-3xl p-4 shadow-lg flex flex-col transition-all hover:border-blue-400/50">
                <div className="flex flex-col gap-3">
                  <div className="text-white text-2xl font-mono font-bold tracking-widest">
                    BOND
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/unicorn.png" width={24} height={24} alt="Logo" className="rounded-full" />
                    <Image src="/ethereum.png" width={24} height={24} alt="Logo" className="rounded-full" />
                    <span className="text-white/70 text-xs font-mono ml-2">Ethereum Mainnet ▼</span>
                  </div>
                </div>
              </div>
              
              {/* NEW ORDER tile */}
              <div className="bg-black/30 backdrop-blur-md border border-blue-500/30 border-white/10 rounded-3xl p-4 shadow-lg flex flex-col transition-all hover:border-blue-400/50 flex-grow">
                <div className="text-white text-xl font-mono tracking-widest">
                  NEW ORDER
                </div>
                <div className="flex-grow">
                  {/* Order form content */}
                </div>
              </div>
              
              {/* PLACE ORDER button outside the tile */}
              <button className="w-full py-3 px-4 bg-blue-900/90 text-white rounded-xl border-3 border-white/30 font-mono tracking-wider hover:bg-blue-800/50 transition-all flex items-center justify-center gap-2 shadow-lg">
                PLACE ORDER
                <span className="bg-white rounded-full p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9985 2L11.8844 2.39079V15.8761L11.9985 15.9901L18.5478 12.0366L11.9985 2Z" fill="#3b82f6"/>
                    <path d="M11.9985 2L5.44922 12.0366L11.9985 15.9901V9.47303V2Z" fill="#3b82f6"/>
                    <path d="M11.9985 17.3004L11.9341 17.3793V22.3297L11.9985 22.5L18.5514 13.349L11.9985 17.3004Z" fill="#3b82f6"/>
                    <path d="M11.9985 22.5V17.3004L5.44922 13.349L11.9985 22.5Z" fill="#3b82f6"/>
                    <path d="M11.9985 15.9901L18.5478 12.0366L11.9985 9.47303V15.9901Z" fill="#3b82f6" opacity="0.8"/>
                    <path d="M5.44922 12.0366L11.9985 15.9901V9.47303L5.44922 12.0366Z" fill="#3b82f6" opacity="0.6"/>
                  </svg>
                </span>
              </button>
            </div>
            
            {/* Main large panel - Center */}
            <div className="col-span-6 grid grid-rows-6 gap-3 md:gap-4 h-full">
              {/* Top main panel - Further reduced from 4 rows to 3 rows */}
              <div className="row-span-3 bg-black/30 backdrop-blur-md border border-blue-500/30 border-white/10 rounded-3xl p-3 md:p-4 shadow-lg transition-all hover:border-blue-400/50 overflow-hidden">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <div className="text-white text-xl font-mono font-bold tracking-wider">
                      BOND
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-500/20 text-white border border-blue-400/30 rounded-full text-xs font-mono">
                    MAINNET
                  </span>
                </div>
                <div className="mb-1">
                  <h3 className="text-2xl font-bold text-white">
                    $58,245.30
                  </h3>
                  <p className="text-xs text-white/70">Updated 2 minutes ago</p>
                </div>
                <div className="h-20 sm:h-24 bg-black/20 border border-blue-500/20 rounded-2xl mb-1 overflow-hidden">
                  {/* Placeholder for chart */}
                  <div className="w-full h-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20"></div>
                </div>
                <div className="flex justify-between text-xs text-white/80 font-mono">
                  <div>
                    <p>24h Volume</p>
                    <p className="font-semibold">$32.4B</p>
                  </div>
                  <div>
                    <p>Market Cap</p>
                    <p className="font-semibold">$1.1T</p>
                  </div>
                  <div>
                    <p>Circulating Supply</p>
                    <p className="font-semibold">19.2M BTC</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom small panel */}
              <div className="row-span-3 bg-black/30 backdrop-blur-md border border-blue-500/30 border-white/10 rounded-3xl p-3 md:p-4 shadow-lg transition-all hover:border-blue-400/50">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white text-lg font-mono font-bold tracking-wider">
                    MARKET DATA
                  </div>
                  <span className="px-2 py-0.5 bg-blue-500/20 text-white border border-blue-400/30 rounded-full text-xs font-mono">
                    LIVE
                  </span>
                </div>
                {/* <div className="h-full max-h-[calc(100%-2rem)] bg-black/20 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 flex items-center justify-center">
                    <div className="text-white/50 text-sm font-mono">MARKET ANALYSIS</div>
                  </div>
                </div> */}
              </div>
            </div>
            
            {/* Right sidebar - Account and History */}
            <div className="col-span-3 grid grid-rows-6 gap-3 md:gap-4 h-full">
              {/* ACCOUNT panel - Height significantly reduced */}
              <div className="row-span-1 bg-black/30 backdrop-blur-md border border-blue-500/30 border-white/10 rounded-3xl p-1 shadow-lg transition-all hover:border-blue-400/50 flex flex-col">
                <div className="text-center">
                  <h2 className="font-mono text-white tracking-widest text-xs">ACCOUNT</h2>
                </div>
              </div>
              
              {/* HISTORY panel - Height increased */}
              <div className="row-span-5 bg-black/30 backdrop-blur-md border border-blue-500/30 border-white/10 rounded-3xl p-3 md:p-4 shadow-lg transition-all hover:border-blue-400/50 flex flex-col">
                <div className="text-center mb-2">
                  <h2 className="font-mono text-white tracking-widest">HISTORY</h2>
                </div>
                <div className="flex-grow overflow-y-auto">
                  {/* History content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
