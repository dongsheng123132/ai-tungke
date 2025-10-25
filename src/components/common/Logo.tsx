import React from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean; // 是否只显示图形或英文
};

export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      {/* 品牌英文 + 中文字标（纯文本方案，轻量且清晰） */}
      <span className="font-extrabold tracking-wide text-blue-600 text-2xl leading-none">
        TUNGKE
      </span>
      {!compact && (
        <span className="ml-2 font-extrabold text-blue-600 text-2xl leading-none">
          探客
        </span>
      )}
    </div>
  );
}