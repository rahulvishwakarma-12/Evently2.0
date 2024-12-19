import { getEventById } from '@/lib/actions/event.actions';
import { Event } from '@/types'; // Assuming you have an Event type
import Image from 'next/image';
import React from 'react';

// Define EventDetailsProps extending PageProps
type EventDetailsProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined }; 
};

const EventDetails = async ({ params: { id }, searchParams }: EventDetailsProps) => {
  const event = await getEventById(id) as Event; // Type assertion for clarity

  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default EventDetails;