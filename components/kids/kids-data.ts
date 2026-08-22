export type Parent = {
  name: string;
  relationship: string;
  status: "active" | "pending";
  initial: string;
};

export type Kid = {
  id: number;
  name: string;
  initial: string;
  age: string;
  room: string;
  linkedParentsLabel: string;
  badge?: string;
  badgeTone?: "allergy" | "link";
  birthDate: string;
  enrollmentDate: string;
  notes: string;
  parents: Parent[];
};

export const kids: Kid[] = [
  {
    id: 1,
    name: "Mateo Fernández",
    initial: "M",
    age: "3 años",
    room: "Soles",
    linkedParentsLabel: "2 padres vinculados",
    badge: "MANÍ",
    badgeTone: "allergy",
    birthDate: "12 mar 2022",
    enrollmentDate: "feb 2025",
    notes: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
    parents: [
      {
        name: "Lucía Fernández",
        relationship: "Mamá",
        status: "active",
        initial: "L",
      },
      {
        name: "Diego Fernández",
        relationship: "Papá",
        status: "pending",
        initial: "D",
      },
    ],
  },
  {
    id: 2,
    name: "Sofía Méndez",
    initial: "S",
    age: "2 años",
    room: "Soles",
    linkedParentsLabel: "1 padre vinculado",
    birthDate: "8 jul 2023",
    enrollmentDate: "mar 2025",
    notes: "Sin notas registradas.",
    parents: [
      {
        name: "Mariana Méndez",
        relationship: "Mamá",
        status: "active",
        initial: "M",
      },
    ],
  },
  {
    id: 3,
    name: "Benjamín Ruiz",
    initial: "B",
    age: "3 años",
    room: "Soles",
    linkedParentsLabel: "2 padres vinculados",
    birthDate: "21 abr 2022",
    enrollmentDate: "feb 2025",
    notes: "Sin notas registradas.",
    parents: [
      {
        name: "Paula Ruiz",
        relationship: "Mamá",
        status: "active",
        initial: "P",
      },
      {
        name: "Martín Ruiz",
        relationship: "Papá",
        status: "active",
        initial: "M",
      },
    ],
  },
  {
    id: 4,
    name: "Valentina Soto",
    initial: "V",
    age: "2 años",
    room: "Soles",
    linkedParentsLabel: "sin padres vinculados",
    badge: "VINCULAR",
    badgeTone: "link",
    birthDate: "3 nov 2023",
    enrollmentDate: "abr 2025",
    notes: "Sin notas registradas.",
    parents: [],
  },
  {
    id: 5,
    name: "Tomás Díaz",
    initial: "T",
    age: "3 años",
    room: "Soles",
    linkedParentsLabel: "1 padre vinculado",
    badge: "LACTOSA",
    badgeTone: "allergy",
    birthDate: "18 feb 2022",
    enrollmentDate: "feb 2025",
    notes: "Intolerancia a la lactosa.",
    parents: [
      {
        name: "Carolina Díaz",
        relationship: "Mamá",
        status: "active",
        initial: "C",
      },
    ],
  },
  {
    id: 6,
    name: "Emma Castro",
    initial: "E",
    age: "2 años",
    room: "Soles",
    linkedParentsLabel: "1 padre vinculado",
    birthDate: "30 ago 2023",
    enrollmentDate: "mar 2025",
    notes: "Sin notas registradas.",
    parents: [
      {
        name: "Federico Castro",
        relationship: "Papá",
        status: "active",
        initial: "F",
      },
    ],
  },
  {
    id: 7,
    name: "Lucas Romero",
    initial: "L",
    age: "3 años",
    room: "Soles",
    linkedParentsLabel: "1 padre vinculado",
    birthDate: "6 ene 2022",
    enrollmentDate: "feb 2025",
    notes: "Sin notas registradas.",
    parents: [
      {
        name: "Sabrina Romero",
        relationship: "Mamá",
        status: "active",
        initial: "S",
      },
    ],
  },
];
