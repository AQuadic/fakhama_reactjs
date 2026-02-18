import { create } from "zustand";

interface TripSelectionState {
  selectedAirportId: number | null;
  selectedFlightScheduleId: number | null;
  selectedPriceId: number | null;
  selectedHotel: string | null;
  selectedAirline: string | null;
  selectedAirportName: string | null;

  setSelectedAirport: (id: number | null) => void;
  setSelectedFlightSchedule: (id: number | null) => void;
  setSelectedPrice: (id: number | null) => void;
  setSelectedHotel: (hotel: string | null) => void;
  setSelectedAirline: (airline: string | null) => void;
  setSelectedAirportName: (airport: string | null) => void;
  reset: () => void;
}

export const useTripSelection = create<TripSelectionState>((set) => ({
  selectedAirportId: null,
  selectedFlightScheduleId: null,
  selectedPriceId: null,
  selectedHotel: null,
  selectedAirline: null,
  selectedAirportName: null,

  setSelectedAirport: (id) =>
    set({
      selectedAirportId: id,
      // Reset dependent selections when airport tab changes
      selectedFlightScheduleId: null,
      selectedPriceId: null,
    }),

  setSelectedFlightSchedule: (id) =>
    set((state) => ({
      selectedFlightScheduleId:
        state.selectedFlightScheduleId === id ? null : id,
    })),

  setSelectedPrice: (id) =>
    set((state) => ({
      selectedPriceId: state.selectedPriceId === id ? null : id,
    })),

  setSelectedHotel: (hotel) =>
    set((state) => ({
      selectedHotel: state.selectedHotel === hotel ? null : hotel,
    })),

  setSelectedAirline: (airline) =>
    set((state) => ({
      selectedAirline: state.selectedAirline === airline ? null : airline,
    })),

  setSelectedAirportName: (airport) =>
    set((state) => ({
      selectedAirportName:
        state.selectedAirportName === airport ? null : airport,
    })),

  reset: () =>
    set({
      selectedAirportId: null,
      selectedFlightScheduleId: null,
      selectedPriceId: null,
      selectedHotel: null,
      selectedAirline: null,
      selectedAirportName: null,
    }),
}));
