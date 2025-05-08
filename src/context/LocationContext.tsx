import React, { useState, useContext } from 'react';

export interface LocationContextType {
  selectedLocationIdx: number;
  setSelectedLocationIdx: (idx: number) => void;
  selectedCategory: 'Budgeted' | 'Luxury' | 'Treehouse';
  setSelectedCategory: (category: 'Budgeted' | 'Luxury' | 'Treehouse') => void;
}

const LocationContext = React.createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedLocationIdx, setSelectedLocationIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'Budgeted' | 'Luxury' | 'Treehouse'>('Budgeted');

  return (
    <LocationContext.Provider value={{ selectedLocationIdx, setSelectedLocationIdx, selectedCategory, setSelectedCategory }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
} 