"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  {
    product: "Soybeans (SSBS)",
    quantity: "2003",
    bidPrice: "1736.92",
    offerPrice: "1736.92",
  },
  {
    product: "Paddy Rice (SPRL)",
    quantity: "11293",
    bidPrice: "3627.00",
    offerPrice: "3627.00",
  },
  {
    product: "Maize (SMAZ)",
    quantity: "1832",
    bidPrice: "8294.01",
    offerPrice: "8294.01",
  },
  {
    product: "Sorghum (SSGM)",
    quantity: "29102",
    bidPrice: "8192.00",
    offerPrice: "8192.00",
  },
  {
    product: "Fair Trade ETC (FETC)",
    quantity: "3212",
    bidPrice: "1736.92",
    offerPrice: "1736.92",
  },
]

export function OrderBook() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Bid Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
            <TableHead className="text-right">Offer Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.product}>
              <TableCell>{order.product}</TableCell>
              <TableCell className="text-right">{order.quantity}</TableCell>
              <TableCell className="text-right text-green-600">{order.bidPrice}</TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="outline" className="text-green-600">
                  Buy
                </Button>
              </TableCell>
              <TableCell className="text-right text-red-600">{order.offerPrice}</TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="outline" className="text-red-600">
                  Sell
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

