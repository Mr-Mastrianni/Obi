// Sacred Calendar - Orisha Feast Days
// Based on Catholic saint syncretism

export interface FeastDay {
  month: number; // 0-11
  day: number;
  orisha: string;
  saint: string;
  type: 'major' | 'minor';
  description?: string;
}

export const feastDays: FeastDay[] = [
  // January
  { month: 0, day: 1, orisha: 'Eshu-Eleggua', saint: 'Holy Child of Atocha', type: 'major', description: 'New Year blessings' },
  { month: 0, day: 6, orisha: 'Ogun', saint: 'Three Kings', type: 'major', description: 'Epiphany' },
  { month: 0, day: 17, orisha: 'Ogun', saint: 'St. Anthony the Great', type: 'minor' },
  
  // February
  { month: 1, day: 2, orisha: 'Oya', saint: 'Our Lady of Candelaria', type: 'major', description: 'Oya\'s main feast day' },
  { month: 1, day: 5, orisha: 'Latuán', saint: 'Memorial', type: 'major', description: 'Anniversary of Latuán\'s death (1935)' },
  { month: 1, day: 11, orisha: 'Obatala', saint: 'Our Lady of Lourdes', type: 'major', description: 'Obatala\'s main feast day' },
  
  // March
  { month: 2, day: 4, orisha: 'Obatala', saint: 'St. Casimir', type: 'minor' },
  { month: 2, day: 17, orisha: 'Ochagrian/Ogun', saint: 'Saint Joseph', type: 'major', description: 'Workers\' feast' },
  { month: 2, day: 19, orisha: 'Ochagrian/Ogun', saint: 'St. Joseph', type: 'major', description: 'Main feast day' },
  { month: 2, day: 25, orisha: 'Obatala', saint: 'Annunciation', type: 'major', description: 'Obatala as creator' },
  
  // April
  { month: 3, day: 23, orisha: 'Shango', saint: 'St. George', type: 'major', description: 'Warrior feast' },
  
  // May
  { month: 4, day: 1, orisha: 'Ogun', saint: 'St. Joseph the Worker', type: 'major', description: 'Labor Day' },
  { month: 4, day: 4, orisha: 'Oshun', saint: 'St. Monica', type: 'minor' },
  { month: 4, day: 13, orisha: 'Obatala', saint: 'Our Lady of Fatima', type: 'major', description: 'Purity and peace' },
  { month: 4, day: 15, orisha: 'Oshun', saint: 'St. Isidore', type: 'minor' },
  { month: 4, day: 29, orisha: 'Eshu-Eleggua', saint: 'St. Paul', type: 'major', description: 'End of month' },
  
  // June
  { month: 5, day: 13, orisha: 'Eshu-Eleggua', saint: 'St. Anthony of Padua', type: 'major', description: 'Eshu\'s main feast day' },
  { month: 5, day: 24, orisha: 'Shango', saint: 'St. John the Baptist', type: 'major', description: 'Fire and thunder' },
  { month: 5, day: 29, orisha: 'Ogun', saint: 'St. Peter', type: 'major', description: 'Ogun\'s main feast day' },
  
  // July
  { month: 6, day: 12, orisha: 'Latuán', saint: 'Arrival Memorial', type: 'major', description: 'Latuán arrived in Cuba (1863)' },
  { month: 6, day: 16, orisha: 'Oshun', saint: 'Our Lady of Mount Carmel', type: 'major', description: 'Oshun\'s main feast day - Caridad del Cobre' },
  { month: 6, day: 25, orisha: 'Oya', saint: 'St. James the Greater', type: 'major', description: 'Warrior feast' },
  { month: 6, day: 26, orisha: 'Oya', saint: 'St. Anne', type: 'major', description: 'Motherhood' },
  
  // August
  { month: 7, day: 15, orisha: 'Yemaya', saint: 'Assumption of Mary', type: 'major', description: 'Yemaya\'s main feast day' },
  { month: 7, day: 24, orisha: 'Shango', saint: 'St. Bartholomew', type: 'major', description: 'End of Shango\'s month' },
  { month: 7, day: 28, orisha: 'Oshun', saint: 'St. Augustine', type: 'minor' },
  
  // September
  { month: 8, day: 7, orisha: 'Yemaya', saint: 'Our Lady of Regla', type: 'major', description: 'Yemaya\'s main feast day - Virgen de Regla' },
  { month: 8, day: 8, orisha: 'Obatala', saint: 'Nativity of Mary', type: 'major', description: 'Obatala\'s daughter' },
  { month: 8, day: 12, orisha: 'Oya', saint: 'Holy Name of Mary', type: 'minor' },
  { month: 8, day: 24, orisha: 'Oshosi', saint: 'St. Bartholomew', type: 'major', description: 'Hunter feast' },
  { month: 8, day: 29, orisha: 'Eshu-Eleggua', saint: 'Archangels', type: 'major', description: 'Divine messengers' },
  
  // October
  { month: 9, day: 4, orisha: 'Babalu-Aye', saint: 'St. Francis of Assisi', type: 'major', description: 'Babalu\'s feast day' },
  { month: 9, day: 7, orisha: 'Oshun', saint: 'Our Lady of the Rosary', type: 'minor' },
  { month: 9, day: 12, orisha: 'Oshun', saint: 'Our Lady of the Pillar', type: 'minor' },
  
  // November
  { month: 10, day: 1, orisha: 'All Orishas', saint: 'All Saints Day', type: 'major', description: 'Honoring all Orishas' },
  { month: 10, day: 2, orisha: 'Ancestors', saint: 'All Souls Day', type: 'major', description: 'Egun (ancestors) day' },
  { month: 10, day: 16, orisha: 'Oshosi', saint: 'St. Margaret', type: 'minor' },
  { month: 10, day: 22, orisha: 'Oya', saint: 'St. Cecilia', type: 'minor' },
  { month: 10, day: 25, orisha: 'Eshu-Eleggua', saint: 'St. Martin of Tours', type: 'minor' },
  
  // December
  { month: 11, day: 4, orisha: 'Shango', saint: 'St. Barbara', type: 'major', description: 'Shango\'s main feast day' },
  { month: 11, day: 6, orisha: 'Shango', saint: 'St. Nicholas', type: 'minor' },
  { month: 11, day: 8, orisha: 'Obatala', saint: 'Immaculate Conception', type: 'major', description: 'Purity' },
  { month: 11, day: 17, orisha: 'Shango', saint: 'St. Lazarus', type: 'major', description: 'Babalu-Aye and healing' },
  { month: 11, day: 25, orisha: 'All Orishas', saint: 'Christmas', type: 'major', description: 'Birth of the divine' },
  { month: 11, day: 31, orisha: 'Eshu-Eleggua', saint: 'New Year\'s Eve', type: 'major', description: 'Year-end cleansing' }
];

export const weekDays = [
  { day: 'Sunday', orisha: 'Obatala', description: 'Day of purity and creation' },
  { day: 'Monday', orisha: 'Yemaya', description: 'Day of motherhood and the ocean' },
  { day: 'Tuesday', orisha: 'Ogun', description: 'Day of work and iron' },
  { day: 'Wednesday', orisha: 'Shango', description: 'Day of thunder and justice' },
  { day: 'Thursday', orisha: 'Oshun', description: 'Day of love and rivers' },
  { day: 'Friday', orisha: 'Oya', description: 'Day of change and winds' },
  { day: 'Saturday', orisha: 'Eshu-Eleggua', description: 'Day of the crossroads' }
];

export function getFeastDaysForMonth(month: number): FeastDay[] {
  return feastDays.filter(f => f.month === month).sort((a, b) => a.day - b.day);
}

export function getNextFeastDay(fromDate: Date = new Date()): FeastDay | null {
  const currentMonth = fromDate.getMonth();
  const currentDay = fromDate.getDate();
  
  // Check remaining days in current month
  const thisMonth = feastDays.filter(f => 
    f.month === currentMonth && f.day >= currentDay
  ).sort((a, b) => a.day - b.day);
  
  if (thisMonth.length > 0) return thisMonth[0];
  
  // Check next months
  for (let i = 1; i <= 12; i++) {
    const checkMonth = (currentMonth + i) % 12;
    const nextMonth = feastDays.filter(f => f.month === checkMonth)
      .sort((a, b) => a.day - b.day);
    if (nextMonth.length > 0) return nextMonth[0];
  }
  
  return null;
}

export function daysUntilFeast(feast: FeastDay, fromDate: Date = new Date()): number {
  const feastDate = new Date(fromDate.getFullYear(), feast.month, feast.day);
  if (feastDate < fromDate && feastDate.getDate() !== fromDate.getDate()) {
    feastDate.setFullYear(fromDate.getFullYear() + 1);
  }
  const diffTime = feastDate.getTime() - fromDate.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
