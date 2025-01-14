import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export interface ScheduleDetail {
  date: Date;
  time: string;
  title: string;
  location: string;
  price: any;
}

interface ScheduleTableProps {
  schedules: ScheduleDetail[];
}

export function ScheduleTable({ schedules }: ScheduleTableProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="w-[60vw]">
      <CardHeader>
        <CardTitle className="text-xl">Detail Sertifikasi</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Tanggal</TableHead>
              <TableHead>Waktu</TableHead>
              <TableHead>Judul</TableHead>
              <TableHead>Lokasi</TableHead>
              <TableHead>Harga</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.map((schedule, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {formatDate(schedule.date)}
                </TableCell>
                <TableCell>{schedule.time}</TableCell>
                <TableCell>
                  <Link href={"detail/sertifikasi/a"} className="text-blue-700">
                    {schedule.title}
                  </Link>
                </TableCell>
                <TableCell>{schedule.location}</TableCell>
                <TableCell>{schedule.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ScheduleTable;
