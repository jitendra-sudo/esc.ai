"use client";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/atoms/CustomCursor"),
  { ssr: false }
);

export default function CursorProvider() {
  return <CustomCursor />;
}
