"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const trades = [
  {
    security: "Soybeans (SSBS)",
    board: "X-Traded",
    orderType: "Buy",
    matchedPrice: "1792.65",
    quantity: "9265",
    date: "17 Oct, 2020",
    time: "07:38",
  },
  {
    security: "Paddy Rice (SPRL)",
    board: "X-Traded",
    orderType: "Buy",
    matchedPrice: "1792.65",
    quantity: "9265",
    date: "8 Sep, 2020",
    time: "02:32",
  },
  {
    security: "Maize (SMAZ)",
    board: "OTC",
    orderType: "Sell",
    matchedPrice: "1792.65",
    quantity: "9265",
    date: "24 May, 2020",
    time: "06:42",
  },
  {
    security: "Sorghum (SSGM)",
    board: "FI",
    orderType: "Sell",
    matchedPrice: "1792.65",
    quantity: "9265",
    date: "1 Feb, 2020",
    time: "01:59",
  },
]

export function TradeLog() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">TRADE LOG</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Security</TableHead>
            <TableHead>Board</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="text-right">Matched Price</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={`${trade.security}-${trade.date}-${trade.time}`}>
              <TableCell>{trade.security}</TableCell>
              <TableCell>{trade.board}</TableCell>
              <TableCell className={trade.orderType === "Buy" ? "text-green-600" : "text-red-600"}>
                {trade.orderType}
              </TableCell>
              <TableCell className="text-right">{trade.matchedPrice}</TableCell>
              <TableCell className="text-right">{trade.quantity}</TableCell>
              <TableCell>{trade.date}</TableCell>
              <TableCell>{trade.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

