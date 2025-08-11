'use client';

import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-lg font-semibold mb-2">{property.name}</h3>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-4">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>

        {/* Price and Rating */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1">{property.rating}</span>
          </div>
          <div className="text-indigo-600 font-semibold">
            ${property.price}/night
          </div>
        </div>

        {/* Offers */}
        <div className="mt-2 flex items-center">
          <span className="text-sm text-gray-600">
            {property.offers.bed} beds • {property.offers.shower} bathrooms • {property.offers.occupants} guests
          </span>
        </div>

        {/* Discount Badge */}
        {property.discount && (
          <div className="mt-2 bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-sm">
            {property.discount}% off
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
