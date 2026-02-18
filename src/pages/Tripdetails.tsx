import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTripById } from "../lib/api/trips";
import Booking from "../components/home/Booking";
import Testimonials from "../components/home/Testimonials";
import TripDetailsHeader from "../components/trip_details/TripDetailsHeader";
import { Skeleton } from "../components/ui/skeleton";
import { useEffect } from "react";
import { useTripSelection } from "../lib/useTripSelection";

const Tripdetails = () => {
  const { id } = useParams<{ id: string }>();
  const reset = useTripSelection((s) => s.reset);

  const {
    data: trip,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trip", id],
    queryFn: () => getTripById(Number(id)),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  // Reset selections when trip changes
  useEffect(() => {
    reset();
  }, [id, reset]);

  if (isLoading) {
    return (
      <div className="container py-8!">
        <Skeleton className="h-6 w-48 rounded-full mb-8" />
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-1">
            <Skeleton className="w-full max-w-[789px] h-[427px] rounded-[32px]" />
            <Skeleton className="h-10 w-64 mt-8 rounded-lg" />
            <Skeleton className="h-6 w-40 mt-3 rounded-full" />
            <Skeleton className="h-24 w-full max-w-[730px] mt-8 rounded-lg" />
          </div>
          <Skeleton className="w-[379px] h-[500px] rounded-[32px]" />
        </div>
      </div>
    );
  }

  if (isError || !trip) {
    return (
      <div className="container py-20 text-center">
        <p className="text-gray text-lg">Failed to load trip details.</p>
      </div>
    );
  }

  return (
    <div>
      <TripDetailsHeader trip={trip} />
      <Testimonials />
      <Booking />
    </div>
  );
};

export default Tripdetails;
