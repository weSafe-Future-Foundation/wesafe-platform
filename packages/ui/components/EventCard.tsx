import React from "react";
import { cn } from "./utils";
import { Badge } from "./Badge";
import { Card } from "./Card";

interface EventCardProps {
  title: string;
  shortDescription?: string | null;
  startDate: string | Date;
  endDate: string | Date;
  region: string;
  venue?: string | null;
  isOnline: boolean;
  bannerImageUrl?: string | null;
  registrationCount: number;
  maxParticipants?: number | null;
  entryFee?: number | null;
  slug: string;
  className?: string;
}

export function EventCard({
  title,
  shortDescription,
  startDate,
  region,
  venue,
  isOnline,
  bannerImageUrl,
  registrationCount,
  maxParticipants,
  entryFee,
  className,
}: EventCardProps) {
  const formattedDate = new Date(startDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const spotsLeft = maxParticipants
    ? maxParticipants - registrationCount
    : null;

  return (
    <Card hover padding="none" className={cn("overflow-hidden", className)}>
      {/* Banner Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500">
        {bannerImageUrl && (
          <img
            src={bannerImageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={isOnline ? "info" : "success"}>
            {isOnline ? "Online" : "In-Person"}
          </Badge>
          <Badge>{region}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        {shortDescription && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {shortDescription}
          </p>
        )}

        <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
          <span>{formattedDate}</span>
          {venue && <span>{venue}</span>}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-sm text-gray-600">
            {registrationCount} registered
            {spotsLeft !== null && spotsLeft > 0 && (
              <span className="text-orange-600"> ({spotsLeft} spots left)</span>
            )}
          </span>
          <span className="text-sm font-semibold text-blue-600">
            {entryFee ? `Rs ${entryFee}` : "Free"}
          </span>
        </div>
      </div>
    </Card>
  );
}
