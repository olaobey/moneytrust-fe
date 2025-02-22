import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { MarketHeader } from "@/components/dashboard/market-hearder"
import { OrderBook } from "@/components/dashboard/order-book"
import { TradeLog } from "@/components/dashboard/trade-log"
import { MarketTicker } from "@/components/dashboard/market-ticker"

export default function OrderBookPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 border-r min-h-screen">
          <SidebarNav />
        </aside>
        <main className="flex-1">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <div className="font-semibold">CASH BALANCE</div>
              <div>₦8,374,763</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-semibold">SECURITIES VALUE</div>
              <div>₦8,374,763</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-semibold">LOAN BALANCE</div>
              <div>₦7,542,246</div>
            </div>
          </div>
          <MarketHeader />
          <div className="p-4 space-y-6">
            <OrderBook />
            <TradeLog />
          </div>
        </main>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <MarketTicker />
      </div>
    </div>
  )
}

