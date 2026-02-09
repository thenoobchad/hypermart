"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  scales,
} from "chart.js";
import { Calendar } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const Charts = () => {

  const dataArray = Array.from({ length: 20 }).map((_, i) => i)

  const data = {
      labels: dataArray,
      datasets: [
        {
          data: [
            0, 10, 0, 0, 4,  0, 15,0, 0, 0, 0, 4,0, 0, 1, 9,
            0,0, 8,0,0,0,0
          ],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderWidth: 2,
          pointRadius: 0,
          fill: true,
          tension: 0.4,
        },
      ],
    };
  
    const data2 = {
      labels: dataArray,
      datasets: [
        {
          data: [0, 0, 0, 0, 4, 0, 15, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          borderColor: "#c61a09",
          backgroundColor: "#c61a09",
          borderWidth: 2,
          pointRadius: 0,
          fill: true,
          stepped: true,
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { display: false },
        y: { display: false, min: 0},
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  return (
    <>
      <section className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-5 w-full">
          <div>
            <p className="text-zinc-500 uppercase text-sm">Revenue</p>
            <div className="flex  gap-2 items-end">
              <h4 className="text-3xl ">$8,980.70 </h4>
              <span className="flex items-center gap-1 text-green-500 text-sm">
                31 Days <Calendar size={16} />
              </span>
            </div>
          </div>

          <div className="w-full h-12.5 flex justify-center">
            <Line data={data} options={options} width={100} height={100} />
          </div>
        </div>
      </section>

      <section className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-5 w-full">
          <div>
            <p className="text-zinc-500 uppercase text-sm">
              New user regisrations
            </p>
            <div className="flex  gap-2 items-end">
              <h4 className="text-3xl ">24 </h4>
              <span className="flex items-center gap-1 text-green-500 text-sm">
                31 Days <Calendar size={16} />
              </span>
            </div>
          </div>

          <div className="w-full h-[50px] ">
            <Line data={data2} options={options} width={100} height={100} />
          </div>
        </div>
      </section>
          
    </>
  )
}
