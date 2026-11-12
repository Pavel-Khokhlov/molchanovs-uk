export interface Employee {
  id: number;
  avatarImage: string;
  name: string;
  header: string[];
  stage: string;
  role: string[];
}

const employees: Employee[] = [
  {
    id: 100,
    avatarImage: 'alexey',
    name: 'Alexey Molchanov',
    header: [
      'Holder of 46 world records',
      'Head of the Molchanovs brand',
    ],
    stage: 'w4it',
    role: ['Founder of the', 'N. Molchanova Freediving School'],
  },
  {
    id: 101,
    avatarImage: 'oxana',
    name: 'Oxana Molchanova',
    header: [
      'Freediving Instructor for:',
      'Adults and Children (5–18 y.o.)',
    ],
    stage: 'w3i',
    role: ['Lead instructor at the', 'N. Molchanova Freediving School'],
  },
];

export default employees;
