export function MarketTicker() {
  const tickers = [
    { name: "SoyBean (SBBS)", price: "₦20,634.59" },
    { name: "Sorghum (SSGM)", price: "₦20,634.59" },
    { name: "Maize (SMAZ)", price: "₦20,634.59" },
    { name: "Paddy Rice (SPRL)", price: "₦20,634.59" },
    { name: "Cocoa (SCOC)", price: "₦20,634.59" },
  ]

  return (
    <div className="bg-black text-white p-2 flex gap-8 overflow-x-auto whitespace-nowrap">
      <div className="font-semibold">Live Market</div>
      {tickers.map((ticker) => (
        <div key={ticker.name} className="flex gap-2">
          <span>{ticker.name}</span>
          <span>{ticker.price}</span>
        </div>
      ))}
    </div>
  )
}

