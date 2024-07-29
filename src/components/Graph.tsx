"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const chartData = [
  { month: "Jan", sales: 65 },
  { month: "Feb", sales: 59 },
  { month: "Mar", sales: 80 },
  { month: "Apr", sales: 81 },
  { month: "May", sales: 56 },
  { month: "Jun", sales: 55 },
  { month: "Jul", sales: 40 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "rgb(75, 192, 192)",
  },
} satisfies ChartConfig;

export const Graph: React.FC = () => {
  const title = "Monthly Sales";

  return (
    <Card className="w-full max-w-[350px] sm:max-w-[400px] px-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] sm:h-[400px] md:h-[500px] px-0">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
